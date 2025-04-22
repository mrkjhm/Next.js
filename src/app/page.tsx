import Header from "../components/Header";
import Works from "../components/Works";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <div className="custom-padding">
            <div className="space-y-5">
                <Header />
                {/*<div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
                    <p className='text-white hidden xl:block'>xl screen</p>
                    <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
                    <p className='text-white lg:hidden md:block hidden'>md screen</p>
                    <p className='text-white md:hidden sm:block hidden'>sm screen</p>
                    <p className='text-white sm:hidden block'>xs screen</p>
                </div>*/}
                <Works />
               {/* <div className='text-center py-5 my-10 xl:bg-red-500 lg:bg-orange-500 md:bg-yellow-500 sm:bg-green-500 bg-blue-500'>
                    <p className='text-white hidden xl:block'>xl screen</p>
                    <p className='text-white xl:hidden lg:block hidden'>lg screen</p>
                    <p className='text-white lg:hidden md:block hidden'>md screen</p>
                    <p className='text-white md:hidden sm:block hidden'>sm screen</p>
                    <p className='text-white sm:hidden block'>xs screen</p>
                </div>*/}
                <Skills />
            </div>
        </div>
    );
}
