import React, { useState } from 'react'
import Input from '../../../utils/Input'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';



const SignUp = ({ setSignReq, setModal }) => {
  const navigate = useNavigate( );
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username : "",
    email : "",
    password : "",
    rePassword : "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault( );
    if(form[("username", "email", "password", "rePassword")] === "") {
      toast.error("All fields are required");
    }else if(form["password"] !== form["rePassword"]) {
      toast.error("Your passwords are not matching!");
      return;
    } else if (form["password"].length < 6){
      toast.error("your password must be longer than 6 characters!");
    } else {
      setLoading(true);
      const {user} = await createUserWithEmailAndPassword(
          auth, 
          form.email,
          form.password
        
        );

        const ref = doc(db, "users", user.uid);
        const userDoc = await getDoc(ref);

            if(!userDoc.exists( )) {
                await setDoc(ref, {
                    userId: user.uid,
                    username: form.username,
                    email: form.email,
                    userImg: "",
                    bio: "",
                });
                navigate("/");
                toast.success("User has been created!");
                setModal(false);
        }
        setLoading(false);
    }
  } 
  return (
    <div className='size mt-[6rem] text-center'>
        <h2 className='text-3x1'>Sign up with email</h2>
        <p className='w-full sm:w-[25rem] mx-auto py-[3em]'>
            Enter the email address associated with your account, and we'll send a magic link toyour inbox
        </p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-0.1'>
            <Input form={form} setForm={setForm} type="text" title="username"/>
            <Input form={form} setForm={setForm} type="email" title="email"/>
            <Input form={form} setForm={setForm} type="password" title="password"/>
            <Input form={form} setForm={setForm} type="password" title="rePassword"/>
            <button className={`px-4 py-1 text-md rounded-full bg-blue-500 text-white hover:bg-blue-700 w-fit mx-auto ${loading ? "opacity-50 pointer-events-none" : ""}`}>Sign Up</button>
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