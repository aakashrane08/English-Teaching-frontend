import React from 'react'
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import catLogo from '../../assets/logo/cat.png'

export default function Footer() {
  return (
    <div className=' w-full bg-blue-600 text-white flex justify-center'>
        <div className='flex flex-wrap items-center justify-center flex-row px-12 py-12 gap-9'>
            <div className=' flex flex-col gap-4 flex-wrap basis-1/5'>
                <div className='flex flex-col'>
                    <img src={catLogo} alt="" />
                    {/* <p className=' uppercase text-3xl font-bold'>xyz</p> */}
                </div>
                <p className=' text-lg'>We strive for success and we are here to stay and grow.</p>
                <div className="flex gap-4 text-3xl">
                <FaFacebook  className=' cursor-pointer hover:-translate-y-1/4 transition-all'/>
                <FaGoogle  className=' cursor-pointer hover:-translate-y-1/4 transition-all'/>
                <FaTwitter  className=' cursor-pointer hover:-translate-y-1/4 transition-all'/>
                <FaYoutube  className=' cursor-pointer hover:-translate-y-1/4 transition-all'/>
              </div>
            </div>

            <div className='flex justify-center items-center basis-1/5'>
                <div className='flex flex-col gap-9'>
                <h4 className=' text-xl font-semibold'>Company</h4>
                <ul className='flex flex-col gap-4'>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>Home</li>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>About</li>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>Service</li>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>Contact</li>
                </ul>
                </div>
            </div>

            <div className='flex justify-center items-center basis-1/5'>
                <div className='flex flex-col gap-9'>
                <h4 className=' text-xl font-semibold'>Resource</h4>
                <ul className='flex flex-col gap-4'>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>My Courses</li>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>Masterclass</li>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>Request</li>
                    <li className=' cursor-pointer hover:opacity-70 hover:translate-x-1'>Contact</li>
                </ul>
                </div>
            </div>

            <div className='flex justify-center items-center basis-1/4'>
                <div className='flex flex-col gap-3'>
                <p className=' text-2xl flex-wrap font-semibold'>"He's sitting in the shade today, because he planted a tree a long time ago."</p>
                <p className=' text-2xl'>- Nitik</p>
                </div>
            </div>
        </div>
    </div>
  )
}
