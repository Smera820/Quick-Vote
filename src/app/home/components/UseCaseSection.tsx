import React from 'react'

function UseCaseSection() {
    return (
        <div className="p-4 sm:p-8 lg:ml-5">
            <div className="text-4xl font-semibold gap-2 flex mb-6">
                <span className='gap-1'>Perfect</span>
                <span className='text-red-500 gap-1'>for</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='flex flex-col items-center p-2'>
                    <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                            <h1 className='text-xl'>Student elections</h1>
                            <span className='text-red-500 text-sm'>fast campus voting</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-2'>
                    <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                           <h1 className='text-xl'>Club and association polls</h1>
                            <span className='text-red-500 text-sm'>easy majority decisions</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-2'>
                    <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                            <h1 className='text-xl'>Workplace surveys</h1>
                            <span className='text-red-500 text-sm'>quick team consensus</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center p-2'>
                        <div className='border border-white rounded-md w-full h-32 flex items-center justify-center'>
                        <div className='flex flex-col gap-2 font-semibold items-center text-center'>
                           <h1 className='text-xl'>Community boards</h1>
                            <span className='text-red-500 text-sm'>easy majority decisions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCaseSection