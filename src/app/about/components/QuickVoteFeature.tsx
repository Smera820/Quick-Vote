import React from 'react'
import Image from 'next/image'

function QuickVoteFeature() {
    return (
        <div className='p-4 md:p-6 lg:ml-5'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='hidden md:flex justify-center items-center'>
                    <Image src="/QV-feature.png" alt="QV-feature" width={350} height={350} />
                </div>

                <div className='flex flex-col space-y-5 '>
                    <h1 className='text-4xl font-bold'>
                        Why Choose
                        <span className='text-red-500'> QuickVote ?</span>
                    </h1>

                    <div className='flex flex-col gap-2 p-2'>
                        <div className='text-md flex gap-2'>
                            <Image src="/Checkmark.png" alt="check-icon" width={25} height={25} />

                            3+ years of trusted service
                        </div>
                        <div className='text-md flex gap-2'>
                            <Image src="/Checkmark.png" alt="check-icon" width={25} height={25} />

                            Secure and encrypted platform
                        </div>
                        <div className='text-md flex gap-2'>
                            <Image src="/Checkmark.png" alt="check-icon" width={25} height={25} />

                            Easy-to-use design
                        </div>
                        <div className='text-md flex gap-2'>
                            <Image src="/Checkmark.png" alt="check-icon" width={25} height={25} />

                            Real-time results
                        </div>
                        <div className='text-md flex gap-2'>
                            <Image src="/Checkmark.png" alt="check-icon" width={25} height={25} />

                            Backed by a strong tech team
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuickVoteFeature