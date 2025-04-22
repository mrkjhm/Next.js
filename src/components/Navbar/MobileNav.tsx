"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navLinks } from "@/constant/constant";

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
    const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        closeNav();
    };

    // Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDir('down');
            } else {
                setScrollDir('up');
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // Close nav on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && showNav) {
                closeNav();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [showNav, closeNav]);

    // Disable scroll when nav is open
    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showNav]);

    return (
        <div>
            <div
                className={`fixed inset-0 z-[1002] w-full h-screen bg-black/70 transform transition-all duration-500 ${navOpen} ${scrollDir === 'down' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <div
                    className={`text-white ${navOpen} fixed ps-10 py-10 flex flex-col h-full transition-all transform duration-500 delay-300 w-[80%] sm:w-[80%] bg-black space-y-6 z-[1050]`}
                >
                    {navLinks.map((link) => (
                        <Link
                            href={link.url}
                            key={link.id}
                            className="hover:text-teal-200 transition-all duration-300"
                        >
                            <span className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]" onClick={toggleMenu}>
                                {link.label}
                            </span>
                        </Link>
                    ))}
                    <i
                        className="ri-close-fill absolute top-[2rem] right-[2rem] text-2xl cursor-pointer"
                        onClick={closeNav}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
