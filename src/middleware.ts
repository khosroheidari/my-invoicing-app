import { WithClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicPaths = ["/", "/sign-in(.*)", "/sign-up(.*)", "/invoices/(.*)/payment"];

export default WithClerkMiddleware((req) => {
  const { pathname } = req.nextUrl;
  
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }
  
  // Continue with your auth logic
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
