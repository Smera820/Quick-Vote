import React from 'react'
import Image from 'next/image'
import { MdArrowForward } from "react-icons/md"
import { FaFacebook, FaInstagram } from "react-icons/fa"

function Footer() {
    return (
        <div className="bg-red-600 p-4 rounded-md mt-10">
            <div className="flex flex-col lg:flex-row items-start gap-6">

                <div className='hidden lg:flex'>
                    <Image
                        src="/coworking-office-space.png"
                        alt="office-space"
                        width={250}
                        height={200} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] w-full gap-2">

                    <div className="text-white flex flex-col gap-1">
                        <h1 className="font-bold text-lg mb-1">Products</h1>
                        <hr className="border-white mb-1 w-28" />
                        <ul className="list-none space-y-1">
                            <li className='text-sm'>GATHENT</li>
                            <li className='text-sm'>COGNICAMPUS</li>
                            <li className='text-sm'>CELEVERY</li>
                        </ul>
                        <button className="flex text-sm bg-black text-white rounded-md items-center p-1 px-2 w-max cursor-pointer">
                            Get Started Today
                            <MdArrowForward />
                        </button>
                    </div>

                    <div className="text-white flex flex-col gap-1">
                        <h1 className="font-bold text-lg mb-1">COMPANY DETAILS</h1>
                        <hr className="border-white mb-2 w-48" />
                        <p className="text-sm leading-relaxed">Our mission is to build scable, user-centric software products that not only address today's needs but anticipate the challenges and opportunities of tomorrow.</p>

                    </div>

                    <div className="text-white flex flex-col gap-1">
                        <h1 className="font-bold text-lg mb-1">CONTACT US</h1>
                        <hr className="border-white mb-1 w-36" />
                        <p className="text-sm">123456789</p>
                        <p className="text-sm">support@bigburry.com</p>
                        <p className="text-sm">7/130, PUTHUSSERY COMPLEX, OLD MARKET ROAD, Angamally, Angamally Police Station, Paravur, Ernakulam-683572, Kerala, India</p>

                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gray-200"><FaFacebook size={25} /></a>
                            <a href="#" className="hover:text-gray-200"><FaInstagram size={25} /></a>
                        </div>
                    </div>


                </div>

            </div>
            <div className="text-center mt-1 text-sm font-semibold">
                © 2025 <span className="text-black">QuickVote</span> by Bigburry Hypersystems
            </div>
        </div>

    )

}

export default Footer