import { NextResponse, NextRequest } from 'next/server'
 
function generateNonce() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Buffer.from(bytes).toString("base64");
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const isDev = process.env.NODE_ENV === "development";

   const csp = `
    default-src 'self';

    base-uri 'self';
    object-src 'none';
    frame-ancestors 'none';
    form-action 'self';

    script-src
      'self'
      'nonce-${nonce}'
      'strict-dynamic'
      ${isDev ? "'unsafe-eval'" : ""};

    style-src
      'self'
      'unsafe-inline'
      https://fonts.googleapis.com;

    font-src
      'self'
      https://fonts.gstatic.com
      data:;

    img-src
      'self'
      data:
      blob:
      https:
      https://img2.pic.in.th
      https://res.cloudinary.com;

    media-src
      'self'
      https://res.cloudinary.com;

    connect-src
      'self'
      https:
      https://img2.pic.in.th
      https://api.cloudinary.com
      https://res.cloudinary.com
      https://va.vercel-scripts.com;

    frame-src
      https://www.youtube.com
      https://www.youtube-nocookie.com;

    worker-src
      'self'
      blob:;

    manifest-src
      'self';

    upgrade-insecure-requests;
  `
    .replace(/\n/g, "")
    .replace(/\s{2,}/g, " ");
 const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);

    const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", csp);

  response.headers.set(
  "X-Frame-Options",
  "DENY"
);

response.headers.set(
  "X-Content-Type-Options",
  "nosniff"
);

response.headers.set(
  "Referrer-Policy",
  "strict-origin-when-cross-origin"
);

response.headers.set(
  "Permissions-Policy",
  "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=()"
);

response.headers.set(
  "Cross-Origin-Opener-Policy",
  "same-origin"
);

response.headers.set(
  "Cross-Origin-Resource-Policy",
  "same-origin"
);

response.headers.set(
  "Origin-Agent-Cluster",
  "?1"
);

response.headers.set(
  "X-DNS-Prefetch-Control",
  "off"
);

response.headers.set(
  "X-Permitted-Cross-Domain-Policies",
  "none"
);

  return response;


  // return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|about|:path).*)",
  ],
}