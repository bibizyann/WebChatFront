import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {decrypt} from "@/app/(root)/(auth)/session";

const publicRoutes = ['/login', '/registration']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const { headers } = await fetch(req);

    const cookie = cookies().get('Authorization')?.value
    const session = await decrypt(cookie)

    if (headers.has("Set-Cookie")) {
        const cookies = headers.get("Set-Cookie")!;

        // Replace the Domain attribute to localhost
        const modifiedCookies = cookies.replace(/Domain=[^;]+/, "Domain=webchatfront-6xch.vercel.app");

        // Set the modified Set-Cookie header
        headers.set("Set-Cookie", modifiedCookies);
    }

    if (
        isPublicRoute &&
        session?.sub &&
        req.nextUrl.pathname.startsWith('/login')
    ) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next({
        headers: headers,
    })
}
