import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa"
import { IoLogoTiktok } from "react-icons/io5"
import { MdOutlineWhatsapp } from "react-icons/md"
import { BiLogoGmail } from "react-icons/bi"
import Link from 'next/link'





function Footer() {
    const redes = [
        {
            name: 'instagram',
            ref: "https://www.instagram.com/basis_asesoria/",
            icon: <FaInstagram />,
        },
        // {
        //     name: 'tiktok',
        //     ref: "https://www.tiktok.com/@mampro_ingenieria",
        //     icon: <IoLogoTiktok />,
        // },
        // {
        //     name: 'whatsApp',
        //     ref: "https://wa.me/593983971248",
        //     icon: <MdOutlineWhatsapp />,

        // },
        {
            name: 'mail',
            ref: "mailto:basis.aseosria@gmail.com",
            icon: <BiLogoGmail />,
        },


    ]

    return (
        <div id='contacts' className='flex flex-col md:flex-row justify-between items-center gap-9 m-6 md:m-0 opacity-80 md:py-4   px-4 rounded-t-xl md:px-7 bg-opacity-20 bg-gray-700'>
            <div className='flex gap-4 md:gap-9 text-2xl md:opacity-70'>
                {redes.map((items) => <div key={items.name} className='hover:bg-white hover:bg-opacity-70 px-2 py-1 rounded-2xl hover:scale-125 hover:text-blue-700 ease-in-out '>
                    <Link href={items.ref}>
                        {items.icon}
                    </Link> </div>)}
            </div>
            <div className='text-xs md:text-sm opacity-40 capitalize'> © 2024 BASIS All Rigths Reserved</div>
        </div>

    )
}

export default Footer