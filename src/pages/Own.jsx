import React, { useState } from 'react'
import BottomNav from '../component/BottomNav'

function Own() {
  const [formData,setFormData]=useState({
    type:"working",
    name:"",
    category:"",
    coins:0,
    phone:null,
    address:"",
    description:""
  })
  const {type,name,category,coins,phone,address,description}=formData;
  function onChange(){

  }
  return (
    <main className='max-w-md px-6 pb-24 mx-auto'>
      <h1 className="text-2xl text-center mt-6 font-bold ">List Your Product </h1>
      <BottomNav/>
      <form >
        <p className='text-lg mt-6 font-semibold'> Condition</p>
        <div className='flex  '>
          <button type='button' id='type' value='working' onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${type==='not-working'? 'bg-white text-black':'bg-green-800 text-white'}`}>Working</button>
            <button type='button' id='type' value='working' onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${type==='working'? 'bg-white text-black':'bg-green-800 text-white'}`}>Not Working</button>
        </div>
      <p className='text-lg mt-4 font-semibold'>Name</p>
              <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Product Name"
          maxLength="50"
         minLength='3'
          required
          className="w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 mb-4"
        />
 <div className="mb-4">
          <p className="text-lg font-semibold">Images
          <span className="text-gray-600">
             (max 3 images allowed)
          </span>
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
          <p className='text-lg  font-semibold'>Category</p>
      <select
  id="category"
  value={category}
  onChange={onChange}
  required
  className="w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 mb-4"
>
  <option value="">Select Category</option>
  <option value="smartphone">Smartphone</option>
  <option value="smartphone-accessories">Smartphone Accessories</option>
  <option value="spare-parts">Spare Parts</option>
  <option value="bluetooth-speaker">Bluetooth Speaker</option>
  <option value="tws">TWS (True Wireless Stereo)</option>
  <option value="laptop">Laptop</option>
  <option value="desktop">Desktop</option>
  <option value="tv">TV</option>
  <option value="others">Others</option>
</select>
<div className='flex'>
  <div className='mr-5'>
  <p className='text-lg font-semibold'>Expected Coins</p>
   <input
          type="number"
          id="coins"
          value={coins}
          onChange={onChange}
       
          maxLength="50000"
          required
          className=" w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 mb-4"
        />
        </div>
        <div>
          <p className='text-lg font-semibold'>Phone Number</p>
<input
  type="tel"
  id="phone"
  value={phone}
  onChange={onChange}
  placeholder="Number"
  maxLength="10"
  minLength="10"
  pattern="[0-9]{10}"
  required
  className="w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 
             rounded transition duration-150 ease-in-out focus:text-gray-700 
             focus:bg-white focus:border-green-600 mb-4"
/>

        </div>

        </div>

         <p className='text-lg font-semibold'>Address</p>
   <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="PickUp Address"
          required
          className="w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 mb-3"
        />

                <p className='text-lg font-semibold'>Description</p>
   <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="About Your Product"
          required
          className="w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 mb-4"
        />
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-green-800 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out"
        >
           Listed It
        </button>

      </form>


    </main>
  )
}

export default Own
