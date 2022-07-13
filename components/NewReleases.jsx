import React from 'react';


function NewReleases(props) {
      return (
            <div className='mt-60'>
                  

                        <h1 className='text-center text-4xl text-white font-bold p-2'>New Releases</h1>
               
                  <div className='px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20'>
                        <div className='grid grid-cols-3 gap-x-8'>
                              {/* Card 1 */}
                        <div className="max-w-lg bg-teal-800  rounded overflow-hidden  shadow-neutral-800 cursor-pointer hover:shadow-zinc-500/80  transform hover:transition duration-500 ">
  <img className="w-full" src="https://lh3.googleusercontent.com/uuRcDiGGuD6zxFvQJulU49wVI0w8NbY3S-7UyldUTivpoEl6UqPv5jQVaY4kuK8zZiTJ0oHdv8nBin7SqqPx9OF3ImTgkGa6q9K8YtQ=w500" alt="Sunset in the mountains"/>
  <div  className="px-6 py-6 ">
    <div  className="font-medium text-white mt-4 text-2xl">Let's Walk</div>
    <p  className="text-white  mt-2 text-base">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    </p>
  </div>
  
</div>

{/* Card 2 */}
                        <div className="max-w-lg bg-violet-700 rounded overflow-hidden  shadow-gray-800 cursor-pointer hover:shadow-blue-800/90 transform  transition duration-500">
  <img className="w-full" src="https://lh3.googleusercontent.com/qTi_RsD_r6gONGeehQ8xAiDMebvvlv_-PPrH-LsNzIyYw9JebgXEci48NT7h9Y8R9Zipf_I0fTE96wv7O_kUr1x79ERAn3YGjSl3o94=w500" alt="Sunset in the mountains"/>
  <div  className="px-6 py-6">
    <div  className="font-medium text-white mt-4 text-2xl">Super Coders</div>
    <p  className="text-white mt-2 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    </p>
  </div>
  
</div>

{/* Card 3 */}
                        <div className="max-w-lg bg-pink-500 rounded overflow-hidden  shadow-gray-800 cursor-pointer hover:shadow-indigo-800/90 transform transition duration-500">
  <img className="w-full" src="https://lh3.googleusercontent.com/bxH9AQfYIjZcfxCqeLJadJbjjApB0jUbjHlEj4pYGLy7t7qWFwnV_aA_3-cnNEJTvsUGFBEgQF_nlwBSDCeU7Q68E1EePfKD9HNLyA=w600" alt="Sunset in the mountains"/>
  <div  className="px-6 py-6">
    <div  className="font-medium text-white mt-4 px-2 text-2xl">Cereal Bowl</div>
    <p  className="text-white mt-2 px-2 text-base ">
    Cereal Club is a collectible non-fungibowl driven community of members who empower web3 across the NFT ecosystem.
    </p>
  </div>
  
</div>

                        </div>

                  </div>
                  
            </div>
      );
}

export default NewReleases;