import React,{ useState } from 'react';
import { Link } from 'react-router';
import OAuth from '../component/OAuth';


function FrogetPass() {
  

  const [email,setEmail]=useState("")



function onchange(e){
  setEmail(e.target.value)
  }

  return (
      <section>
    
        <h1 className="text-3xl text-center mt-6 font-bold -mb-2">Forgot Password</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-1 max-w-6xl mx-auto'>
          <div className='md:w-[47%] lg:w-[50%] -mb-12 md:-mb-12'>
            <img src="https://thumbs.dreamstime.com/b/eco-green-vector-friendly-icon-recycle-logo-packaging-renewable-symbol-environmentally-sign-house-comfort-building-business-bio-158041091.jpg" className='w-full py-0 -mt-12 mb-0 mix-blend-multiply' /></div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-2'>
        <form className='w-full'>
          <input type="email" className='w-full px-4 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-2' id='email' value={email} onChange={onchange}
          placeholder='Email address'  />
          
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p className='mb-6'>Don't have a account?<br />
              <Link className='text-green-700  hover:text-green-800 transition duration-200 ease-in-out ml-1' to="/">Register</Link>
            </p>
            <Link to="/signin" className='text-red-700  hover:text-red-800 transition duration-200 ease-in-out' > Sign In</Link>
          </div>
       
        <button type="submit" className='w-full bg-[#0c7848] text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md active:bg-[#0c7859] '>Send Reset Mail</button>
        <div className=' flex items-center my-4 before:border-t before:flex-1 before:border-gray-300
        after:border-t after:flex-1 after:border-gray-300'>
          <p className='text-center font-semibold mx-4 '>OR</p>
        </div>
        <OAuth />
         </form>
      </div>
        </div>
        </section>
  )
}

export default FrogetPass;
