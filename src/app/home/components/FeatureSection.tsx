import React from 'react'
import Image from 'next/image'

function SecureVoting() {
    return (
        <div className="p-4 md:p-8 lg:ml-5">
            <div className="flex flex-col gap-2">
                <h2 className='text-3xl font-semibold'>Build for fast, secure <br />
                    <span className='text-red-500'>voting</span></h2>

                <p className='font-medium'>Create an election in seconds - share a link, collect votes and watch live results.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="px-6 py-5 flex flex-col gap-2">
                    <div className='flex gap-2'>
                        <div>
                            <Image src="/easy-setup.png" alt="easy-setup" width={25} height={25} />
                        </div>
                        <div className="mb-4">
                            <h2 className="text-red-500 font-bold text-lg">Easy Setup</h2>
                            <p>Create polls & elections under a minute.</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <Image src="/add-link.png" alt="add-link" width={25} height={25} />
                        </div>
                        <div className="mb-4">
                            <h2 className="text-red-500 font-bold text-lg">Share with a Link</h2>
                            <p>Invite participants via email, chat or QR.</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <div>
                            <Image src="/time-out.png" alt="real-time-results" width={25} height={25} />
                        </div>
                        <div className="mb-4">
                            <h2 className="text-red-500 font-bold text-lg">Real-Time Results</h2>
                            <p>Live tallying and downloadable CSV.</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <div>
                            <Image src="/secure-private.png" alt="secure-private" width={25} height={25} />
                        </div>
                        <div className="mb-4">
                            <h2 className="text-red-500 font-bold text-lg">Secure & Private</h2>
                            <p>End-to-end protection and optional verification.</p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex justify-center items-center">
                    <Image src="/secure-voting.png" alt="secureVote" width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default SecureVoting