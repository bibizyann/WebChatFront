import {useEffect, useState} from "react";
import {logout} from "@/app/(root)/(auth)/session";

export const useLogout = () => {
    const [isLogout, setIsLogout] = useState(false)

    useEffect(() => {
        if (!isLogout) return;

        const getLogout = async () => {
            const logOut = await logout()
            setIsLogout(true)
        }

        getLogout()
    }, [isLogout]);

    return {isLogout, setIsLogout}
}