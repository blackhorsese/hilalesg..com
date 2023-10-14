import React from 'react'
import EmailForm from './email'

export default function Updates() {
  return (
    <>
    <div className='bg-[#000000]'>
        <div className='md:max-w-screen-xl justify-center mx-auto md:py-32 md:px-10 px-5 py-20'>
            <p className='uppercase font-semibold text-white'>
                STAY UP TO DATE
            </p>
            <div className='text-[#fff] md:flex md:grid-cols-2 justify-between mx-auto'>
                <div>
                    <h1 className='md:text-5xl text-3xl mx-auto font-serif md:pt-20 pt-10'>
                        Get our latest insights and our launch date announcements
                    </h1>
                    <p className='pt-10'>
                        For event updates, news, and exclusive insights, subscribe to our newsletter.
                    </p>
                    <EmailForm/>
                </div>
                <div className='max-w-md md:py-0 py-10'>
                    <img className='mx-auto' src='./customer.jpg' alt='logo'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}