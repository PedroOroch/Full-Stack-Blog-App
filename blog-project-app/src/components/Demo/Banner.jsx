import React from 'react'

function Banner() {
  return (
    <div className='bg-blue-500 border-b border-black'>
        <div className='size py-[5rem] flex flex-col items-start gap-[1rem]'>
                <h1 className='font-poppins text-[3rem] sm:text-[4rem] md:text-[6rem] font-light'>REACT JS</h1>
                <p className='w-full md:w-[50rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, enim mollitia nobis dolor quaerat dolores nisi? 
                </p>
                <button className='btn bg-black1 text-white rounded-full !text-[1.1rem] !px-6 !mt-[2.5em]'>Start Reading</button>
        </div>
    </div>
  )
}

export default Banner