"use client"
import React from 'react'
import { useState } from 'react'

interface ContactForm {
    name: string,
    email: string,
    subject: string,
    message: string,
}

function MessageSection() {
    const [form, setForm] = useState({
        name: " ",
        email: " ",
        subject: " ",
        message: " "
    })

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setForm({ ...form, [e.target.name]: e.target.value })
    // }

    const handleSubmit = () => {

    }
    
    return (
        <div className="p-4 md:p-2">
            <h2 className="text-3xl sm:text-3xl font-bold mb-2 leading-tight text-center">
                <span className="text-red-500">Send </span>
                Us a Message
            </h2>
            <div className="flex flex-col items-center justify-center gap-6 mt-5">
                <form
                    // onSubmit={handleSubmit}
                    className="flex flex-col gap-5 w-full max-w-lg"
                >
                    {/* Name */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                        <label 
                        htmlFor="name" 
                        className="font-semibold text-white sm:w-24 sm:text-right mb-1 sm:mb-0">
                            Name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            // value={form.name}
                            // onChange={handleChange}
                            className="border border-white rounded-sm px-3 py-2 bg-transparent text-white w-full"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <label htmlFor="email" className="font-semibold text-white sm:w-24 sm:text-right mb-1 sm:mb-0">
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            // value={form.email}
                            // onChange={handleChange}
                            className="border border-white rounded-sm px-3 py-2 bg-transparent text-white w-full"
                        />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <label htmlFor="subject" className="font-semibold text-white sm:w-24 sm:text-right mb-1 sm:mb-0">
                            Subject:
                        </label>
                        <input
                            id="subject"
                            type="text"
                            // value={form.subject}
                            // onChange={handleChange}
                            className="border border-white rounded-sm px-3 py-2 bg-transparent text-white w-full"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <label htmlFor="message" className="font-semibold text-white sm:w-24 sm:text-right mb-1 sm:mb-0">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            // value={form.message}
                            // onChange={handleChange}
                            className="border border-white rounded-sm px-3 py-2 bg-transparent text-white w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-start">
                            <p className="text-sm text-gray-300">We usually respond within 24 hours.</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-red-500 text-white font-bold px-6 py-2 rounded-md cursor-pointer">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default MessageSection