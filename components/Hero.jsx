import React from 'react';

function Hero(props) {
      return (
            <div className='bg-gray-800'>
                  <div className="  px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
      <div className="grid gap-10  lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:pr-10">
    
          <h5 className="mb-4 text-6xl text-white font-extrabold leading-none">
            One Platform to explore, collect
            <br className="text-white hidden md:block" />
            and sell NFTs{' '}
            
          </h5>
          <p className="mb-6 text-white text-md">
          Repper is an NFT marketplace whwew you can buy sell and mint NFTs using
          the most popular cryptocurrencies such as ETH, SOL,etc. Connect your wallet 
          and purchase today

          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
           <button className='bg-violet-800 px-12 py-4 rounded-md text-white text-lg font-bold  hover:bg-violet-700 transition ease-in-out duration-300 '>
            Discover
           </button>
           <button className='bg-gradient-to-r from-pink-700 to-violet-600 px-12 py-4 rounded-md text-white text-lg font-bold  hover:from-pink-500 transition ease-in-out duration-300 hover:to-yellow-500 '>
            Create
           </button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
              <div>
              <img className='rounded-lg' src="https://lh3.googleusercontent.com/xKN8lCLXHEqo-TQbA-m6XqpkDTChDIafo_V8s-qWovxxEbHW8Ey5eB1e12dFI6g9zHm0HdkwN0irgQGymqdMNIZlBpKC65Lk7ekC=w600" alt="" />

              </div>
              <div className='mt-8'>
              <img className='rounded-lg' src="https://img.seadn.io/files/b86dfc02856244dabcf5bc22d9fe9782.png?fit=max&w=600" alt="" />

              </div>
              <div className='-mt-8'>
              <img className='rounded-lg' src="https://lh3.googleusercontent.com/qFPdh_BZJGiQBajMsbf7Jb2L9NLsk8qngT5rGcLxRi4a-ZatmoK6oxKJBYL78xykwRdJSK6xWE8HnFDtVmPdCpyDM_505gn4WtX5ng=w295" alt="" />

              </div>
              <div className=''>
              <img className='rounded-lg' src="https://lh3.googleusercontent.com/aFdP6Wma_maNLK1VRhQUdY18gAEPed1qit8C8HVFgS2fhs3qRjj0z6Vlu5IbRb6Xyr2vg7sGs7SXJooVUhytQjXriBYxzcBQnGNO0g=w295" alt="" />

              </div>
         
        </div>
      </div>
    </div>
    
            </div>
      );
}

export default Hero;