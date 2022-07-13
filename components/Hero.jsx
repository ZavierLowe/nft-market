import React from 'react';

function Hero(props) {
      return (
            <div className='bg-neutral-900'>
                  <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-36">
      <div className="grid gap-10  lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:pr-12">
    
          <h1 className="font-sans mb-4 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 font-extrabold leading-none">
            One Platform to explore, collect
            <br className="text-white hidden md:block" />
            and sell NFTs{' '}
            
          </h1>
          <p className="font-sans mb-6 text-white text-md py-4 w-fit">
          Repper is an NFT marketplace where you can buy sell and mint NFTs using
          the most popular cryptocurrencies such as ETH, SOL,etc. Connect your wallet 
          and purchase today.

          </p>
          
          <div className="flex items-center space-x-4">
           <button className='font-sans bg-violet-800 px-12 py-3 rounded-md text-white text-lg font-medium  hover:bg-violet-700 transition ease-in-out duration-300 '>
            Discover
           </button>
           <button className='bg-gradient-to-r from-pink-700 to-violet-600 px-12 py-3 rounded-md text-white text-lg font-medium  hover:from-pink-500 transition ease-in-out duration-300 hover:to-yellow-500 '>
            Create
           </button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-2 '>
              <div>
              <img className='rounded-lg md:w-full' src="https://lh3.googleusercontent.com/xKN8lCLXHEqo-TQbA-m6XqpkDTChDIafo_V8s-qWovxxEbHW8Ey5eB1e12dFI6g9zHm0HdkwN0irgQGymqdMNIZlBpKC65Lk7ekC=w600" alt="" />

              </div>
              <div className='mt-8'>
              <img className='rounded-lg md:w-full' src="https://img.seadn.io/files/b86dfc02856244dabcf5bc22d9fe9782.png?fit=maxw=600" alt="" />

              </div>
              <div className='-mt-8 '>
              <img className='rounded-lg md:w-full' src="https://lh3.googleusercontent.com/qFPdh_BZJGiQBajMsbf7Jb2L9NLsk8qngT5rGcLxRi4a-ZatmoK6oxKJBYL78xykwRdJSK6xWE8HnFDtVmPdCpyDM_505gn4WtX5ng=w600" alt="" />

              </div>
              <div className=''>
              <img className='rounded-lg md:w-full' src="https://lh3.googleusercontent.com/aFdP6Wma_maNLK1VRhQUdY18gAEPed1qit8C8HVFgS2fhs3qRjj0z6Vlu5IbRb6Xyr2vg7sGs7SXJooVUhytQjXriBYxzcBQnGNO0g=w600" alt="" />

              </div>
         
        </div>
      </div>
    </div>
    
            </div>
      );
}

export default Hero;