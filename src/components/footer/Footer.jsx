
import Brand from '../../assets/Brand.png'

import { Link } from "react-router-dom";






const Footer = () => {
  return (
          <>
          <div className="bg-gray-100 ">
          <div className="mx-auto max-w-2xl px-10 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-8">
                                  <div className=' flex flex-col relative p-0'>
                                  <img src={Brand} alt="" className='w-20 sm:w-32 sm:mt-[-30px]     items-center justify-center' />
                                  <p className='ml-4 font-mono text-sm text-gray-600'>MarketHub is a Trusted Ecommerce Website to Buy Product.</p>
                                          <div className='flex gap-x-4 ml-4 leading-8 text-orange-600 font-semibold'>
                                                  <span>support@markethub.com</span>
                                                  
                                          
                                          </div>
                                  </div>
                                  <div className="flex flex-wrap sm:ml-10 md:flex-row  gap-x-28 gap-y-4 text-gray-600">
                                  
                                  <div className=' flex flex-col  '>
                                  <h1 className='text-lg font-bold text-black' >Get to Know Us</h1>
                                  <Link to='/'>About Us</Link>
                                  <Link to='/'>Careers</Link>
                                  <Link to='/'>Press Realease</Link>
                                  <Link to='/'>Services</Link>
                                  </div>


                                  <div className=' flex flex-col '>
                                  <h1 className='text-lg font-bold text-black' >Connect with Us</h1>
                                  <Link to='/'>Facebook</Link>
                                  <Link to='/'>Instagram</Link>
                                  <Link to='/'>Twitter</Link>
                                  </div>


                                  <div className=' flex flex-col '>
                                  <h1 className='text-lg font-bold text-black' >Let Us Help You</h1>
                                  <Link to='/'>Your Account</Link>
                                  <Link to='/'>Return Center</Link>
                                  <Link to='/'>Help</Link>
                                  </div>
                                  </div>
                          </div>
                         
    </div>
          </div>
           <div className="flex flex-col px-4 py-4 gap-y-2 text-center sm:flex-row sm:justify-between text-white bg-gray-800">
                                  <p>&copy; copyright 2024. All are reserved</p>
                                  <p>Made with 	&#x1F9E1;</p>
                          </div>
          </>
  )
}

export default Footer
