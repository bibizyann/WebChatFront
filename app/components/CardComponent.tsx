import React, {useState} from 'react';
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import ChangeAvatar from "@/app/components/ChangeAvatar";
import {useLogout} from "@/hooks/useLogout";

const CardComponent = ({params} : {params: user}) => {
    const [choseAvatar, setChoseAvatar] = useState(params.AvatarUrl)
    const [isOpen, setIsOpen] = useState(false)
    const {isLogout, setIsLogout} = useLogout()

    return (
        <>
            <ChangeAvatar params={{isOpen: isOpen, setIsOpen: setIsOpen, currAvatar: choseAvatar, setCurrAvatar: setChoseAvatar}}/>
            <Card className="w-[280px] h-[40px] bg-blue-3 dark:bg-dark-1 border-none">
                <CardContent className="flex flex-auto gap-3 justify-around justify-items-stretch content-center items-center">
                    <div>
                        <Avatar>
                            <AvatarImage src={choseAvatar} alt="@shadcn"/>
                            <AvatarFallback className="dark:bg-gray-500">{params.Username.substring(0,1).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="text-white">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className='bg-gradient hover:bg-white hover:text-black border-none'>
                                    {params.Username}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Button variant="outline" className="border-none" onClick={() => setIsOpen(true)}>Change Avatar</Button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Keyboard shortcuts
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>Email</DropdownMenuItem>
                                                <DropdownMenuItem>Message</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>More...</DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem>
                                        New Team
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuItem disabled>API</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <button type="submit" className="flex flex-between gap-2" onClick={() => setIsLogout(true)}>
                                        <span>Logout</span>
                                        <LogOut className="size-6 text-dark dark:text-white"/>
                                    </button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default CardComponent;