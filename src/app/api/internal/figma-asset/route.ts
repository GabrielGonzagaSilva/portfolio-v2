import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get("src");

  if (!source) {
    return new Response("Missing src", { status: 400 });
  }

  let url: URL;
  try {
    url = new URL(source);
  } catch {
    return new Response("Invalid src", { status: 400 });
  }

  if (
    url.protocol !== "https:" ||
    url.hostname !== "www.figma.com" ||
    !url.pathname.startsWith("/api/mcp/asset/")
  ) {
    return new Response("Source not allowed", { status: 403 });
  }

  const upstream = await fetch(url, { cache: "no-store" });
  if (!upstream.ok) {
    return new Response("Upstream asset unavailable", { status: upstream.status });
  }

  const body = await upstream.arrayBuffer();
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "application/octet-stream",
      "Cache-Control": "private, no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
