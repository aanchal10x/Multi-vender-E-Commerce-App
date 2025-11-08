import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Add your public routes if needed
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
