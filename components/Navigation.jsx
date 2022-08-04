import React, {useState} from 'react';
import Link from 'next/link';
import CoinbaseLogo from '../public/Coinbase Wallet Logo.png';
import Image from 'next/image'



function Navigation(props) {

      const [isMenuOpen, setIsMenuOpen] = useState(false)
      const [showModal , setShowModal ] = useState(false)
    
      return (
            
            <div className="bg-neutral-900 shadow-sm">
            <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2">
              <div className="relative flex items-center justify-between">
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  className="inline-flex items-center"
                >
                 
                  <span className="ml-2 text-2xl font-bold tracking-wide text-gray-100 ">
                    Nebulous
                  </span>
                </a>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Discover
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Activity
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Create
                    </a>
                  </li>
                  <li>
                    <button
                      href="/"
                      className="inline-flex bg-gradient-to-r from-pink-800 to-violet-600 items-center justify-center h-12 px-6 py-4 font-medium tracking-wide text-white rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline hover:from-pink-500 transition-all ease-linear duration-500 delay-75 hover:to-yellow-500 "
                      aria-label="Connect Wallet"
                      title="Connect Wallet"
                      onClick={() => setShowModal(true) }
                    >
                      Connect Wallet
                    </button>
                    <>
            <div className="items-center justify-center h-60 hidden">
               
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-75"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-8 mx-auto bg-neutral-900 rounded-md shadow-lg">
                                      <div className='flex -mt-2 -ml-2'> 
                                      <button className='' onClick={() => setShowModal(false)}>
                                      <svg width="24" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill='white' d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-15.5.5h14v14h-14zm7 5.937 2.219-2.22c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.22 2.22 2.222 2.222c.147.147.22.339.22.53 0 .427-.349.751-.75.751-.192 0-.384-.073-.53-.219l-2.223-2.223-2.223 2.223c-.146.146-.338.219-.53.219-.401 0-.75-.324-.75-.751 0-.191.073-.383.22-.53l2.222-2.222-2.22-2.22c-.146-.147-.219-.338-.219-.531 0-.425.346-.75.75-.75.192 0 .385.073.531.219z" fill-rule="nonzero"/>
                                        </svg>

                                      </button>
                                      </div>
                                <div className="mt-3 sm:flex">
                                    
                                    <div className="mt-2 text-center sm:ml-4 w-full">
                                        <h2 className="text-2xl text-white text-center font-medium ">
                                           Connect Wallet
                                        </h2>
                                        <p className="mt-2 text-[16px] text-center text-gray-200">
                                        Choose how you want to connect.
                                        </p>
                                        <div className='grid grid-cols-1 grid-rows-5 space-y-4 '>
                                          {/* Button Connect 1 */}
                                          <div className=' mt-4'>
                                            <button className='bg-neutral-800 w-full rounded-md grid grid-cols-3 items-center justify-between p-6  '>
                                              <div>
                                            <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="64" cy="64" r="64" fill="url(#paint0_linear)"/>
<path d="M110.584 64.9142H99.142C99.142 41.7651 80.173 23 56.7724 23C33.6612 23 14.8716 41.3057 14.4118 64.0583C13.936 87.577 36.241 108 60.0186 108H63.0094C83.9723 108 112.069 91.7667 116.459 71.9874C117.27 68.3413 114.358 64.9142 110.584 64.9142ZM39.7689 65.9454C39.7689 69.0411 37.2095 71.5729 34.0802 71.5729C30.9509 71.5729 28.3916 69.0399 28.3916 65.9454V56.8414C28.3916 53.7457 30.9509 51.2139 34.0802 51.2139C37.2095 51.2139 39.7689 53.7457 39.7689 56.8414V65.9454ZM59.5224 65.9454C59.5224 69.0411 56.9631 71.5729 53.8338 71.5729C50.7045 71.5729 48.1451 69.0399 48.1451 65.9454V56.8414C48.1451 53.7457 50.7056 51.2139 53.8338 51.2139C56.9631 51.2139 59.5224 53.7457 59.5224 56.8414V65.9454Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
<stop stop-color="#534BB1"/>
<stop offset="1" stop-color="#551BF9"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="65.4998" y1="23" x2="65.4998" y2="108" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.82"/>
</linearGradient>
</defs>
                                            </svg>
                                              </div>
                                              <div>
                                                <h2 className='text-white text-center'>Phantom</h2>
                                              </div>
                                              <div className='bg-neutral-900'>
                                                      
                                              </div>
                                        
                                            </button>
                                            
                                            

                                          </div>
                                          {/* Button Connect 2 */}
                                          <div className=''>
                                            <button className='bg-neutral-800 w-full rounded-md grid grid-cols-3 items-center p-6  '>
                                              <div>
                                              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z" fill="url(#paint0_radial_505_19)"/>
<path d="M6.60976 7.20824C8.48214 5.37502 11.5179 5.37502 13.3903 7.20824L13.6156 7.42887C13.7092 7.52053 13.7092 7.66915 13.6156 7.76081L12.8447 8.51554C12.7979 8.56137 12.722 8.56137 12.6752 8.51554L12.3651 8.21193C11.0589 6.93303 8.94111 6.93303 7.63489 8.21193L7.30279 8.53707C7.25598 8.5829 7.18009 8.5829 7.13328 8.53707L6.36242 7.78234C6.2688 7.69068 6.2688 7.54207 6.36242 7.4504L6.60976 7.20824ZM14.9845 8.76911L15.6705 9.44083C15.7641 9.53249 15.7641 9.6811 15.6705 9.77276L12.577 12.8016C12.4834 12.8933 12.3316 12.8933 12.238 12.8016C12.238 12.8016 12.238 12.8016 12.238 12.8016L10.0424 10.652C10.019 10.629 9.98105 10.629 9.95765 10.652C9.95765 10.652 9.95765 10.652 9.95764 10.652L7.7621 12.8016C7.66849 12.8933 7.5167 12.8933 7.42308 12.8016C7.42308 12.8016 7.42308 12.8016 7.42308 12.8016L4.32948 9.77272C4.23586 9.68106 4.23586 9.53245 4.32948 9.44079L5.01554 8.76907C5.10916 8.67741 5.26095 8.67741 5.35457 8.76907L7.55019 10.9188C7.57359 10.9417 7.61154 10.9417 7.63494 10.9188C7.63494 10.9188 7.63494 10.9188 7.63494 10.9188L9.83046 8.76907C9.92407 8.67741 10.0759 8.67741 10.1695 8.76907C10.1695 8.76907 10.1695 8.76907 10.1695 8.76907L12.3651 10.9188C12.3885 10.9417 12.4265 10.9417 12.4499 10.9188L14.6454 8.76911C14.7391 8.67745 14.8908 8.67745 14.9845 8.76911Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_505_19" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 10) scale(20)">
<stop stop-color="#5D9DF6"/>
<stop offset="1" stop-color="#006FFF"/>
</radialGradient>
</defs>
</svg>

                                             
                                              </div>
                                              <div>
                                                <h2 className='text-white text-center'>WalletConnect</h2>
                                              </div>
                                              <div className=' w-[20] h-[20]'>
                                                 <div className='rounded-full  w-[20] h-[20'>
                                                  </div>    
                                              </div>
                                        
                                            </button>
                                            
                                            

                                          </div>
                                          {/* Button Connect 3 */}
                                          <div className=' '>
                                            <button className='bg-neutral-800 w-full rounded-md grid grid-cols-3 items-center p-6 hover:bg-neutral-600 transition-all ease-in-out duration-300 '>
                                              <div className=''>
                                            <img className='' src='https://avatars.githubusercontent.com/u/18060234?s=280&v=4' width={24} height={24}  layout="" />

                                             
                                              </div>
                                              <div>
                                                <h2 className='text-white text-center'>Coinbase Wallet</h2>
                                              </div>
                                              <div className='w-[20] h-[20]'>
                                                 <div className='rounded-full  w-[20] h-[20]'>
                                                  </div>    
                                              </div>
                                        
                                            </button>
                                            
                                            

                                          </div>
                                          {/* Button Connect 4 */}
                                          <div className=''>
                                            <button className='bg-neutral-800 w-full rounded-md grid grid-cols-3 items-center p-6  '>
                                              <div>
                                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" width={24} height={24} alt="" />

                                             
                                              </div>
                                              <div>
                                                <h2 className='text-white text-center'>MetaMask</h2>
                                              </div>
                                              <div className=' w-[20] h-[20]'>
                                                 <div className='rounded-full  w-[20] h-[20'>
                                                  </div>    
                                              </div>
                                        
                                            </button>
                                            
                                            

                                          </div>

                                        </div>
                                        <div className="items-center gap-2 mt-1 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-violet-900 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
                  </li>
                </ul>
                <div className="lg:hidden">
                  <button
                    aria-label="Open Menu"
                    title="Open Menu"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                      />
                      <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                      />
                    </svg>
                  </button>
                  {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full">
                      <div className="p-5 bg-white border rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <a
                              href="/"
                              aria-label="Company"
                              title="Company"
                              className="inline-flex items-center"
                            >
                              <svg
                                className="w-8 text-deep-purple-accent-400"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                              >
                                <rect x="3" y="1" width="7" height="12" />
                                <rect x="3" y="17" width="7" height="6" />
                                <rect x="14" y="1" width="7" height="6" />
                                <rect x="14" y="11" width="7" height="12" />
                              </svg>
                              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                Company
                              </span>
                            </a>
                          </div>
                          <div>
                            <button
                              aria-label="Close Menu"
                              title="Close Menu"
                              className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <nav>
                          <ul className="space-y-4">
                            <li>
                              <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Product
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Features
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                About us
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                Sign up
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
                
            
      );
}

export default Navigation;