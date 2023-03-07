import React from 'react'
import {FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import {BiPhoneCall, BiMailSend} from 'react-icons/bi'
import logo from '../images/CEST White Logo.png'
const Footer = () => {
    const links = {
        cest: '/',
        blog: '/',
        event: '/',
        members: '/',
        facebook: '/',
        instagram: '/',
        linkedin: '/',
        twitter: '/'
    }
  return (
    <>
    <div className='w-full bg-[#0A2647]'>
        <div className='flex items-center justify-center gap-10 md:gap-20 lg:gap-40 py-6 text-white'>
            <div className='p-4 md:mr-4 items-center justify-center hidden md:block'>
                <img className='object-fill md:h-48 lg:h-52' src={logo} alt="logo"/>
            </div>
            <div className='p-2 mx-2 hidden'></div>
            <div className='p-2 mx-1 md:mx-3'>
                    <h1 className='md:text-xl font-bold'>Useful Links</h1>
                    <div className='flex-row items-center p-1 my-1 text-sm md:text-lg'>
                        <p><a href={links.cest}>About CEST</a></p>
                        <p><a href={links.blog}>Blog</a></p>
                        <p><a href={links.event}>Event</a></p>
                        <p><a href={links.members}>Members</a></p>
                    </div>
            </div>
            <div className='p-2 mx-1 md:mx-3'>
                    <h1 className='md:text-xl font-bold'>Contact Us</h1>
                    <div className='flex justify-between items-center p-1 my-1 text-sm md:text-lg'>
                        <div>
                            <BiMailSend />
                        </div>
                        <div>
                            cest@nitrkl.ac.in
                        </div>
                    </div>
                    <div className='flex justify-between items-center p-1 my-1 text-sm md:text-lg'>
                        <div>
                            <BiPhoneCall />
                        </div>
                        <div>
                            +91 9999999999
                        </div>
                    </div>
                    <div className='flex justify-between items-center p-1 my-1 text-sm md:text-lg'>
                        <div>
                            <BiPhoneCall />
                        </div>
                        <div>
                            +91 9999999999
                        </div>
                    </div>
            </div>
        </div>
        <div className='w-full border-t-2 border-white'></div>
        <div className='py-1'>
            <ul className='flex p-6 items-center justify-center'>
                <li className='rounded-full p-2 text-sm md:text-2xl bg-white  text-[#bg-[#0A2647]] mx-2'><a href={links.facebook}><FaFacebookF /></a></li>
                <li className='rounded-full p-2 text-sm md:text-2xl bg-white  text-[#bg-[#0A2647]] mx-2'><a href={links.instagram}><FaInstagram /></a></li>
                <li className='rounded-full p-2 text-sm md:text-2xl bg-white  text-[#bg-[#0A2647]] mx-2'><a href={links.twitter}><FaTwitter /></a></li>
                <li className='rounded-full p-2 text-sm md:text-2xl bg-white  text-[#bg-[#0A2647]] mx-2'><a href={links.linkedin}><FaLinkedinIn /></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer