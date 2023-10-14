import React from 'react'
import Footer from './Footer';
import Header from './header';
import Updates from './update';

export default function home() {
  return (
    <>
        <Header/>
        <div>
            <div className='bg-local md:h-80 h-28'>
                <img className='w-full object-cover md:h-[50rem] h-[36rem]' src='./9.jpg' alt='image'/>
            </div>
            <div className='md:px-16 mx-auto justify-center overflow-hidden px-5'>
                <div className='text-white max-w-screen-m md:py-20 mt-48 md:mt-0 pb-32 md:pb-0'>
                    <p className='first md:text-xl text-lg'>
                        We are
                    </p>
                    <h1 className='second md:text-8xl font-light font-sans text-5xl pt-2 md:pt-0'>
                        Launching Soon ADGM <br className='hidden md:block lg:block'/> in Abu Dhabi
                    </h1>
                </div>
            </div>
        </div>
        <div className='max-w-screen-xl overflow-hidden items-center justify-center mx-auto pb-72'>
            <div className='md:pt-80 md:px-20 px-5 pt-10'>
                <p className='second md:text-xl text-lg text-[#2F3239] font-normal'>
                    What We Build
                </p>
                <h1 className='third md:text-6xl text-4xl text-[#2F3239] font-light pt-3'>
                    Delivering for Investors
                </h1>
                <div className='md:mt-16 mt-10 border-l-4 border-l-[#9BAA67] max-w-screen-lg'>
                    <p className='fourth md:text-xl text-lg pl-3 text-[#2F3239]'>
                        Hilal ESG is a pioneering fund set to redefine sustainable investments in the financial landscape. Committed to upholding environmental, social, and governance principles, 
                        we are on the cusp of launching an unparalleled investment opportunity.
                        <br/> <br/>
                        Come and discover how we are driving positive change through sustainable investments, where financial success meets social and environmental impact. 
                        <br/>
                        Be a part of the future of finance!
                    </p>
                    <p className='pt-5 fourth md:text-xl text-lg pl-3 text-[#2F3239]'>
                        For inquiries regarding our launch date, investor meetings, or any related information, kindly reach out to us at admin@hilalesg.com
                    </p>
                    <p className='pt-5 fourth md:text-xl text-lg pl-3 text-[#2F3239]'>
                        Your interest is paramount to us, and we ensure prompt and comprehensive responses.
                    </p>
                    <a href=''>
                        <h1 className='bg-[#9BAA67] md:py-2 py-2 md:text-base text-sm md:px-5 px-3 rounded-full font-semibold duration-300 w-52 mt-10 ml-3'>
                            Contact & Support
                        </h1>
                    </a>
                </div>
            </div>
        </div>
        <Updates/>
        <Footer/>
    </>
  )
}
