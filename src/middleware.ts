import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const JWt_TOKEN_KEY = 'sample';

const middleware = (request: NextRequest) => {
  // const { pathname } = request.nextUrl;
  // if (
  //   pathname.startsWith('/_next') ||
  //   pathname.startsWith('/api') ||
  //   pathname.startsWith('/static') ||
  //   pathname.includes('.') ||
  //   PUBLIC_FILE.test(pathname)
  // ) {
  //   return NextResponse.next();
  // }
  // const JWTToken = request.cookies.get(JWt_TOKEN_KEY);
  // const url = request.nextUrl.clone();
  // if (pathname === '/') {
  //   if (JWTToken) {
  //     url.pathname = '/home';
  //     return NextResponse.rewrite(url);
  //   }
  //   return NextResponse.next();
  // }
  // if (JWTToken) {
  //   return NextResponse.next();
  // }
  // url.pathname = '/';
  // return NextResponse.rewrite(url);
  return NextResponse.next();
};

export default middleware;
