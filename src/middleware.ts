import {NextResponse, type NextRequest} from "next/server";

export function middleware(req: NextRequest) {
  const currentUrl = req.nextUrl.clone();

  if ("/".indexOf(currentUrl.pathname) !== -1) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
  return NextResponse.next();
}

export {default} from "next-auth/middleware";

export const config = {
  matcher: ["/account/:name", "/cart/:name", "/"]
};
