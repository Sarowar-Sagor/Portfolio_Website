import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const menuRef = useRef();
    const [isScroll, setIsScroll] = useState(false);

    const openMenu = () => {
        menuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        menuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) setIsScroll(true);
            else setIsScroll(false);
        })
    }, [])

    return (
        <div>

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image className='w-full' alt='' src={assets.header_bg_color}></Image>
            </div>

            <nav className={`${isScroll ? 'backdrop-blur-xs shadow-sm' : '' } w-full fixed px-5 lg:px-3 xl:px-[7%] py-4 flex items-center justify-between z-30`}>
                <a href="#top">
                    <Image alt='myLogo' src={assets.logo} className='w-14 h-10 cursor-pointer mr-14'></Image>
                </a>

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50'>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My work</a></li> 
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li> 
                </ul>

                <div className='flex items-center gap-3'>

                    {/* <button>
                        <Image className='w-6' alt='' src={assets.moon_icon}></Image>
                    </button> */}

                    <a className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 font-Ovo' href="#contact">Contact <Image alt='navarRight' src={assets.arrow_icon} className='w-3'></Image></a>

                    <button onClick={openMenu} className='block md:hidden ml-3'>
                        <Image className='w-6' src={assets.menu_black} alt=''></Image>
                    </button>
                </div>
                
                {/* mobile menu */}
                <ul ref={menuRef} className='md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-rose-100 transition duration-500'>
                    
                    <div onClick={closeMenu} className='absolute right-6 top-6'>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
                    </div>

                    <li><a onClick={closeMenu} className='font-Ovo' href="#top">Home</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#about">About me</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#services">Services</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#work">My work</a></li> 
                    <li><a onClick={closeMenu} className='font-Ovo' href="#contact">Contact me</a></li> 
                </ul>                

            </nav>
        </div>
    );
};

export default Navbar;