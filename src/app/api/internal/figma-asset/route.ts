import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

async function fetchAllowedSource(source: string) {
  let url: URL;
  try {
    url = new URL(source);
  } catch {
    return { error: new Response("Invalid src", { status: 400 }) } as const;
  }

  if (
    url.protocol !== "https:" ||
    url.hostname !== "www.figma.com" ||
    !url.pathname.startsWith("/api/mcp/asset/")
  ) {
    return { error: new Response("Source not allowed", { status: 403 }) } as const;
  }

  const upstream = await fetch(url, { cache: "no-store" });
  if (!upstream.ok) {
    return { error: new Response("Upstream asset unavailable", { status: upstream.status }) } as const;
  }

  return {
    body: await upstream.arrayBuffer(),
    contentType: upstream.headers.get("content-type") ?? "application/octet-stream",
  } as const;
}

export async function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams.get("src");
  const encoding = request.nextUrl.searchParams.get("encoding");
  const meta = request.nextUrl.searchParams.get("meta") === "1";
  const width = Number(request.nextUrl.searchParams.get("width") ?? 0);
  const quality = Number(request.nextUrl.searchParams.get("quality") ?? 82);

  if (!source) {
    return new Response("Missing src", { status: 400 });
  }

  let result: { body: ArrayBuffer; contentType: string } | { error: Response };

  if (Number.isFinite(width) && width > 0) {
    const rawPath = `/api/internal/figma-asset?src=${encodeURIComponent(source)}`;
    const optimizerUrl = new URL("/_next/image", request.nextUrl.origin);
    optimizerUrl.searchParams.set("url", rawPath);
    optimizerUrl.searchParams.set("w", String(Math.round(width)));
    optimizerUrl.searchParams.set("q", String(Math.max(1, Math.min(100, Math.round(quality)))));

    const optimized = await fetch(optimizerUrl, { cache: "no-store" });
    if (!optimized.ok) {
      return new Response(`Optimizer unavailable (${optimized.status})`, { status: optimized.status });
    }

    result = {
      body: await optimized.arrayBuffer(),
      contentType: optimized.headers.get("content-type") ?? "image/webp",
    };
  } else {
    result = await fetchAllowedSource(source);
  }

  if ("error" in result) return result.error;

  if (meta) {
    return Response.json({
      bytes: result.body.byteLength,
      contentType: result.contentType,
    }, { headers: { "Cache-Control": "private, no-store, max-age=0" } });
  }

  if (encoding === "base64") {
    return new Response(Buffer.from(result.body).toString("base64"), {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "private, no-store, max-age=0",
        "X-Asset-Content-Type": result.contentType,
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return new Response(result.body, {
    status: 200,
    headers: {
      "Content-Type": result.contentType,
      "Cache-Control": "private, no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
