import React from 'react'
import Image from 'next/image'

function WhoWeAreSection() {
    return (
        <div className='p-4 md:p-8 lg:ml-5'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='hidden md:flex justify-center items-center'>
                    <Image src="/us.png" alt="us" width={300} height={300} />
                </div>
                <div className='flex flex-col justify-center space-y-5'>
                    <h1 className='text-4xl font-bold'>
                        <span className='text-red-500'>Who</span> We Are ?
                    </h1>
                    <p className='font-medium'>
                        "QuickVote is proudly developed by BigBurry Hypersystems, technology company based in Angamaly, Kerala. Our team is passionate about building digital solutions that simplify complex processes."
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAreSection