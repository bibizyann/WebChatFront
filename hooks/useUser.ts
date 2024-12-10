import {useEffect, useState} from 'react';
import {getUser} from "@/app/(root)/getuser";

export const useUser = () => {
    const [user, setUser] = useState<user>()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const updateUser = async () => {
            const updatedUser = await getUser()
            if (updatedUser){
                setUser(updatedUser)
                setIsLoaded(true)
            }
        }
        updateUser()
    }, []);

    return {user, isLoaded}
}