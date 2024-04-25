import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  
  const Navigate = useNavigate();
 const [errors, setErrors] = useState({});
const [data, setData] = useState({
  name: '',
  number: '',
  email: '',
  password: '',
  companyName: '',
  isAgency: '',
});

const setter = (e) => {
  const { name, value } = e.target;
  setData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

const validate = () => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }
  if (!data.number.trim()) {
    errors.number = 'Number is required';
  }
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (!data.password.trim()) {
    errors.password = 'Password is required';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!data.companyName.trim()) {
    errors.companyName = 'Company name is required';
  }
  if (!data.isAgency) {
    errors.isAgency = 'Please select an option';
  }
  if (data.isAgency!='yes')
  {
    errors.isAgency = 'please agree the terms and conditions';
    }
  setErrors(errors); // Update state with errors
  return errors; // Return errors object
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length === 0) {
   Navigate('/profile', { state: data });
    console.log(data);
    
  } else {
    alert(JSON.stringify(validationErrors)); // Display errors in alert
  }
};

const handleRadioChange = (e) => {
  setData((prevState) => ({
    ...prevState,
    isAgency: e.target.value,
  }));
};

  return (
    <div className='flex justify-center al'>
      <div className='lg:w-2/5 sm:w-full md:w-full  align-middle mt-auto'>
        <form  onSubmit={handleSubmit}>
        <div className='w-4/5 mt-10 md:w-full'>
          <h1 className='text-4xl text-start ml-10 font-sans font-semibold '>Create your<span className='text-purple-700'> PopX</span> account</h1>
          </div>
        <div className='w-full h-20  mt-10 justify-start '>
            <label className='text-start  ml-5 absolute w-35 text-l text-purple-600 font-semibold bg-white font-sans  ' style={{ marginTop: '-14px', width:'120px' }} >Full Name<span className='text-red-500'>*</span></label>
          <input type='text' placeholder='Enter name...' name="name" value={data.name} onChange={(e)=>setter(e)} className='w-4/5 text-l h-10 border-2 outline-none border-solid pl-5   rounded-lg' />
        </div>
           <div className='w-full h-20   justify-start '>
            <label className='text-start  ml-5 absolute  text-l text-purple-700 font-semibold bg-white font-sans  ' style={{ marginTop: '-14px', width:'120px' }} >phone number<span className='text-red-500'>*</span></label>
          <input type='text' placeholder='Enter number...' name='number' value={data.number} onChange={(e) => setter(e)} className='w-4/5 text-l h-10 border-2 outline-none border-solid pl-5   rounded-lg' />
        </div>
            <div className='w-full h-20   justify-start '>
            <label className='text-start  ml-5 absolute w-35 text-l text-purple-700 font-semibold bg-white font-sans  ' style={{ marginTop: '-14px', width:'120px' }} >Email address<span className='text-red-500'>*</span></label>
          <input type='email' placeholder='Enter email...' name="email" value={data.email} onChange={(e) => setter(e)} className='w-4/5 text-l h-10 outline-none border-2 border-solid pl-5   rounded-lg' />
        </div>
           <div className='w-full h-20   justify-start '>
            <label className='text-start  ml-5 absolute w-35 text-l text-purple-700 font-semibold bg-white font-sans  ' style={{ marginTop: '-14px', width:'120px' }} >password<span className='text-red-500'>*</span></label>
          <input type='password' placeholder='Create password...' name="password" value={data.password} onChange={(e) => setter(e)}  className='w-4/5 text-l h-10 outline-none border-2 border-solid pl-5   rounded-lg' />
        </div>
           <div className='w-full h-20   justify-start '>
            <label className='text-start  ml-5 absolute w-35 text-l text-purple-700 font-semibold bg-white font-sans  ' style={{ marginTop: '-14px', width:'125px' }} >Company name<span className='text-red-500'>*</span></label>
          <input type='text' placeholder='Enter company name...' name="companyName" value={data.companyName} onChange={(e) => setter(e)} className='w-4/5 text-l outline-none h-10 border-2 border-solid pl-5   rounded-lg' />
        </div>
        <div className='justify-start  lg:ml-30' style={{marginTop:'-20px', marginLeft:'60px'}}>
          <h1 className='text-start  font-sans text-l'>Are you an Agency?<span className='text-red-500'>*</span></h1>
          <div className='flex  mt-2'>
          <div>
         <input
                  type='radio'
                  id='no'
                  name='isAgency'
                  value='yes'
                  className='form-radio mr-2 ml-2'
                  onChange={handleRadioChange}
                  checked={data.isAgency === 'yes'}/>
                 <label for="yes">Yes</label>
                 </div>
                <div>
                <input
                  type='radio'
                  id='no'
                  name='isAgency'
                  value='no'
                  className='form-radio mr-2 ml-2'
                  onChange={handleRadioChange}
                  checked={data.isAgency === 'no'}/>
               <label for="no">No</label>
           </div>

          </div>
        </div><br/><br/>
        <div>
          <button className='w-4/5 h-10 bg-purple-600 rounded-lg text-white font-sans text-xl font-semibold' >Create Account</button>
          </div>
          </form>
      </div>
    </div>
  )
}
