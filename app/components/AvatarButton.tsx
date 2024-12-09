import React from 'react';
import {Avatar, AvatarImage,} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";

interface avatarButton {
    img: string;
    isActive: boolean,
    handleClick?: () => void;
}
const AvatarButton = ({img, isActive, handleClick} : avatarButton) => {
    return (
        <section onClick={handleClick} className="">
            <Avatar className={cn(
                "border-2 border-gray-600 hover:border-gray-300 size-[70px]",
                {
                    "border-blue-500": isActive,
                }
                )}>
                <AvatarImage src={img} alt="avatar" sizes={"9"}/>
            </Avatar>
        </section>
    );
};

export default AvatarButton;