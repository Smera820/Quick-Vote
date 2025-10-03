"use client"
import React from 'react'

interface Elections {
    id: number,
    title: string,
    organizer: string,
    date: string,
    votes: number,
    status: string
}

interface Props {
    data: Elections[]
}

function FilterSection({ data }: Props) {

    return (
        <div className="p-4 md:p-8 bg-black min-h-screen text-white lg:ml-5">
            <div className="flex flex-col sm:flex-row gap-4 mb-6 overflow-x-auto">
                <input type="text"
                    placeholder="🔍︎  Search by Election Name"
                    className="flex-1 border border-gray-400 rounded-md py-2 px-4 focus:border-white focus:ring-1 focus:ring-white focus:outline-none" />

                <select
                    className="border border-gray-400 rounded-sm py-2 px-4 bg-black text-white focus:border-white focus:ring-1 focus:ring-white focus:outline-none" >
                    <option>Status</option>
                    <option> Active</option>
                    <option>Upcoming</option>
                    <option> Completed</option>
                </select>
                <select
                    className="border border-gray-400 rounded-sm py-2 px-4 bg-black text-white focus:border-white focus:ring-1 focus:ring-white focus:outline-none" >
                    <option>Category</option>
                    <option>College</option>
                    <option>Corporate</option>
                    <option>Public</option>
                    <option>NGO</option>
                    <option>School</option>
                </select>
                <select
                    className="border border-gray-400 rounded-sm py-2 px-4 bg-black text-white focus:border-white focus:ring-1 focus:ring-white focus:outline-none" >
                    <option>Sort By</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Most voted</option>
                </select>
                <select
                    className="border border-gray-400 rounded-sm py-2 px-4 bg-black text-white focus:border-white focus:ring-1 focus:ring-white focus:outline-none" >
                    <option>Type</option>
                    <option>Single</option>
                    <option>Multi</option>
                    <option>Ranked</option>
                    <option>Approvel</option>
                </select>
            </div>

            {/* buttons */}
            <div className="mt-8 text-sm">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                    <div className="flex sm:flex-row gap-4">
                        <button className="bg-red-600 px-6 py-2 rounded-md font-semibold sm:w-auto cursor-pointer">
                            PLAYSTORE
                        </button>
                        <button className="border bg-white text-red-600 px-6 py-2 rounded-md font-semibold sm:w-auto cursor-pointer">
                            APP STORE
                        </button>
                    </div>


                    <div className="flex sm:flex-row gap-4">
                        <button className="border px-6 py-2 rounded-md">PREVIOUS</button>
                        <button className="bg-red-600 px-8 py-2 rounded-md">NEXT</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                {data.map((row) => (
                    <div
                        key={row.id}
                        className='border border-white rounded-lg p-4 flex flex-col justify-between'>
                        <h3 className='font-bold text-lg '>{row.title}</h3>
                        <p> <span className='text-sm text-red-600'>Organized by</span> <br />
                           <span className='text-md'>{row.organizer}</span></p>
                        <div className='space-x-1'>
                            <span className='text-sm text-red-600'> {row.date} </span>
                            | <span className='text-sm text-red-600'>Votes</span>
                            <span className='font-semibold'> {row.votes}</span>
                            <button className='rounded-full px-2 py-1 bg-red-600 text-white'>{row.status}</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FilterSection