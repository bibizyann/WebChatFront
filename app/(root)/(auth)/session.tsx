import 'server-only';

import {jwtVerify} from 'jose';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import axios from "axios";
import { cache } from 'react';

const secretKey = "SECRET";
const key = new TextEncoder().encode(secretKey);

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        return null;
    }
}

export async function verifySession() {
    const cookie = cookies().get('Authorization')?.value;
    const session = await decrypt(cookie);
    console.log(session)
    if (!session?.sub) {
        redirect('/login');
    }

    return {isAuth: true, userId: session.sub};
}

export async function logout() {
    try {
        const response = await axios.post(
            "http://localhost:8080/logout",
            {
                withCredentials: true,
            }
        );
        console.log(response.data);
        cookies().delete('Authorization');
    } catch (error) {
        console.error("There was a problem with the logout:", error);
    }
}

// export const getUser = cache(async () => {
//     const session = await verifySession()
//     if (!session) return null
//
//     // try {
//     //     const data = await db.query.users.findMany({
//     //         where: eq(users.id, session.userId),
//     //         // Explicitly return the columns you need rather than the whole user object
//     //         columns: {
//     //             id: true,
//     //             name: true,
//     //             email: true,
//     //         },
//     //     })
//     //
//     //     const user = data[0]
//     //
//     //     return user
//     // } catch (error) {
//     //     console.log('Failed to fetch user')
//     //     return null
//     // }
// })