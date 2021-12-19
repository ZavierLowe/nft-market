import React from 'react';

function PopularCollectionCard(props) {
      return (
            <div className='bg-gray-900 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                  <h1 className='text-white text-center text-2xl'>Popular Collections</h1>
                 <div className='grid grid-cols-3'>
                       <div className='bg-indigo-900 rounded-lg grid grid-col-4'>
                             <div className=' bg-teal-400 rounded-lg '>

                        <img className='row-span-2 p-4 rounded-lg 'src="https://image.cnbcfm.com/api/v1/image/106983072-1638384838850-image3.png?v=1638384953" alt="" />
                             </div>
                        <img className='row-span-2 p-4 ' src="https://image.cnbcfm.com/api/v1/image/106983072-1638384838850-image3.png?v=1638384953" alt="" />
                        <img className='row-span-2 p-4 ' src="https://image.cnbcfm.com/api/v1/image/106983072-1638384838850-image3.png?v=1638384953" alt="" />
                        <img className='row-span-2 p-4' src="https://image.cnbcfm.com/api/v1/image/106983072-1638384838850-image3.png?v=1638384953" alt="" />
                        <img className='col-span-4 p-4 rounded-lg  ' src="https://image.cnbcfm.com/api/v1/image/106983072-1638384838850-image3.png?v=1638384953" alt="" />
                       <div className='col-span-4'>
                             <h1 className='px-4 text-white'>Name of collection</h1>
                             <h1 className='px-4 text-white'>Name of user</h1>
                             <p className='px-4 text-white'>22.4k</p>
                       </div>
                       </div>
                      
                 </div>
            </div>
      );
}

export default PopularCollectionCard;