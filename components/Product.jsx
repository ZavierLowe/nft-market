import React from 'react'

const Product = () => {
  return (
    <div className='container mx-auto '>
        <div className='flex p-14 '>
            <div className='w-1/2'>
        <img className='rounded-lg' src="https://img.rarible.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmluZnVyYS5pby9pcGZzL2JhZnliZWlldWhmZHZoaWlpaHpobWp2dHNteXFtc2tmZDIzd21zaDViNXhsenhqYjNzaGN1amNhN280Lw==" alt="" />

            </div>

            <div className='w-1/2 '>
            <div className='ml-10 w-full rounded-lg px-10'>
                <div className='flex '>
                <div className='w-6 '>
                <img className='rounded-md object-cover' src="https://img.rarible.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yYXJpYmxlLm15cGluYXRhLmNsb3VkL2lwZnMvUW1YZUE4NlM0d2NHOHNpTmNBUVRDS2htZVRva1VzVG42ckNFYjdwc0Q1VWlIag==" alt="" width={24}  />

                </div>
                <h2 className='text-white mb-4 font-bold ml-2'> Cold Blooded Creepz</h2>
                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" fill='#5B21B6' width="20" height="20" viewBox="0 0 24 24"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"/></svg>

                </div>
            <h1 className='text-white text-2xl'>Cold Blooded Creepz #9846 </h1>
            <div className='flex mt-4'>
            <div className='bg-gradient-to-r from-pink-700 to-violet-600 rounded-full w-6 h-6'>
            
            </div>

            <p className='ml-2 text-white'>Owner 0x6ae948760...64fa</p>
            </div>

            <div className='mt-6'>

                <h3 className='text-white text-xl font-bold '>Current Price</h3>
                <div className='flex place-items-center '>
                <p className='text-white text-lg mt-3 '>1.499</p>
                <svg width={24} height={24} className='mt-2' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.41421" viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" transform="matrix(.781253 0 0 .781253 180 37.1453)"><path d="m127.961 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434"/><path d="m127.962 0-127.962 212.32 127.962 75.639v-133.801z" fill="#8c8c8c"/><path d="m127.961 312.187-1.575 1.92v98.199l1.575 4.601 128.038-180.32z" fill="#3c3c3b"/><path d="m127.962 416.905v-104.72l-127.962-75.6z" fill="#8c8c8c"/><path d="m127.961 287.958 127.96-75.637-127.96-58.162z" fill="#141414"/><path d="m.001 212.321 127.96 75.637v-133.799z" fill="#393939"/></g></svg>


                </div>
                <p className='text-neutral-600 '>$2,419</p>
            </div>
            <div className='flex space-x-6 mt-24'>
            <button className='font-sans bg-violet-800 px-12 py-3 rounded-md text-white text-lg font-medium  hover:bg-violet-700 transition ease-in-out duration-300 '>
            Buy Now
           </button>
           <button className='bg-gradient-to-r from-pink-700 to-violet-600 px-12 py-3 rounded-md text-white text-lg font-medium  hover:from-pink-500 transition ease-in-out duration-300 hover:to-yellow-500 '>
            Place Bid
           </button>

            </div>

        </div>

            </div>
        
        </div>
    </div>
  )
}

export default Product