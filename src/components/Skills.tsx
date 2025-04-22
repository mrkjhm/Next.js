import React from 'react'
import Image from 'next/image'
import icons from '../../public/icons.png'


import email from '../../public/SVG.png'
import vector from '../../public/Vector.png'
import memoji from '../../public/contact-memoji.png'
import Link from "next/link";


export default function Skills() {
    return (
        <>
            <div className=" flex flex-col md:flex-row gap-2 mb-10 mx-auto container " id="skills">


                <div className="md:w-3/5 lg:w-3/4 w-full lg:h-[350px] sm:h-[490px] md:h-[400px]  bg-white/10 rounded-3xl relative flex justify-center">

                    <div className="flex flex-col lg:flex-row items-center pt-5">
                        <div className="  space-y-3 px-10 my-5">

                            <p className="text-[12px]">I constantly try to improve myself</p>
                            <p className="text-2xl">Currently, I am learning GoLang.</p>
                            <p className="text-[12px] text-gray-400">I am also learning TypeScript
                                via my open source repos. <br className="hidden sm:block"/>
                                Other than that, I also
                                constantly practice web
                                design.</p>
                        </div>
                        <div className="flex -left-2 ">
                            <Image src={icons} alt="icons"/>
                        </div>
                    </div>
                </div>

                <div className="relative md:w-2/5 lg:w-1/4 lg:h-[350px] md:h-[400px] bg-white/10 rounded-3xl px-7 py-10 overflow-hidden" id="contact">
                    <p className="text-[28px]">Contact me</p>
                    <p className="text-[12px] text-gray-400 mb-10">Make a contact via <br/> email or twitter DMs.</p>
                    <div className="flex flex-col gap-2">
                        <a href="mailto:graphic2023designer@gmail.com">
                            <Image src={email} alt="Send email" className="bg-white/5 cursor-pointer"/>
                        </a>
                        <Link href="https://x.com/" target="_blank"><Image src={vector} alt="vector" className="bg-white/5"/></Link>

                    </div>
                    <div className="absolute bottom-0 md:-right-10 w-60 sm:w-98 md:w-65 lg:-right-20 -right-0">
                        <Image src={memoji} alt="memoji" className=""/>
                    </div>
                </div>

            </div>
        </>
    )
}
