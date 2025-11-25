import React from 'react'
import Image from 'next/image'

function Testimonials() {
    return (
        <div className="p-4 md:p-8 items-center lg:ml-5">
            <div className="text-3xl sm:text-4xl font-semibold gap-2 flex mb-1">
                <span className='gap-1'>Loved by</span>
                <span className='text-red-500 gap-1'>Organizers</span>
                <div className='hidden md:flex'>
                    <Image src="/user-location.png" alt="user-location" width={70} height={70} />
                </div>
            </div>
            <div className='text-lg sm:text-md'>
                What Users Say
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-lg h-24 p-4 mb-2'>
                        <div className='font-semibold text-center'>
                            <p>
                                <span className='text-red-500'>QuickVote</span> simplified our student elections – secure and instant.
                            </p>
                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        – Aditi, College President
                    </div>
                </div>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-lg h-24 p-4 mb-2'>
                        <div className='font-semibold text-center'>
                            <p>
                                The fastest way we've ever organized secure <span className='text-red-500'>voting</span>
                            </p>

                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        – Rahul, Team Lead
                    </div>
                </div>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-lg h-24 p-4 mb-2'>
                        <div className='font-semibold text-center'>
                            <p>
                                <span className='text-red-500'>QuickVote</span> made managing election effortless and stress-free
                            </p>

                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        – ABC Sports Club President
                    </div>
                </div>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-lg h-24 p-4 mb-2'>
                        <div className='font-semibold text-center'>
                            <p>
                                Our community loved the simplicity of <span className='text-red-500'>voting</span> with just one link
                            </p>

                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        – Sarah, Community Lead
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials