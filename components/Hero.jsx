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
          Repper is an NFT market is a shared
          smart contract which is used by multiple 
          websites to provide the users the best possible experience


          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
           <button className='bg-violet-800 px-10 py-2 rounded-md text-white text-lg font-bold'>
            Discover
           </button>
           <button className='bg-gradient-to-r from-pink-700 to-violet-600 px-10 py-2 rounded-md text-white text-lg font-bold hover:from-pink-500 hover:to-yellow-500'>
            Create
           </button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
              <div>
              <img className='rounded-lg' src="https://lh3.googleusercontent.com/ww-PqtSiBG7aCNk4lAqw-ibenlcLKdmqsoCXenDDDagM2W9rQHoDVVzAoQBe9QQhElfy44G5u77ujePfWL8WtUkV05f_bAo6BR7Q=s550" alt="" />

              </div>
              <div className='mt-8'>
              <img className='rounded-lg' src="https://lh3.googleusercontent.com/tBUC_BpP5sfLXZ91M7whTk2WmyWU9IslS6NYAmfc2Ga9eIHYvXul1m3-LWyqgH28w2MDgn1kJPtohXE98LIfAqka279ZA6JvhsnE=w295" alt="" />

              </div>
              <div className='-mt-8'>
              <img className='rounded-lg' src="https://lh3.googleusercontent.com/qFPdh_BZJGiQBajMsbf7Jb2L9NLsk8qngT5rGcLxRi4a-ZatmoK6oxKJBYL78xykwRdJSK6xWE8HnFDtVmPdCpyDM_505gn4WtX5ng=w295" alt="" />

              </div>
              <div className=''>
              <img className='rounded-lg' src="https://lh3.googleusercontent.com/ts4YygBGO2qNUEidhCTNnFGTm1Gj7XEQievH4AM2CGcKSAtQJywnzP4y5WcxNrilZ9tYY3FcsRl9U6nSlUA6iDYnhuK9vWbANYY0z18=w600" alt="" />

              </div>
         
        </div>
      </div>
    </div>
    
            </div>
      );
}

export default Hero;