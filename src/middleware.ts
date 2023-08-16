import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/admin']
}

export default withAuth(
  function middleware(req) {
    const currentUrl = req.nextUrl.clone()

    if (
      '/'.indexOf(currentUrl.pathname) !== -1 &&
      req.nextauth.token !== null
    ) {
      return NextResponse.redirect(new URL('/home', req.url))
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: params => !!params.token
    }
  }
)
