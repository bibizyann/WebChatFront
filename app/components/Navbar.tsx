import React from 'react';
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
            <Link href='/' className='flex items-center gap-1'>
                <Image src="/icons/logo.png" width={30} height={30} alt="WebChatMIREA" className='max-sm:size-10'/>
                <p className='text-[26px] font-zentry text-white max-sm:hidden'>WebChatMIREA</p>
            </Link>

            <div className='flex-between gap-5'>
                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;