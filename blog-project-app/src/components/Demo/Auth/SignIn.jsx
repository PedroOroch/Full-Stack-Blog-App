import React, { useState } from 'react'
import Input from '../../../utils/Input'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';



const SignIn = ({ setSignReq }) => {
  const navigate = useNavigate( );
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit =  async (e) => {
    e.preventDefault( );
   if(form[("email", "password")] === "") {
        toast.error("All fields are required!");
   }

   try {
    setLoading(true);
    await signInWithEmailAndPassword(auth, form.email, form.password);
    navigate("/");
    toast.success("User has been logged in!");
    setLoading(false);
   } catch (error) {
    toast.error(error.message);
    setLoading(false);
   }
  }
  return (
    <div className='size mt-[6rem] text-center'>
        <h2 className='text-3x1'>Sign in with email</h2>
        <p className='w-full sm:w-[25rem] mx-auto py-[3em]'>
            Enter the email address associated with your account, and we'll send a magic link toyour inbox
        </p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-0.1'>
            <Input form={form} setForm={setForm} type="email" title="email"/>
            <Input form={form} setForm={setForm} type="password" title="password"/>
            <button 
            className={`px-4 py-1 text-md rounded-full bg-blue-500 text-white hover:bg-blue-700 w-fit mx-auto
              ${loading ? "opacity-50 pointer-events-none" : ""}
            `}>Sign In</button>
        </form>
        <button 
        onClick={( ) => setSignReq("")}
        className='mt-5 text-sm text-blue-500 hover:text-blue-800 flex items-center mx-auto'>
            <MdOutlineKeyboardArrowLeft/> All sign In Options
        </button>
    </div>
  )
}

export default SignIn