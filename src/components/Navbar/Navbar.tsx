import React from 'react';
import Link from 'next/link';
import { navLinks } from "@/constant/constant";

type Props = {
    openNav: () => void;
}

const Navbar = ({openNav}:Props) => {

    return (

        <div className="custom-padding flex justify-between items-center h-30 font-archivo">

            <Link href="/" className="text-sm">
                <span className="text-2xl font-bold">Mark,</span> <br /> Designer / Web Developer
            </Link>

            <div className="space-x-10 md:flex hidden">
                {navLinks.map((link) => {
                    return (
                        <Link
                            href={link.url}
                            key={link.id}
                            className="hover:text-teal-200 transition-all duration-300 cursor-pointer relative z-10"
                        >
                            <span>{link.label}</span>
                        </Link>




                    )
                })}
            </div>

            {/* Mobile menu toggle */}
            <button className="md:hidden flex" >
                <i className="ri-menu-3-line" onClick={openNav}></i>
            </button>
        </div>

    );
};

export default Navbar;
