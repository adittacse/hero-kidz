import { NextResponse } from 'next/server'
import {getToken} from "next-auth/jwt";

const privateRoute = [
    "/dashboard",
    "/cart",
    "/checkout"
];

export async function proxy(req) {
    const token = await getToken({ req });
    const isAuthenticated = Boolean(token);
    const reqPath = req.nextUrl.pathname;
    const isPrivateReq = privateRoute.some(route => req.nextUrl.pathname.startsWith(route));

    if (!isPrivateReq && isPrivateReq) {
        return NextResponse.redirect(new URL(`/login?callbackUrl=${reqPath}`, req.url));
    }
    // return NextResponse.redirect(new URL("/", req.url))
    return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/cart/:path*",
        "/checkout/:path*"
    ],
}