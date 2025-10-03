import React from 'react'
import Image from 'next/image'
import { MdEmail, MdHeadphones } from 'react-icons/md'

function ContactUs() {
    return (

        <div className="relative overflow-hidden lg:ml-5">

            {/* shadow */}
            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-3/5 w-5/6 bg-gradient-to-l from-red-600/50 via-red-500/30 to-transparent blur-2xl opacity-70"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 relative z-10">

                {/* Left side */}
                <div className="p-4 md:p-8">
                    <div className="flex items-center mb-2">
                        <div className="flex flex-col mb-2">
                            <h1 className="text-5xl font-extrabold leading-tight">
                                Get in Touch </h1>
                            <p className='text-5xl'>with</p>

                            <h1 className='text-red-500 text-5xl font-extrabold leading-tight'>QuickVote</h1>
                        </div>
                    </div>
                    <div className="mb-6">
                        <p className="text-gray-300 font-bold text-lg">
                            "We're here to support you every step of the way."
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-6 font-semibold">
                        <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-3 rounded-md w-full sm:w-auto justify-center">
                            <MdHeadphones /> +91 123456789
                        </button>
                        <button className="border flex items-center gap-2 bg-gray-800 text-red-500 px-4 py-3 rounded-md w-full sm:w-auto justify-center">
                            <MdEmail /> support@bigburry.com
                        </button>
                    </div>
                    <div>
                        <p className='text-md'>
                            QuickVote is committed to making voting smarter, faster and more secure. Whether you're organizer, voter or partner, we're here to help.

                        </p>
                    </div>
                </div>
                {/* Right side */}
                <div className="justify-center items-center space-y-4 p-4 md:p-6">
                    <div className="hidden lg:flex flex-col items-center w-full space-y-4">
                        <Image
                            src="/contact-us.png"
                            alt="contact-us"
                            width={350}
                            height={400}
                        />
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ContactUs