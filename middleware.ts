import { withClerkMiddleware } from "@clerk/nextjs/dist/edge"
import { NextResponse } from 'next/server';

export default withClerkMiddleware(() => {
  return NextResponse.next();
});

// Required for Edge
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // Adjust routes as needed
};






