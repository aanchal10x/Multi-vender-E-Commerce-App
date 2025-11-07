import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook(.*)"], // add your public routes here
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // protects all routes except static files
};





