import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    function toggleDropdown(section) {
    const dropdownContent = document.getElementById(`${section}Dropdown`);
    if (dropdownContent) {
      dropdownContent.classList.toggle('hidden');
    }
  }
  
  return (
    <div>
        <div className=' grid bg-primary lg:h-[50vh] mt-10 w-full px-8 py-10 lg:px-10 lg:py-14'>
        <div className=' lg:flex lg:justify-between'>
            <div className=''>
                <h2 className=' text-black font-bold text-2xl lg:pb-10'> Event.Ticks</h2>
                <p className=' text-black lg:text-xl'>The best platform to purchase your <br/> tickets nationwide </p>
            </div>
            <div>
            <div className='  text-black font-bold text-xl pt-5 lg:pb-10'>
            <div className=' flex gap-2 items-center' onClick={() => toggleDropdown('product')}>
                    <h2> Product</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden lg:block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z " />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 visible lg:hidden ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                </div> 
            <div id='productDropDown' className=' text-black text-lg lg:text-center'>
                <p> Ticketing</p>
                <p> Cashless Payment </p>
            </div>
            </div>
            <div>
            <div className='  text-black font-bold text-xl pt-5 lg:pb-10'>
                <div className=' flex gap-2 items-center'>
                <h2> Company</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden lg:block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:hidden ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                </div> 
            <div className=' text-black text-lg lg:text-center'>
            <p> About Us</p>
                <p> FAQ</p>
                <p>Contact Us</p>
                <p>  Blog</p>
            </div>
                
            </div>
            <div>
                <div className='  text-black font-bold text-xl pt-5 lg:pb-10 '>
                    <div className=' flex gap-2 items-center'>
                    <h2> Follow Us</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden lg:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:hidden ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div>
                    </div> 
            
            <div className=' text-black text-lg'>
                <div className=' flex items-center gap-3'>
                <FaTwitter/>
                <p> Twitter</p>
                </div>
                <div className=' flex items-center gap-3'>
                <FaFacebook/>
                <p> Facebook</p>
                </div>
                <div className=' flex items-center gap-3'>
                <FaInstagram/>
                <p> Instagram</p>
                </div>
            </div>
            </div>
            </div>
            <div className=' lg:flex lg:mt-10 lg:justify-between pt-5'>                
                <div className=' flex gap-6 font-bold'>
                    <p>
                        Terms & Conditions
                    </p>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        Refund Policy
                    </p>
                </div>
                <div  className='pt-3 text-[12px] lg:text-base'>
                    <p>
                    Copyright &copy; {currentYear}. EventTicks Inc. All rights reserved.
                    </p>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Footer