import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ACCESS_TOKEN_KEY } from './constants/authentication';

const PUBLIC_FILE = /\.(.*)$/;

const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }
  const JWTToken = request.cookies.get(ACCESS_TOKEN_KEY);
  const url = request.nextUrl.clone();
  if (pathname === '/' || pathname === '/auth/kakao/login') {
    if (JWTToken) {
      url.pathname = '/home';
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }
  if (JWTToken) {
    return NextResponse.next();
  }
  url.pathname = '/';
  return NextResponse.rewrite(url);
};

export default middleware;
