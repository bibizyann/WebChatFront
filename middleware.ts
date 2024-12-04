import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {decrypt} from "@/app/(root)/(auth)/session";

const publicRoutes = ['/login', '/registration']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = cookies().get('Authorization')?.value
    const session = await decrypt(cookie)

    if (
        isPublicRoute &&
        session?.sub &&
        req.nextUrl.pathname.startsWith('/login')
    ) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    return NextResponse.next()
}
