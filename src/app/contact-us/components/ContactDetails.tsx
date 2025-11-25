import React from 'react'
import Image from 'next/image'

function ContactDetails() {
    return (
        <div className='p-4 lg:ml-5 mb-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-center items-center">
                    <Image src="/contact-details.png" alt="Contact Details" width={400} height={400} />
                </div>
                <div className="space-y-4 text-white">
                    <h2 className="text-3xl sm:text-3xl font-bold mb-5 leading-tight">Contact <span className='text-red-500'>details</span></h2>

                    <div className="space-y-5 text-md">
                        <div className="grid gap-2 sm:grid-cols-[140px_1fr] grid-cols-[120px_1fr]">
                            <span className="font-semibold">Company Name: </span>
                            <span>QuickVote - by BigBurry Hypersystems</span>
                        </div>
                        <div className='grid gap-2 sm:grid-cols-[140px_1fr] grid-cols-[120px_1fr]'>
                            <span className="font-semibold">Office Address: </span>
                            <span>7/130, Puthussery Complex, <br />
                                Old Market Road, Angamaly,<br />
                                Near Angamaly Police Station,<br />
                                Paravur, Ernakulam-683572, Kerala, India
                            </span>
                        </div>

                        <div className='grid gap-2 sm:grid-cols-[140px_1fr] grid-cols-[120px_1fr]'>
                            <span className="font-semibold">Mobile: </span>
                            <span>+91 123456789</span>
                        </div>

                        <div className='grid gap-2 sm:grid-cols-[140px_1fr] grid-cols-[120px_1fr]'>
                            <span className="font-semibold">Email: </span>
                            <span>support@bigburry.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails