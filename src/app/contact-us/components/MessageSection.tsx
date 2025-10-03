import React from 'react'

function MessageSection() {
    return (
        <div className="p-4 md:p-8">
              <h2 className="text-3xl font-bold mb-2 leading-tight text-center">
                    <span className="text-red-500">Send </span>
                    Us a Message
                </h2>
            <div className="flex flex-col items-center justify-center gap-6 mt-5">
                <form className="flex flex-col gap-5 w-full max-w-lg">
                    {/* Name */}
                    <div className="flex gap-3 w-full">
                        <label htmlFor="name" className="font-semibold text-white w-24 text-right">
                            Name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="border border-white rounded-sm px-3 py-2 bg-transparent text-white w-full"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex gap-2 w-full">
                        <label htmlFor="email" className="font-semibold text-white w-24 text-right">
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="border border-white rounded-sm px-3 py-2 bg-transparent text-white w-full"
                        />
                    </div>

                    {/* Subject */}
                    <div className="flex gap-2 w-full">
                        <label htmlFor="subject" className="font-semibold text-white w-24 text-right">
                            Subject:
                        </label>
                        <input
                            id="subject"
                            type="text"
                            className="border border-white rounded-sm px-3 py-2 bg-transparent text-white w-full"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex gap-2 w-full">
                        <label htmlFor="message" className="font-semibold text-white w-24 text-right">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            rows={4}
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