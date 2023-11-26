import React from 'react'

const Input = ({type, title}) => {
  return (
    <div className='flex flex-row gap-30 w-800 items-center justify-center m-3.5'>
        <input 
            className='text-center border w-[30rem] md:w-[25rem] sm:w-[20rem]'
            type={type}
            placeholder={title}/>
    </div>
  )
}

export default Input