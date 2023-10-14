// import React from 'react';

// const Header = () => {

//     return (
//         <>

          // <header className='fixed bg-local py-5 px-10 w-full bg-black bg-opacity-20 justify-between flex items-center overflow-hidden mx-auto'>
          //   <div>
          //     <img className='md:w-24 lg:w-36 w-20' src='./favicon1.ico.png' alt='image'/>
          //   </div>
          //   <div className='justify-end'>
          //     <a href=''>
          //       <h>
          //         dsadsadasd
          //       </h>

          //     </a>
          //   </div>
          // </header>
//         </>
//     );
// }

// export default Header;

// Header.js

// Header.js
import React, { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <Logo isScrolled={isScrolled} />
      {/* Add your navigation items here */}
    </div>
  );
}

function Logo({ isScrolled }) {
  return (
    <div className="z-10 w-full fixed justify-center items-center mx-auto overflow-hidden shadow-md">
      {isScrolled ? (
        <div className='md:py-3 py-5 px-5 md:px-16 w-full bg-white justify-between flex items-center duration-500'>
          <a href='./' className='justify-start'>
            <img className='md:w-24 lg:w-32 w-20 duration-500' src='./favicon.ico.png' alt='image'/>
          </a>
          <div className='justify-end text-white'>
            <a href='./contact-us'>
              <h1 className='bg-[#9BAA67] md:py-3 py-2 md:text-base text-sm md:px-7 px-3 rounded-full font-semibold duration-300'>
                Contact & Support
              </h1>
            </a>
          </div>
        </div>
      ) : (
        <div className='md:py-3 py-5 px-5 md:px-16 w-full bg-black bg-opacity-10 justify-between flex items-center duration-500'>
          <a href='./'>
            <img className='md:w-24 lg:w-36 w-20 duration-500' src='./favicon1.ico.png' alt='image'/>
          </a>
          <div>
            <a href='./contact-us'>
              <h1 className='bg-[#ffffff] md:py-3 py-2 md:text-base text-sm md:px-7 px-3 rounded-full font-semibold duration-300 text-black'>
                Contact & Support
              </h1>
            </a>
          </div>
      </div>
      )}
    </div>
  );
}

export default Header;
