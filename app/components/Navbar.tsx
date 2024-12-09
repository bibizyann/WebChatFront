"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/app/components/ThemeToggle";
import CardComponent from "@/app/components/CardComponent";
import {useUser} from "@/hooks/useUser";

const Navbar = () => {
    const {user, isLoaded} = useUser()

    return (
        <nav className='flex flex-between fixed z-50 w-full bg-blue-3 dark:bg-dark-1 px-6 py-4 lg:px-10'>
            <Link href='/' className='flex items-center gap-1'>
                <Image src="/icons/logo.png" width={30} height={30} alt="WebChatMIREA" className='max-sm:size-10'/>
                <p className='text-[26px] font-zentry text-white max-sm:hidden'>WebChatMIREA</p>
            </Link>
            <div className="flex flex-betwween gap-1 justify-end">
                <ThemeToggle/>
            </div>
            <div className='flex-between'>
                {user && user?.Id ? (
                    <CardComponent params={user}/>
                ) : (
                    <Button asChild variant="outline" className='bg-gradient hover:bg-white hover:text-black border-white'>
                        <a href="/registration" className='text-white no-underline'>
                            Sign Up
                        </a>
                    </Button>
                )}

                <MobileNav/>
            </div>
        </nav>
    );
};

export default Navbar;