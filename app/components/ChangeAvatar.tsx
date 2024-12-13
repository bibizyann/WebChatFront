import React, {Dispatch} from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog"
import {avatarLinks} from "@/env-constants/avatarLinks";
import AvatarButton from "@/app/components/AvatarButton";
import axios from "axios";

interface changing {
    email: string,
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
    currAvatar: string,
    setCurrAvatar: Dispatch<React.SetStateAction<string>>
}

interface userAvatar {
    email: string,
    AvatarUrl: string,
}
const ChangeAvatar = ({params} : {params: changing}) => {
    const handleSubmit = async ({email, AvatarUrl} : userAvatar) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/avatar",
                {email, AvatarUrl},
                {
                    withCredentials: true,
                }
            );
            console.log("Registration successful:", response.data);
        } catch (error) {
            console.error("There was a problem with the registration:", error);
        }
    };

    return (
        <Dialog open={params.isOpen}>
            <DialogContent className="sm:max-w-[400px]">
                <div className="grid gap-5 py-4">
                    <div className="grid grid-cols-3 items-center m-auto">
                        {avatarLinks.map((item) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <AvatarButton img={item.img} isActive={params.currAvatar === item.img} handleClick={() => params.setCurrAvatar(item.img)}/>
                            )
                        })}
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        {/*Должна быть ручка для отпраки относителньой ссылки в баазу данных*/}
                        <Button type="submit" onClick={() => {
                            params.setIsOpen(false)
                            handleSubmit({email: params.email, AvatarUrl: params.currAvatar})
                        }}>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ChangeAvatar;