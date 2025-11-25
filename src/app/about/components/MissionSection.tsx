import React from 'react'
import Image from 'next/image'
function MissionSection() {
    return (
        <div className='p-4 md:p-6 lg:ml-5'>
            <div className='flex items-center gap-2 '>
                <h1 className='font-bold text-4xl'>Our Mission <span className='text-red-500'>& Vision </span>
                </h1>
                <div className='hidden md:flex'>
                    <Image
                        src="/Rocket.png"
                        alt="Rocket"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'> 
                <div className='flex flex-col justify-center items-center space-y-5'>
                    <div className='border border-white rounded-md w-full md:w-4/5 h-30 flex items-center justify-center p-4'>
                        <div className='flex flex-col gap-2 font-semibold'>
                            <h1 className='text-xl'>Mission</h1>
                            <p className='text-sm'>
                                To provide a simple, secure and accessible online
                                <span className='text-red-500'> voting </span>
                                platform for communities worldwide.

                            </p>
                        </div>
                    </div>
                    <div className='border border-white rounded-md w-full md:w-4/5 h-30 flex items-center justify-center p-4'>
                        <div className='flex flex-col gap-2 font-semibold'>
                            <h1 className='text-xl text-red-500'>Vision</h1>
                            <p className=' text-sm'>A future where every group - big or small - can make decision through transparent digital
                                <span className='text-red-500'> voting</span>.</p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center -mt-8'>
                    <Image src="/mission-vision.png" alt="Mission and Vision" width={350} height={350} />
                </div>
            </div>
        </div>
    )
}

export default MissionSection