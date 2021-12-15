import React from 'react';

function Hero(props) {
      return (
            <div className='bg-gray-900'>
                  <div className="  px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10  lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:pr-10">
    
          <h5 className="mb-4 text-4xl text-white font-extrabold leading-none">
            One Platform to explore, collect
            <br className="text-white hidden md:block" />
            and sell NFTs{' '}
            
          </h5>
          <p className="mb-6 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Eveniet dolorem blanditiis ad perferendis, labore delectus dolor adipisicing elit sit amet, 
          adipisicing elit. Eveniet adipisicing elit.


          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
           <button className='bg-blue-400 px-10 py-2 rounded-md text-white text-base'>
            Discover
           </button>
           <button className='bg-blue-400 px-10 py-2 rounded-md text-white text-base'>
            Create
           </button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
              <div>
              <img className='' src="https://lh3.googleusercontent.com/BZplkkrAXupi_CAGBHSy15DCykNV1ifK2WQymvfctHqIClvyucDXoyONGaLOcxjzm_xc6eW5GrXKb-XQ3U_vHbVHGzQUxPT48cqh=w600" alt="" />

              </div>
              <div className='mt-8'>
              <img className='' src="https://watcher.guru/news/wp-content/uploads/2021/08/unnamed.png.webp" alt="" />

              </div>
              <div className='-mt-8'>
              <img className='' src="https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff1624f685407965b0180_Bored%20Ape%200-%20Image%201.png" alt="" />

              </div>
              <div className=''>
              <img className='' src="https://pbs.twimg.com/media/E4Lk6qDXIAA9_Z2.png" alt="" />

              </div>
         
        </div>
      </div>
    </div>
            </div>
      );
}

export default Hero;