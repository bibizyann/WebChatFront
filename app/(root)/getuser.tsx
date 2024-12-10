'use server';
import {cache} from "react";
import axios from "axios";
import {cookies} from "next/headers";

export const getUser = cache(async () : Promise<user> => {
    const cookie = cookies().toString()
    try {
        const response = await axios.get(
            "https://webchatmirea.onrender.com/validate",
            {
                headers: {'Cookie': cookie},
            }
        );

        const user = response.data.message

        return user
    } catch (error) {
        console.log('Failed to fetch user', error)
        return null
    }
});