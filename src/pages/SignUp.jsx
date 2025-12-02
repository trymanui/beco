import React, { useState } from 'react'
import { Link } from 'react-router';
import OAuth from '../component/OAuth';

function SignUp() {
   const [showPassword,setShowPassword]=useState(false);
  
    const [formData,setFormData]=useState({
      name:"",
      email:"",
      password:"",
    })
  const {name,email,password}=formData;
  
  
  function onchange(e){
    setFormData((prev)=>({
      ...prev,[e.target.id]:e.target.value,
    }))
  }
  return (
    <section>
   
       <h1 className="text-3xl text-center mt-6 font-bold -mb-6">Sign Up</h1>
       <div className='flex justify-center flex-wrap items-center px-6 py-1 max-w-6xl mx-auto'>
         <div className='md:w-[47%] lg:w-[50%] -mb-12 md:-mb-12'>
           <img src="https://thumbs.dreamstime.com/b/eco-green-vector-friendly-icon-recycle-logo-packaging-renewable-symbol-environmentally-sign-house-comfort-building-business-bio-158041091.jpg" className='w-full py-0 -mt-12 -mb-2 mix-blend-multiply' /></div>
     <div>
       <form className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'> 
       <input type="text" className='w-full px-4 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-1' id='name' value={name} onChange={onchange}
         placeholder='Full Name'/>

         <input type="email" className='w-full px-4 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-1' id='email' value={email} onChange={onchange}
         placeholder='Email address'  />
         <div className='relative mb-2'>
            <input 
            type={showPassword? "text":"password"}
             className='w-full px-4 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' id='password' value={password} onChange={onchange}
         placeholder='Enter Password'  />
         {showPassword ? <i className='absolute right-4 top-4 text-xl cursor-pointer fa-solid fa-eye' onClick={()=>setShowPassword((prev)=>!prev)}></i> : <i className="absolute right-4 top-4 text-xl cursor-pointer fa-solid fa-eye-slash" onClick={()=>setShowPassword((prev)=>!prev)}></i>
         }
         </div>
         <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
           <p className='mb-6'>Don't have a account?<br />
             <Link className='text-green-700  hover:text-green-800 transition duration-200 ease-in-out ml-1' to="/signin">Log In</Link>
           </p>
           <Link to="/forgot" className='text-red-700  hover:text-red-800 transition duration-200 ease-in-out' > Forgot password?</Link>
         </div>
      
       <button type="submit" className='w-full bg-[#0c7848] text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md active:bg-[#0c7859] '>Sign Up</button>
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

export default SignUp
