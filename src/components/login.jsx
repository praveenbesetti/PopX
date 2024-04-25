import React from 'react'

export default function Login() {
  return (
      <div>
          <div>
               <div className='flex justify-center '>
              <div className='lg:w-2/5 w-full md:w-full  align-middle '>
              <div className='mt-10 mb-10 ml-10 lg:ml-20'>
                  <h1 className='text-3xl font-sans font-semibold text-start mb-3'>Signin to your<br/> PopX account</h1>
                  <p className='text-l text-gray-500  text-start'>Lorem, ipsum dolor sit amet,<br/> consectetur adipisicing elit. </p>
              </div>
               
      
               <div className='w-full h-20   justify-start '>
            <label className='text-start  ml-5 absolute w-35 text-l text-purple-700 font-semibold bg-white font-sans  ' style={{ marginTop: '-14px', width:'120px' }} >Email address<span className='text-red-500'>*</span></label>
          <input type='email' placeholder='Enter email...' name="email" className='w-4/5 text-l h-10 outline-none border-2 border-solid pl-5   rounded-lg' />
        </div>
           <div className='w-full h-20   justify-start '>
            <label className='text-start  ml-5 absolute w-35 text-l text-purple-700 font-semibold bg-white font-sans  ' style={{ marginTop: '-14px', width:'120px' }} >password<span className='text-red-500'>*</span></label>
          <input type='password' placeholder='Enter password...' name="password"   className='w-4/5 text-l h-10 outline-none border-2 border-solid pl-5   rounded-lg' />
                      </div>
                      <button className='w-4/5 h-10 bg-gray-300 rounded-lg text-xl text-white'>Login</button>
              </div>
              </div>
              </div>
    </div>
  )
}
