export function GET(request: Request) {
  return Response.redirect(new URL("/og-home-figma.png", request.url), 307);
}
