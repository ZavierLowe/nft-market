import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PopularCollectionCard(props) {
      return (
            <div className='bg-gray-900 px-4 py-16 mt-60 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                  <h1 className='text-white text-center text-4xl mb-10 p-2'>Popular Collections</h1>
                 <div className='grid grid-cols-3 gap-x-8 '>
                  {/* Card 1 */}
                       <div className='bg-blue-900  p-4 rounded-lg grid grid-cols-3 gap-8'>
                        <img className='col-span-1 rounded-lg   'src="https://www.tbstat.com/wp/uploads/2021/10/CryptoPunk-6046.png" alt="" />
                        <img className='col-span-1  rounded-lg ' src="https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/hofa/images/view/9d5401c93acd8de99e2f25424bc960e3.jpg" alt="" />
                        <img className='col-span-1  rounded-lg  ' src="https://www.larvalabs.com/cryptopunks/cryptopunk4626.png?customColor=638596" alt="" />
                        <img className='col-span-3  rounded-lg  ' src="https://cdnwp-s3.benzinga.com/wp-content/uploads/2021/08/20093407/Screen-Shot-2021-08-20-at-9.34.01-AM.png" alt="" />
                        <section className='col-span-3'>
                              <div className=''>
                                    <h1 className='text-white font-bold text-lg px-1 mb-3'>Cryptopunks New</h1>
                              </div>
                              <div className='flex justify-between'>
                               <div className='flex'>

                                    <img 
                                    width={20}
                                    height={20}
                                    className='rounded-full object-cover ' src="https://sothebys-md.brightspotcdn.com/dims4/default/c467995/2147483647/strip/true/crop/2000x2000+0+0/resize/2048x2048!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F32%2F79%2Fa646c3bd412688cbb5ae265d8bfb%2Flarva-labs-crytpopunk-alien-20175.jpg" alt="" />
                                    <h3 className='text-white text-base ml-2'>Cryptopunks</h3>
                              </div>
                              <div className='flex'> 
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokelinecap="round" strokelinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <p className='text-white text-base ml-2'>22.4K</p>
                                    </div>
                              </div>
                        </section>
                       
                       </div>
                        {/* Card 2 */}
                       <div className='bg-blue-900 w-full p-4 rounded-lg grid grid-cols-3 gap-8  '>
                        <img className='col-span-1 rounded-lg   'src="https://www.tbstat.com/wp/uploads/2021/10/CryptoPunk-6046.png" alt="" />
                        <img className='col-span-1  rounded-lg ' src="https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/hofa/images/view/9d5401c93acd8de99e2f25424bc960e3.jpg" alt="" />
                        <img className='col-span-1  rounded-lg  ' src="https://www.larvalabs.com/cryptopunks/cryptopunk4626.png?customColor=638596" alt="" />
                        <img  width={429} height={332} className='col-span-3  rounded-lg  ' src="https://cdnwp-s3.benzinga.com/wp-content/uploads/2021/08/20093407/Screen-Shot-2021-08-20-at-9.34.01-AM.png" alt="" />
                        <section className='col-span-3'>
                              <div className=''>
                                    <h1 className='text-white font-bold text-lg px-1 mb-3'>Cryptopunks New</h1>
                              </div>
                              <div className='flex justify-between'>
                               <div className='flex'>

                                    <img 
                                    width={20}
                                    height={20}
                                    className='rounded-full object-cover ' src="https://sothebys-md.brightspotcdn.com/dims4/default/c467995/2147483647/strip/true/crop/2000x2000+0+0/resize/2048x2048!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F32%2F79%2Fa646c3bd412688cbb5ae265d8bfb%2Flarva-labs-crytpopunk-alien-20175.jpg" alt="" />
                                    <h3 className='text-white text-base ml-2 '>Cryptopunks</h3>
                              </div>
                              <div className='flex'> 
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <p className='text-white text-base ml-2'>22.4K</p>
                                    </div>
                              </div>
                        </section>
                       
                       </div>
                        {/* Card 3 */}
                       <div className='bg-blue-900 w-full p-4 rounded-lg grid grid-cols-3 gap-x-8  '>
                        <img className='col-span-1 rounded-md w-32 'src="https://lh3.googleusercontent.com/CA4YQQk5AAlLCnzkwJLgH4X8At0YxYii3gmCkGGGiDUl275x54h_UYF-44kQtqK0gboVdGgQenzc_UBRBdZpMlyGyx6Qgb6nlQEABA=w295" alt="" />
                        <img className='col-span-1  rounded-md w-32' src="https://lh3.googleusercontent.com/MQGHUGuTQJ7HbWD039AEjLcHEgd2u4mC4vaGkwTevH5Ha-AAec-r4dLhrzgBj8T_RZpqBhwYRq1rQEN3t63yMYlpMTlQkiEpcDR79jk=w295" alt="" />
                        <img className='col-span-1  rounded-md w-32 ' src="https://lh3.googleusercontent.com/tBUC_BpP5sfLXZ91M7whTk2WmyWU9IslS6NYAmfc2Ga9eIHYvXul1m3-LWyqgH28w2MDgn1kJPtohXE98LIfAqka279ZA6JvhsnE=w295" alt="" />
                        <img className='col-span-3  rounded-lg w-96 ' src="https://lh3.googleusercontent.com/qFPdh_BZJGiQBajMsbf7Jb2L9NLsk8qngT5rGcLxRi4a-ZatmoK6oxKJBYL78xykwRdJSK6xWE8HnFDtVmPdCpyDM_505gn4WtX5ng=w295" alt="" />
                        <section className='col-span-3'>
                              <div className=''>
                                    <h1 className='text-white font-bold text-lg px-1 mb-3'>Neo Hunters New</h1>
                              </div>
                              <div className='flex justify-between'>
                               <div className='flex'>

                                    <img 
                                    width={20}
                                    height={20}
                                    className='rounded-full object-cover ' src="https://lh3.googleusercontent.com/X5u-T0gyUWSUioe6juwXRpZOMZDZp65v9-6AzZYCnsXOq5mx1TJzd_9E9OE8dV2ObT_FE20f1if_Q4cDeg2O-pN7jTBzAakYxFeb_wA=w295" alt="" />
                                    <h3 className='text-white text-base ml-2 '>Neo Hunters</h3>
                              </div>
                              <div className='flex'> 
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <p className='text-white text-base ml-2'>22.4K</p>
                                    </div>
                              </div>
                        </section>
                       
                       </div>
                      
                 </div>
            </div>
      );
}

export default PopularCollectionCard;