export const PUBLIC_ROUTE_REVISION = "nexah-science-r11-20261029";

export function withPublicRevision(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const url = new URL(href, "https://nexah.invalid");
  url.searchParams.set("rev", PUBLIC_ROUTE_REVISION);
  return `${url.pathname}${url.search}${url.hash}`;
}
