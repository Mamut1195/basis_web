import React from 'react'
import Link from 'next/link'

function Navbar() {
    const items = [
        // {
        //     name: "About",
        //     href: "#about",
        // },
        {
            name: "Blogs",
            href: "#blogs",
        },
        {
            name: "Contact",
            href: "#contacts",
        },
    ]
    return (
        <div className='sticky top-0 flex justify-between align-middle items-center py-2 bg-opacity-20 bg-gray-700  px-4 rounded-b-xl md:py-4 md:text-lg font-semibold z-10 animate-from-top'>
            <div className='opacity-90  '>
                BASIS ASESORIA
            </div>
            <div className='opacity-80 flex'>
                {items.map((item) => <ul key={item.name}>

                    <li className="px-2 mr-0  hover:bg-white hover:bg-opacity-30 rounded-2xl py-1 ease-in-out delay-300">
                        <Link href={item.href}>{item.name}</Link></li>


                </ul>)}

            </div>
        </div>
    )
}

export default Navbar