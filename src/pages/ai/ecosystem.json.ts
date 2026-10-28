import type { APIRoute } from "astro";
import { nexahIdentity } from "@/data/nexah-identity";

export const prerender = true;

export const GET: APIRoute = () => new Response(JSON.stringify({
  schema: "https://nexah.de/ai/ecosystem.schema.json",
  identity: nexahIdentity,
}, null, 2), {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
