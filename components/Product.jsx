import React from 'react'

const Product = () => {
  return (
    <div className='container mx-auto  '>
        <div className='flex w-1/2'>
        <img className='rounded-lg' src="https://lh3.googleusercontent.com/jLEMwCMs19sRh_uGEI5eAxj31SKQCtcl_Pwkxa2kU_D1BmvitO7XLzug7irLcyejF-sde68UKiX96ntXTGzk52Pfkmc4FM_moFuV=s1000" alt="" />
        <div className='ml-8'>
            <h1 className='text-white'>Name </h1>
            <p>Owner</p>
            <div className='flex space-x-8'>
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
  )
}

export default Product