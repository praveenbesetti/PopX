import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
export default function Profile() {
       const location = useLocation();
      const { state } = location;
    const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [data, setdata] = useState(state);
   
  
  // Access the state object from location
 

  // Use the state data as needed
 


   const handleChange = async (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    if (!selectedImage) {
      console.log('Please upload an image');
      return;
    }

    const data = new FormData();
    data.append('file', selectedImage);
    data.append('upload_preset', 'mycloud');
    data.append('cloud_name', 'dsz4qeze5');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dbyoondqs/image/upload', {
        method: 'POST',
        body: data,
      });
      const cloudData = await res.json();

      if (cloudData.url) {
        setUrl(cloudData.url);
      } else {
        console.error('Cloudinary response does not contain URL:', cloudData);
      }
    } catch (error) {
      console.error('Error uploading image or updating URL:', error);
    }
  };
  return (
    <div style={{ overflowY: 'hidden', height: '100vh'}}>
      <div>
        <div className='mt-10 flex sm:justify-start ml-10 lg:justify-center'>
          <h1 className='font-sans text-xl md:text-start sm:ml-5 '>Account Settings</h1>
        </div>

        <div className='flex flex-wrap justify-start mt-5 bg-gray-100'>
          <div className='w-90vw ml-8 flex flex-wrap mt-5 h-120'>
            <img src={image ? URL.createObjectURL(image) : '/profile.png'} className=' border-2 border-solid rounded-full' style={{ width: '100px', height: '100px' }} alt="Image" />
                     <label className='w-8 h-8 bg-black rounded-full inline-block relative ' style={{marginTop:'60px', marginLeft:"-30px"}}>
  <input type='file' className='absolute inset-0 opacity-0 w-full h-full' onChange={(e)=>handleChange(e)} style={{ zIndex: '-1' }} />
  <img src='/cam.jpeg' className='rounded-full w-full h-full' />
</label>

          </div>
          <div className='ml-10 mt-10'>
            <h1 className='font-sans lg:text-xl  text-l text-start'>{data.name}</h1>
            <h2 className='font-sans lg:text-xl text-l text-start'>{data.email}</h2>
          </div>
          <div ><p className='font-sans text-sl m-2 mt-10' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, provident nobis quos non molestiae quis
            voluptates? Quam modi repudiandae, rerum, numquam, consequatur earum nam vitae id quos corporis quod
          </p>
            <hr className='border-dashed border-1 border-gray-600 mb-20' />
          </div>
          <div className='flex flex-col items-end h-80 mt-auto'>
            <hr className='border-dashed border-1 border-gray-600 ' />
          </div>
        </div>
      </div>
    </div>
  );
}
