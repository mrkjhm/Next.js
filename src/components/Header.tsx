import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../public/card-hello-memoji.png'
import profile_img from '../../public/avatar-img.png'

import LinkedIn from '../../public/LinkedIn.png';
import Github from '../../public/Github.png';
import Twitter from '../../public/Twitter.png';

const Header = () => {
    return (
        <div className="container mx-auto custom flex flex-col sm:flex-row gap-2 justify-between ">
            <div className="flex flex-col justify-center bg-white/8  w-full py-5 sm:px-7 px-5 rounded-3xl sm:w-2/3 space-y-5 ">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex gap-5">
                        <Image src={avatar} alt="avatar" className="h-10 w-10"/>
                        <div>
                            <p>Hi, I'm Mark.</p>
                            <p className="text-[10px] text-gray-400/50">Designer / Web Developer</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link href="https://x.com/" target="_blank"><Image src={Twitter} alt="twitter" className="w-7 h-7 sm:h-8 sm:w-8"/></Link>
                        <Link href="https://www.linkedin.com/" target="_blank"><Image src={LinkedIn} alt="linkedin" className="w-7 h-7 sm:h-8 sm:w-8"/></Link>
                        <Link href="https://github.com/" target="_blank"><Image src={Github} alt="github" className="w-7 h-7 sm:h-8 sm:w-8"/></Link>



                    </div>
                </div>
                <h1 className="lg:text-5xl sm:text-3xl text-2xl  font-archivo">
                    Passionate to pursue <br/>
                    the technology.
                </h1>
                <p className="text-[10px] text-gray-400">
                    I enjoy learning new things and try to overcome <br/> new challenges while analyzing how I improved through them.
                </p>
            </div>
            <div className="relative h-[280px] bg-[#FFD951] px-10 py-10 sm:w-1/3 w-full rounded-3xl flex justify-center ">
                <Image src={profile_img} alt="profile image" className="absolute bottom-0 w-80"/>
            </div>
        </div>
    )
}
export default Header
