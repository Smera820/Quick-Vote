import React from 'react'
import Image from 'next/image'
function Activities() {
    return (
        <div className="relative overflow-hidden lg:ml-5">
            {/* shadow */}
            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-1/2 w-full sm:h-3/5 sm:w-5/6 bg-gradient-to-l from-red-600/50 via-red-500/30 to-transparent blur-2xl opacity-70"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 relative z-10">
                <div className="p-4 md:p-8">
                    <div className="flex items-center">
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-extrabold leading-tight">
                                Explore <br /> Transparent
                                <br />
                                <span className='text-red-500 text-5xl font-extrabold leading-tight'>Voting</span>
                                <br />
                                Results
                            </h1>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-300 text-md">
                            Discover over 100 completed elections and their <br /> secure, real-time outcomes on QuickVote.
                        </p>
                    </div>
                </div>
                {/* Right side */}
                <div className="justify-center items-center space-y-4 lg:p-6">
                    <div className="hidden lg:flex items-center w-full lg:p-6">
                        <Image
                            src="/explore.png"
                            alt="explore-more"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>
            <div className="p-4 md:p-8 ">
                <p className="text-gray-300 text-2xl mb-2">
                    Our Current Activities
                </p>
                <div className="flex gap-6 md:gap-12 mt-2">
                    <div className='flex flex-col items-center'>
                        <p className="text-5xl font-bold">105</p>
                        <p className="text-white">Created</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className="text-5xl font-bold">75</p>
                        <p className="text-white">Completed</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className="text-5xl font-bold">25,456</p>
                        <p className="text-white">Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities