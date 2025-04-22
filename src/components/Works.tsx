import Image from 'next/image'
import work_1 from '../../public/work1.png'
import work_2 from '../../public/work2.png'
import work_3 from '../../public/work3.png'
import work_4 from '../../public/work4.png'
import work_5 from '../../public/work5.png'
import work_6 from '../../public/work6.png'
import work_7 from '../../public/work7.png'
import work_8 from '../../public/work8.png'

export default function Works() {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2" id="works">
            <Image src={work_1} alt="work_1" className="w-full"/>
            <Image src={work_2} alt="work_2" className="w-full"/>
            <Image src={work_3} alt="work_3" className="w-full"/>
            <Image src={work_4} alt="work_4" className="w-full"/>
            <Image src={work_5} alt="work_5" className="w-full"/>
            <Image src={work_6} alt="work_6" className="w-full"/>
            <Image src={work_7} alt="work_7" className="w-full"/>
            <Image src={work_8} alt="work_8" className="w-full"/>

        </div>
    )
}