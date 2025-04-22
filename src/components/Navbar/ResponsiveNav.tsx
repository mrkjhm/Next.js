'use client'

import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import MobileNav from "@/components/Navbar/MobileNav";

const ResponsiveNav = () => {

    const [showNav, setShowNav] = React.useState(false);

    const openNavHandler = () =>setShowNav(true);
    const closeNavHandler = () =>setShowNav(false);

    return (
        <div>
            <Navbar openNav={openNavHandler}/>
            <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
        </div>
    )
}
export default ResponsiveNav
