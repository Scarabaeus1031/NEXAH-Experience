import type { APIRoute } from "astro";
import { renderNexahMarkdown } from "@/data/nexah-identity";

export const prerender = true;

export const GET: APIRoute = () => new Response(renderNexahMarkdown(), {
  headers: {
    "Content-Type": "text/markdown; charset=utf-8",
  },
});
