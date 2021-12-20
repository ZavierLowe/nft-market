import React from 'react';


function NewReleases(props) {
      return (
            <div className='bg-gray-900 mt-60 '>
                  

                        <h1 className='text-center text-4xl text-white font-bold p-2'>New Releases</h1>
               
                  <div className='px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                        <div className='grid grid-cols-3 gap-x-8'>
                              {/* Card 1 */}
                        <div className="max-w-sm bg-gray-500 rounded overflow-hidden shadow-lg shadow-gray-800 hover:shadow-gray-400/90  transform hover:-translate-y-6 transition duration-500  ">
  <img className="w-full " src="https://images.unsplash.com/photo-1636975262325-a0c611796b4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Sunset in the mountains"/>
  <div  className="px-6 py-4">
    <div  className="font-medium text-white text-center text-xl mb-2">Broken Hands</div>
    <p  className="text-white  text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vrferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>

{/* Card 2 */}
                        <div className="max-w-sm bg-blue-700 rounded overflow-hidden shadow-lg shadow-gray-800 hover:shadow-blue-800/90 transform hover:-translate-y-6 transition duration-500">
  <img className="w-full" src="https://images.unsplash.com/photo-1635944095210-23114a1fb7c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Sunset in the mountains"/>
  <div  className="px-6 py-4">
    <div  className="font-medium text-white text-center text-xl mb-2">Cool Icebergs</div>
    <p  className="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vrferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>

{/* Card 3 */}
                        <div className="max-w-sm bg-indigo-700 rounded overflow-hidden shadow-lg shadow-gray-800 hover:shadow-indigo-800/90 transform hover:-translate-y-6 transition duration-500">
  <img className="w-full" src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Sunset in the mountains"/>
  <div  className="px-6 py-4">
    <div  className="font-medium text-white  text-center text-xl mb-2">Gradient Statues</div>
    <p  className="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vrferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>

                        </div>

                  </div>
                  
            </div>
      );
}

export default NewReleases;