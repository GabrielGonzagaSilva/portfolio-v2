import { NextRequest, NextResponse } from "next/server";

const PUBLIC_BLOCK_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0",
  "Content-Type": "text/plain; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

export function proxy(_request: NextRequest) {
  const isProduction = process.env.VERCEL_ENV === "production";
  const internalToolsEnabled =
    process.env.ENABLE_INTERNAL_TOOLS === "1" && !isProduction;

  if (!internalToolsEnabled) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: PUBLIC_BLOCK_HEADERS,
    });
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

export const config = {
  matcher: [
    "/vagas/:path*",
    "/api/vagas/:path*",
    "/api/internal/:path*",
    "/job-radar/:path*",
    "/job-radar-deploy-20260922.txt",
    "/job-radar-gupy-20260922.txt",
  ],
};
