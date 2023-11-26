import React from 'react'
import Input from '../../../utils/Input'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";



const SignUp = ({ setSignReq }) => {
  return (
    <div className='size mt-[6rem] text-center'>
        <h2 className='text-3x1'>Sign up with email</h2>
        <p className='w-full sm:w-[25rem] mx-auto py-[3em]'>
            Enter the email address associated with your account, and we'll send a magic link toyour inbox
        </p>
        <form className='flex flex-col gap-0.1'>
            <Input type="username" title="username"/>
            <Input type="email" title="email"/>
            <Input type="password" title="password"/>
            <Input type="password" title="rePassword"/>
            <button className='px-4 py-1 text-md rounded-full bg-blue-500 text-white hover:bg-blue-700 w-fit mx-auto'>Sign Up</button>
        </form>
        <button 
        onClick={( ) => setSignReq("")}
        className='mt-5 text-sm text-blue-500 hover:text-blue-800 flex items-center mx-auto'>
            <MdOutlineKeyboardArrowLeft/> All sign Up Options
        </button>
    </div>
  )
}

export default SignUp