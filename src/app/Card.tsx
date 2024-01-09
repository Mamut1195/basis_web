import React from 'react'

function Card() {
    return (
        <div className='bg-blue-950 bg-opacity-90 rounded-2xl flex flex-col p-6  shadow-md shadow-blue-900   hover:scale-105 hover:transition-all hover:bg-blue-400 hover:bg-opacity-40 ease-in-out '>

            <h2 className='font-bold capitalize flex justify-center sm:text-xl'>
                Titulo
            </h2>

            <div className='py-8 pb-14 text-justify flex justify-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id vero debitis voluptas beatae quidem consequuntur quo in non, explicabo unde! Voluptate maxime reiciendis vero et sint illum iste in voluptatibus labore molestias fuga aut, deleniti obcaecati praesentium expedita magnam adipisci!</div>
            <div className='flex justify-between'>
                <div className='opacity-50'>fechasssssss</div> 
                <button className='bg-blue-600 py-2 px-3 rounded-2xl font-semibold hover:bg-opacity-80 hover:scale-110 transition-colors ease-in-out '>Read More</button>
            </div>
        </div>
    )
}

export default Card