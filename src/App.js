import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/home';
import ClipLoader from 'react-spinners/CircleLoader';
import Contact from './Pages/Contact';

const App = () => {
const [loading , setloading] = useState(false)
  useEffect (() => {
    setloading(true)
    setTimeout (() =>{
      setloading (false)
    },2000)
  },[])
  
  return (
    <>
      <div className="App scroll-smooth duration-300 overflow-hidden">
      { loading ?
       <ClipLoader color={"#9BAA67"} loading={loading} size={60} className='justify-center text-center align-middle items-center mx-auto md:my-96 my-72'/>
      :
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
      }
    </div>
    </>
  );
}

export default App;
