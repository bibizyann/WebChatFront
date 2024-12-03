"use client"

import React from 'react';
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import {sidebarLinks} from "@/env-constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image src="/icons/hamburger.svg" width={36} height={36}
                           alt="hamburger icon" className='cursor-pointer sm:hidden' />
                </SheetTrigger>
                <SheetContent side="left" className='border-non bg-slate-400 dark:bg-dark-1'>
                    <Link href='/' className='flex items-center gap-1'>
                        <Image src="/icons/logo.png" width={32} height={32} alt="WebChtMIREA" className='max-sm:size-10'/>
                        <p className='text-[26px] font-zentry text-white'>WebChatMIREA</p>
                    </Link>

                    <div className='flex h-[calc(100vh-72px)] flex-col justify-content-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className='flex h-full flex-col gap-6 pt-16 dark:text-white'>
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route;

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                href={item.route}
                                                key={item.label}
                                                className={cn(
                                                    'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                                    {
                                                        'bg-blue-1': isActive,
                                                    }
                                                )}
                                            >
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                />
                                                <p className="font-semibold">
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    );
};

export default MobileNav;