import React from 'react'


function About() {
  return (
    <div id='about' className=" h-screen justify-center flex flex-col items-center ">
      <div>

        <h1 className='font-bold mb-5 md:mb-[3rem] lg:mb-[.3.5rem] text-[1.3rem] text-center md:text-[2rem] '>Entrenamiento Online </h1>
        <p className='bg-gray-900 p-4 text-justify mx-6 mt-2  md:text-[1.35rem] rounded-lg bg-opacity-80 md:font-medium'>Basis es una empresa que se dedica a covertirte en un atleta, <span className='text-orange-500'>de manera natural.</span>  Si llevas tiempo entrenando y no eres capaz de hacer más de diez dominadas, no levantas dos veces tu peso corporal en sentadilla, no levantas cien kilogramos en press de pecho estás estancado. Necesitas entrenar con nosotros. Aplicamos el principio olvidado por muchos entrenadores, <span className="font-extrabold italic">
          sobrecarga progresiva.</span> </p>
      </div>
      <div className='bg-white w-3/5 text-center text-orange-500 font-extrabold px-2 py-2 text-2xl rounded-2xl mt-8'> Quiero Entrenar</div>

    </div>
  )
}

export default About