import React from 'react'
import Image from 'next/image'

function StorySection() {
    return (
        <div className="p-4 md:p-6 lg:ml-5">
            <div className="flex items-center gap-2 mb-4">
                <h1 className="text-4xl sm:text-4xl font-bold">
                    <span className='text-red-500'>Our </span>Story
                </h1>
                <div>
                    <Image src="/book-and-pencil.png" alt="Book and pencil" width={50} height={50} />
                </div>
            </div>
            <p className="font-medium">
                For over 3 years, QuickVote has been helping communities, organizations, and businesses create transparent elections online.
                Simple, secure, and accessible for everyone.
            </p>
        </div>
    )
}

export default StorySection