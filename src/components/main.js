import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigator = useNavigate();

  return (
 <div class="container flex justify-center">
  <div class='flex justify-center lg:w-2/5 w-full'>
    <div class='lg:w-4/5 mx-auto  w-4/5 flex bg-gray-200 h-screen items-end justify-start'style={{width:'95%'}} >

      <div id='1' class='justify-start w-full ml-2 mb-20' style={{width:'95%'}}>
        <h1 className='text-3xl font-sans font-semibold text-start  mb-3'>Welcome to PopX</h1>
        <p className='text-l font-sans text-gray-500 text-start '>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
        <br/>
        <button class='w-full  h-10 text-l bg-violet-700 rounded-lg text-white font-sans font-semibol' onClick={()=>navigator('/account')}>Create Account</button>
        <br/><br/>
        <button class='w-full  h-10 text-l bg-violet-300 rounded-lg text-black font-sans font-semibold' onClick={()=>navigator('/login')}>Already Registered? Login</button>
      </div>
    </div>
  </div>
</div>



     
    

              
  )
}
