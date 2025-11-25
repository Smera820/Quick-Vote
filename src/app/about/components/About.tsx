import React from 'react'
import Image from 'next/image'
import { MdArrowForward } from 'react-icons/md'

function About() {
    return (
        <div className="relative overflow-hidden lg:ml-5">
            {/* shadow */}
            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-1/2 w-full sm:h-3/5 sm:w-5/6 bg-gradient-to-l from-red-600/50 via-red-500/30 to-transparent blur-2xl opacity-70"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 relative z-10 mb-6 sm:mb-0">
                <div className='p-4 md:p-8 space-y-4'>
                    <div>
                        <h1 className='text-5xl font-extrabold'>
                            Empowering <br />
                            Secure Digital
                            <span className='text-red-500'> Voting</span> Since <br />
                            2021
                        </h1>
                    </div>

                    <p className='font-semibold'>
                        "For over 3 years, QuickVote has been helping communities, organizations, and businesses create transparent elections online.
                        Simple, secure, and accessible for everyone."
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='hidden lg:flex justify-center items-center'>
                        <Image src="/about.png" alt="about" width={300} height={300} />
                    </div>
                    <div className="flex sm:flex-col md:flex-row gap-8">
                        <button
                            className='bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-sm cursor-pointer'>
                            Get Started Free
                        </button>
                        <button
                            className="bg-white text-red-500 px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-1 cursor-pointer">
                            Learn More
                            <MdArrowForward />
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default About