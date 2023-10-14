import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(160); // Start with 166 days
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    let interval;
    const storedRemainingTime = (154 * 24 * 60 * 60 * 1000); // 166 days in milliseconds
    const totalSeconds = Math.floor(storedRemainingTime / 1000);
    const remainingDays = Math.floor(totalSeconds / (60 * 60 * 24));
    const remainingHours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const remainingSeconds = totalSeconds % 60;

    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);

    interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 0) {
              setHours(prevHours => {
                if (prevHours === 0) {
                  setDays(prevDays => {
                    if (prevDays === 0) {
                      clearInterval(interval);
                      return 0;
                    }
                    return prevDays - 1;
                  });
                  return 23;
                }
                return prevHours - 1;
              });
              return 59;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
    
    // Function to switch the language between 'en' (English) and 'ar' (Arabic)
    const handleLanguageToggle = () => {
      setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
    };

    // Helper function to get localized text based on the current language
    const getLocalizedText = (enText, arText) => {
      return language === 'en' ? enText : arText;
    };
  
    return (
    <>
      <section
        className={` ${
          language === 'ar' ? 'text-right' : 'text-left'
        }`}
      >
        <div className='pt-8 w-full border-b border-gray-300'>
          <header className='w-full overflow-hidden max-w-screen-2xl mx-auto flex justify-between'>
            <div>
              <img className='md:w-24 lg:w-24 w-20' src='./favicon.ico.png' alt='image'/>
            </div>
            <div className='justify-end'>
              <button
                onClick={handleLanguageToggle}
                className="border-2 border-[#9BAA67] px-6 py-2 align-middle justify-center rounded-md font-bold"
              >
                {getLocalizedText('عربي', 'English')}
              </button>
            </div>
          </header>
        </div>
        <div className="justify-center mx-auto md:pt-20 pt-20 align-middle max-w-screen-xl">
          <h1 className='font-bold'>
          {getLocalizedText('Under Maintenance', 'تحت الصيانة')}
          </h1>
          <h1 className='md:md:text-7xl lg:md:text-7xl lg:text-7xl text-3xl text-[#9BAA67]'>
            {getLocalizedText('Launching Soon', 'إطلاق قريبا')}
          </h1>
          <p className="md:pt-5 pt-3 text-sm md:text-base">
          {getLocalizedText('Our team is working diligently to ensure that this maintenance is completed as swiftly as possible. We apologize for any inconvenience this may cause and sincerely appreciate your patience and understanding.', '.يعمل فريقنا بجد لضمان إتمام هذه الصيانة بأسرع وقت ممكن. نعتذر عن أي إزعاج قد يسببه هذا الأمر ونقدّر بصدق سعة صدرك وتفهمك')}
          <br/><br/>
            {getLocalizedText('If you have any urgent concerns or queries, please feel free to reach out to our support team at [admin@hilalesg.com]. We will do our best to assist you promptly.', 'إذا كانت لديك أية مخاوف أو استفسارات عاجلة ، فلا تتردد في التواصل مع فريق الدعم لدينا على [admin@hilalesg.com]. سنبذل قصارى جهدنا لمساعدتك على الفور')}
            <br/>
            {getLocalizedText('Thank you for your continued support and loyalty. We look forward to serving you better after the maintenance is complete.', '.شكرا لك على دعمك المستمر والولاء. نتطلع إلى خدمتك بشكل أفضل بعد اكتمال الصيانة.')}
            <br/><br/>

            {getLocalizedText('Best regards,', 'أطيب التحيات')}
            <br/>
          </p>
          <p className='text-[#9BAA67] font-bold'>
            {getLocalizedText('Hilal ESG Holding LTD', 'هالل اي سي جي هولدينغز ال تي دي')}
          </p>
          <div className="md:pt-10 pt-3 justify-center text-center overflow-hidden">
            <div className="flex md:gap-16 gap-10 justify-start text-center">
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{days}</p>
                <span className='text-[#9BAA67] text-xs lg:text-base'>
                  {getLocalizedText('Days', 'أيام')}
                </span>
              </div>
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{hours}</p>
                <span className='text-[#9BAA67] text-xs lg:text-base'>
                  {getLocalizedText('Hours', 'ساعات')}
                </span>
              </div>
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{minutes}</p>
                <span className='text-[#9BAA67] text-xs lg:text-base'>
                  {getLocalizedText('Minutes', 'دقائق')}
                </span>
              </div>
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{seconds}</p>
                <span className='text-[#9BAA67] text-xs lg:text-base'>
                  {getLocalizedText('Seconds', 'ثواني')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
};

export default Countdown;
