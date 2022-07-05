import React from 'react';

function Treding(props) {
      return (
            <div className="bg-white mt-60 relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
              <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <div>
                    <p className="inline-block  py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                      New Colaboration
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    
                    
                    Neo Hunters
                    
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                  Save the blockchain by joining 5555 fellow Neo Hunters in the ultimate NFT showdown!
                  </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                  <button
                    href="/"
                    className=" bg-black inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 hover:bg-purple-700  focus:shadow-outline focus:outline-none"
                  >
                  View Collection
                  </button>
                  
                </div>
              </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
              <img
                className="object-cover w-full h-64 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                src="https://lh3.googleusercontent.com/qFPdh_BZJGiQBajMsbf7Jb2L9NLsk8qngT5rGcLxRi4a-ZatmoK6oxKJBYL78xykwRdJSK6xWE8HnFDtVmPdCpyDM_505gn4WtX5ng=w295"
                alt=""
              />
            </div>
          </div>
      );
}

export default Treding;