
import { NextResponse } from "next/server";

const defaultLocale = "fr";
const locales = ["fr", "en"];

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  let locale = defaultLocale;
  let slug = pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (!pathnameIsMissingLocale) {
    locale = pathname.substring(1, 3);
    slug = pathname.substring(3);
  }

  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const newUrl = new URL(`${request.nextUrl.protocol}//${request.nextUrl.host}/${slug}`);
    return NextResponse.redirect(
      new URL(pathname.replace(`/${defaultLocale}`, pathname === `/${defaultLocale}` ? "/" : ""), request.url)
    );
  } else {
    const newUrl = new URL(`${request.nextUrl.protocol}//${request.nextUrl.host}/${locale}${slug}`);
    return NextResponse.rewrite(newUrl);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img|favicon.ico).*)"],
};



// import { i18nRouter } from "next-i18n-router";
// import i18nConfig from "./i18nConfig";

// export function middleware(request) {
//     return i18nRouter(request, i18nConfig);
// }

// export const config = {
//     matcher: '/((?!api|static|.*\\..*|_next).*)'
// };