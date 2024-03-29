import React from 'react'

const TopCollections = () => {

      const products=[
            {     
                  id:1,
                  imgSrc:'https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s168',
                  nftname:'Azuki',
                  floorprice:9.5,
                  dailychange:316.05,
                  avgprice:514.24,

            },
            {     
                  id:2,
                  imgSrc:'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100',
                  nftname:'Cryptopunks',
                  floorprice:'-',
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:3,
                  imgSrc:'https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s100',
                  nftname:'Meebits',
                  floorprice:4.94,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:4,
                  imgSrc:'https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s100',
                  nftname:'Otherdeed for Otherside',
                  floorprice:2.22,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:5,
                  imgSrc:'https://lh3.googleusercontent.com/-1VbTF_qOdwTUTxW8KzJbFcMX0-mDF-BJM-gmmRl8ihvoo53PF_1z1m1snLXxwcxVFyJH7wk_kouq-KVyB55N9U=s100',
                  nftname:'SuperRare',
                  floorprice:0.2,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:6,
                  imgSrc:'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s100',
                  nftname:'Clone X - X TAKASHI MURAKAMI',
                  floorprice:8.85,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:7,
                  imgSrc:'https://openseauserdata.com/files/7f3cd1b5f71225f4aab4efab5542f253.gif',
                  nftname:'The Potatoz',
                  floorprice:0.95,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:8,
                  imgSrc:'https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s100',
                  nftname:'Doodles',
                  floorprice:10.5,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:9,
                  imgSrc:'https://openseauserdata.com/files/a3f8c2e59c4d856dae07579ccdbbda3e.gif',
                  nftname:'Electric Sheep',
                  floorprice:0.63,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:10,
                  imgSrc:'https://lh3.googleusercontent.com/LrXPPC-y_I4qu9Y1PytwmYUUn7WVu9bXJDUFwKZYzmGuXzdNz41eINzOGOZHKmjv1aFtn5GPqKPk1RJd-Tjkv9CPIG32EG9ygGtJeOk=s100',
                  nftname:'VeeFriends Series 2',
                  floorprice:0.42,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:11,
                  imgSrc:'https://lh3.googleusercontent.com/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F=s100',
                  nftname:'World of Women',
                  floorprice:3.45,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:12,
                  imgSrc:'https://lh3.googleusercontent.com/5Ty2E7_hT4c9sHNStPwXcc9Gp8ciJlUNVb_AgTxSzuvKq6BKVO4xx44vr9RLFSDoEmPvnkLaYvBsiLMiTI0aiZYY-djUlvQPktVZ=s100',
                  nftname:'Shadowy Super Coder',
                  floorprice:'-',
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:13,
                  imgSrc:'https://openseauserdata.com/files/87dd212a122c6235b943dce974041208.gif',
                  nftname:'CryptoNinja Partners',
                  floorprice:0.45,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:14,
                  imgSrc:'https://openseauserdata.com/files/9e12f687190097a3e721e99cafe36949.gif',
                  nftname:'Monokai',
                  floorprice:1.55,
                  dailychange:"-17",
                  avgprice:514.24,

            },
            {     
                  id:15,
                  imgSrc:'https://lh3.googleusercontent.com/h67MQaSTJ0u1GU6oNHR5K-V7Hjo2m_sMW5vwROMDP_ggPDkUNvx3OcZAkaxu-v0BPCIMuJaoRzeEl_AaUh9GFApBr9wPfwp1jnE8uQ=s100',
                  nftname:'CyberBrokers',
                  floorprice:1.7,
                  dailychange:"-17",
                  avgprice:514.24,

            }
      ]
  return (
    <div className='container mx-auto p-2'>

      <h1 className='text-center text-white text-2xl font-bold mb-10'>Top Collections</h1>
      <div className='mx-auto grid grid-cols-1 grid-rows-1 gap-y-3 lg:grid-cols-3'>

            {products.map ((product) =>( 



            <a key={product} className="flex  mx-auto p-4 cursor-pointer shadow-white hover:shadow-2xl hover:bg-neutral-800 rounded-lg   transition-all ease-in-out duration-300 ">
                  <div className='flex text-white justify-center'>
                    <div className='flex items-center '>
                        <span className='text-sm'>
                        {product.id}

                        </span>
                    </div>
                  </div>
                  <div className='flex ml-2  '>

                  <img className='rounded-md object-cover 'src={product.imgSrc} alt="" />
                  </div>
                  <div className='ml-2 '>
                        <div className='w-full truncate'>

                  <h1 className='text-white font-bold text-sm w-full block'>{product.nftname}</h1>
                        </div>
                  <div className='flex items-center w-full'>
                  <p className='text-gray-400 mt-3 text-sm '>Floor Price:</p>
                  <svg width={24} height={24} className='' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.41421" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" transform="matrix(.781253 0 0 .781253 180 37.1453)"><path d="m127.961 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434"/><path d="m127.962 0-127.962 212.32 127.962 75.639v-133.801z" fill="#8c8c8c"/><path d="m127.961 312.187-1.575 1.92v98.199l1.575 4.601 128.038-180.32z" fill="#3c3c3b"/><path d="m127.962 416.905v-104.72l-127.962-75.6z" fill="#8c8c8c"/><path d="m127.961 287.958 127.96-75.637-127.96-58.162z" fill="#141414"/><path d="m.001 212.321 127.96 75.637v-133.799z" fill="#393939"/></g></svg>
                  <p className='mt-2.5 text-gray-400'>{product.floorprice}</p>
                  
                  </div>
                  
                        
                  

                  </div>
                  <div className='flex flex-col ml-14'>

                  <p className='text-green-400 text-sm ml-4'>+{product.dailychange}%</p>
                  <div className='grid grid-cols-2 space-x-1'>
                  <svg className='mt-3' width={20} height={20} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.41421" viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" transform="matrix(.781253 0 0 .781253 180 37.1453)"><path d="m127.961 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434"/><path d="m127.962 0-127.962 212.32 127.962 75.639v-133.801z" fill="#8c8c8c"/><path d="m127.961 312.187-1.575 1.92v98.199l1.575 4.601 128.038-180.32z" fill="#3c3c3b"/><path d="m127.962 416.905v-104.72l-127.962-75.6z" fill="#8c8c8c"/><path d="m127.961 287.958 127.96-75.637-127.96-58.162z" fill="#141414"/><path d="m.001 212.321 127.96 75.637v-133.799z" fill="#393939"/></g></svg>
                  <p className='text-gray-400 text-base font-bold '>{product.avgprice}</p>

                  </div>

                  </div>


            </a>
            ))}


          

      </div>
    </div>
  )
}

export default TopCollections