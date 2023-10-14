import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from './Home/header';
import Footer from './Home/Footer';

function Contact () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState ('');
  const [number, setNumber] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        name: name,
        company: company,
        email: email,
        number: number,
        subject: subject,
        message: message,
    };
    emailjs.send(
      'service_ckzlh2f',
      'template_uwmp5uo',
      templateParams,
      'QQIaVyUi87kjZFhBr'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <>
        <Header/>
        <div className=''>
            <div className='bg-local md:h-72 h-48'>
                <img className='w-full object-cover md:h-[32rem] h-[24rem]' src='./support1.jpg' alt='image'/>
            </div>
            <div className='md:px-10 mx-auto justify-center overflow-hidden px-5 max-w-screen-xl'>
                <div className='text-white'>
                    <p className='first md:text-xl text-lg'>
                        General
                    </p>
                    <h1 className='second md:text-8xl font-light font-sans text-5xl pt-2 md:pt-0'>
                        Contact & Support
                    </h1>
                </div>
            </div>
            <div className='max-w-screen-xl overflow-hidden items-center justify-center mx-auto'>
                <div className='md:pt-52 md:px-10 px-5 pt-28'>
                    <h1 className='third md:text-6xl text-4xl text-[#2F3239] font-light pt-3'>
                        Welcome to our Contact & Support page
                    </h1>
                    <div className='md:mt-16 mt-10 border-l-4 border-l-[#9BAA67] max-w-screen-lg'>
                        <p className='fourth md:text-xl text-lg pl-3 text-[#2F3239]'>
                            If you have any questions, comments, or concerns about our website or services, please don't hesitate to get in touch with.

                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-black py-16 md:px-10 px-5 max-w-screen-xl mx-auto'>
            <form onSubmit={handleSubmit}>
                { !success && 
                <div className='mx-auto'>
                    <div className='md:grid md:grid-cols-2 gap-8'>
                        <input
                            className='bg-[] border border-[#9BAA67] border-opacity-30 py-2 w-full px-4 mx-auto'
                            placeholder='Full Name'
                            type="name"
                            id="name"
                            value={name}
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            className='bg-[] border border-[#9BAA67] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Company Name'
                            type="company"
                            id="company"
                            value={company}
                            required
                            onChange={(event) => setCompany(event.target.value)}
                        />
                        <input
                            className='bg-[] border border-[#9BAA67] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Email Address'
                            type="email"
                            id="email"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className='bg-[] border border-[#9BAA67] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Phone Number'
                            type="number"
                            id="number"
                            value={number}
                            required
                            onChange={(event) => setNumber(event.target.value)}
                        />
                    </div>
                    <input
                        className='bg-[] border border-[#9BAA67] border-opacity-30 py-2 w-full px-4 mx-auto mt-8'
                        placeholder='Subject'
                        type="subject"
                        id="subject"
                        value={subject}
                        required
                        onChange={(event) => setSubject(event.target.value)}
                    />
                    <textarea
                        className='bg-[] border border-[#9BAA67] border-opacity-30 pb-52 py-5 w-full px-4 mx-auto mt-8 overflow-y-hidden'
                        placeholder='Message'
                        type="message"
                        id="message"
                        value={message}
                        required
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <div className='items-center'>
                        <button className='bg-[#9BAA67] px-10 tracking-wider py-2 md:mt-10 mt-5 text-black' type="submit">
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </div>}
                {success && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#9BAA67]'>Email sent successfully!</p>}
            </form>
        </div>
        <Footer/>
    </>
  );  
}

export default Contact;