import React from 'react'
import Image from 'next/image'

function SecturitySection() {
    return (
        <div className="p-4 md:p-8 lg:ml-5">
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                <div className="">
                    <div className='text-3xl sm:text-4xl font-semibold gap-2 flex'>
                        <span className=' text-red-500'>Security</span>
                        <span className='gap-1'>& Privacy</span>
                    </div>
                    <div className='flex flex-col p-4'>
                        <ul className='list-disc font-semibold sm:text-md'>
                            <li className='mb-2'>
                                TLS encryption in transit and at rest.
                            </li>
                            <li className='mb-2'>
                                Optional voter verifictaion (email,SSO).
                            </li>
                            <li className='mb-2'>
                                Immutable audit logs and exportable reports.
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="hidden lg:flex justify-center items-center ">
                    <Image src="/security.png" alt="security" width={250} height={250} />
                </div>
            </div>

        </div>
    )
}

export default SecturitySection