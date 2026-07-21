#!/usr/bin/env ruby

require "json"
require "yaml"

project_root = File.expand_path("..", __dir__)
catalog_root = ARGV[0] || ENV["NEXAH_CATALOG_PATH"]

abort "Set NEXAH_CATALOG_PATH or pass the Publication Catalog directory." unless catalog_root

catalog_root = File.expand_path(catalog_root)
index_path = File.join(catalog_root, "website_catalog.yaml")
works_glob = File.join(catalog_root, "works", "*.yaml")
output_path = File.join(project_root, "src", "data", "generated", "publication-catalog.json")

abort "Publication Catalog index not found: #{index_path}" unless File.file?(index_path)

load_yaml = lambda do |path|
  YAML.safe_load(File.read(path), permitted_classes: [], permitted_symbols: [], aliases: true)
end

index = load_yaml.call(index_path)
works = Dir[works_glob].sort.map do |path|
  work = load_yaml.call(path)
  editorial = work.fetch("editorial")
  source = work.fetch("source")
  cover = work.fetch("cover")

  {
    "catalogKey" => work.fetch("catalog_key"),
    "title" => work.fetch("display_title"),
    "slug" => source.fetch("arena_slug"),
    "registeredEntityId" => work["registered_entity_id"],
    "type" => editorial.fetch("type"),
    "form" => editorial.fetch("form"),
    "series" => editorial["series"],
    "catalogDepth" => work.fetch("catalog_depth"),
    "description" => source.fetch("description").gsub(/\s+/, " ").strip,
    "sourceUrl" => source.fetch("canonical_url"),
    "cover" => {
      "src" => cover.dig("variants", "medium") || cover.fetch("original_url"),
      "width" => cover.fetch("width"),
      "height" => cover.fetch("height"),
      "alt" => cover["alt_text"]
    },
    "shelves" => Array(editorial["shelves"]),
    "publicationStatus" => editorial.fetch("publication_status"),
    "revisionState" => editorial.fetch("revision_state"),
    "contentMaturity" => editorial.fetch("content_maturity"),
    "classificationState" => editorial.fetch("classification_state"),
    "blockCount" => work.dig("structure", "block_count")
  }
end.sort_by { |work| [work.fetch("title").downcase, work.fetch("catalogKey")] }

expected_count = index.dig("summary", "works")
abort "Catalog count mismatch: index=#{expected_count}, records=#{works.length}" unless works.length == expected_count

keys = works.map { |work| work.fetch("catalogKey") }
abort "Catalog keys are not unique" unless keys.uniq.length == keys.length

projection = {
  "schemaVersion" => "0.1",
  "projectionType" => "read_only_publication_catalog",
  "source" => {
    "schemaVersion" => index.fetch("schema_version"),
    "generatedAt" => index.fetch("generated_at"),
    "status" => index.fetch("status"),
    "works" => expected_count
  },
  "records" => works
}

File.write(output_path, JSON.pretty_generate(projection) + "\n")
puts "Generated #{output_path} from #{works.length} Publication Catalog records."
