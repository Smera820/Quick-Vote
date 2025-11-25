import React from 'react'
import Image from 'next/image'

function UseCaseSection() {
    return (
        <div className="p-4 sm:p-8 lg:ml-5">
            <div className="text-3xl sm:text-4xl font-semibold gap-2 flex mb-6">
                <span className='gap-1'>Perfect</span>
                <span className='text-red-500 gap-1'>for</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='flex flex-col items-center p-2'>
                    <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                            <div className='flex items-center gap-4'>
                                <Image src="/Students.png" alt="students" width={35} height={35} />
                                <h1 className='text-xl sm:text-xl'>Student elections</h1>
                            </div>
                            <span className='text-red-500 text-sm sm:text-md'>fast campus voting</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-2'>
                    <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                            <div className='flex items-center gap-4'>
                                <Image src="/Golf.png" alt="golf" width={35} height={35} />
                                <h1 className='text-xl sm:text-xl'>Club and association polls</h1>
                            </div>
                            <span className='text-red-500 text-sm sm:text-md'>easy majority decisions</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-2'>
                    <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                            <div className='flex items-center gap-4'>
                                <Image src="/workplace.png" alt="workplace-survey" width={35} height={35} />
                                <h1 className='text-xl sm:text-xl'>Workplace surveys</h1>
                            </div>
                            <span className='text-red-500 text-sm sm:text-md'>quick team consensus</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-2'>
                    <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                            <div className='flex items-center gap-4'>
                                <Image src="/multi-people.png" alt="community-board" width={35} height={35} />
                                <h1 className='text-xl sm:text-xl'>Community boards</h1>
                            </div>
                            <span className='text-red-500 text-sm sm:text-md'>easy majority decisions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCaseSection