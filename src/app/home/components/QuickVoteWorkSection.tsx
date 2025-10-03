import React from 'react'
import Image from 'next/image'

function QuickVoteWorkSection() {
    return (
        <div className="p-4 md:p-8 lg:ml-5">
            <div className="text-4xl font-semibold gap-2 flex mb-6">
                <span className='gap-1'>How</span>
                <span className='text-red-500 gap-1'>QuickVote</span>
                <span className='gap-1'>works</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-full px-6 py-3 mb-2'>
                        <div className='flex gap-2 font-semibold'>
                            <span>
                                Step 1 -
                            </span>
                            <span className='text-red-500'>Create</span>
                            <div>
                                <Image src="/create.png" alt="create" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        Create your election, set options and pick privacy rules
                    </div>
                </div>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-full px-6 py-3 mb-2'>
                        <div className='flex gap-2 font-semibold'>
                            <span>
                                Step 2 -
                            </span>
                            <span className='text-red-500'>Share</span>
                            <div>
                                <Image src="/share.png" alt="share" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        Copy the unique link or QR and send it to participants
                    </div>
                </div>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-full px-6 py-3 mb-2'>
                        <div className='flex gap-2 font-semibold'>
                            <span>
                                Step 3 -
                            </span>
                            <span className='text-red-500'>Vote & View</span>
                            <div>
                                <Image src="/vote-view.png" alt="vote" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        Participants vote in one tap. Results update live
                    </div>
                </div>
                <div className='flex flex-col items-center rounded-lg p-4'>
                    <div className='border border-white rounded-full px-6 py-3 mb-2'>
                        <div className="flex items-center justify-center gap-4 font-semibold">
                            <span>Step 4 -</span>

                            <div className="flex items-center gap-2">
                                <div className="flex flex-col leading-tight text-red-500">
                                    <span>Results</span>
                                    <span>Instantly</span>
                                </div>
                                <Image src="/result.png" alt="results" width={25} height={25} />
                            </div>
                        </div>


                    </div>
                    <div className='text-sm text-center text-gray-200'>
                        Get real-time results and analytics
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickVoteWorkSection