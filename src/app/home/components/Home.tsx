'use client'
import React from 'react'
import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
function Home() {
    return (

        <div className="relative overflow-hidden lg:ml-5">
            {/* shadow */}
            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-1/2 w-full sm:h-3/5 sm:w-5/6 bg-gradient-to-l from-red-600/50 via-red-500/30 to-transparent blur-2xl opacity-70"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-16 sm:mt-20 p-4 md:p-8 relative z-10">

                {/* Left side */}
                <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                        {/* Vertical vote */}
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-red-600 font-extrabold text-5xl sm:text-5xl -rotate-90">
                                vote
                            </span>
                        </div>
                        <div>
                            <h1 className="text-5xl sm:text-5xl font-extrabold leading-tight">
                                SMARTER <br /> FASTER
                            </h1>
                            <p className="text-2xl sm:text-2xl">With QuickVote</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <button className="bg-white text-orange-600
                         px-6 py-2 sm:px-6 sm:py-2 rounded font-bold border mb-2 cursor-pointer">
                            VOTE NOW
                        </button>
                        <p className="text-gray-300 font-bold text-md sm:text-lg mt-2">
                            Create elections, share links, and get real-time
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-300 text-2xl sm:text-2xl mb-4">
                            Our Current Activities
                        </p>
                        <div className="flex gap-6 md:gap-12 mt-2">
                            <div className="flex flex-col items-center">
                                <p className="text-4xl sm:text-5xl font-bold">105</p>
                                <p className="text-white">Created</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-4xl sm:text-5xl font-bold">75</p>
                                <p className="text-white">Completed</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-4xl sm:text-5xl font-bold">25,456</p>
                                <p className="text-white">Users</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex flex-col items-center space-y-8 -mt-4">
                    <div className="flex items-center mb-2">
                        <Image
                            src="/vote-count.png"
                            alt="voteCount"
                            width={320}
                            height={320}
                        />
                    </div>
                    <div className="space-y-4 text-center lg:text-left w-full flex flex-col items-center">
                        <h2 className="text-lg sm:text-lg font-semibold">
                            Ready to make every vote count?
                        </h2>
                        <p className="text-red-500 text-lg sm:text-md font-semibold">
                            Get started free
                        </p>
                        <div className="flex gap-4 sm:gap-4 justify-center w-full">
                            <button className="flex items-center gap-2 bg-white text-black 
                            px-5 py-2.5 sm:px-5 sm:py-2.5 rounded-lg cursor-pointer">
                                <FaApple className="text-xl sm:text-xl" /> App Store
                            </button>
                            <button className="flex items-center gap-2 bg-white text-black
                             px-5 py-2.5 sm:px-5 sm:py-2.5 rounded-lg cursor-pointer">
                                <FaGooglePlay className="text-xl sm:text-xl" /> Google Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home