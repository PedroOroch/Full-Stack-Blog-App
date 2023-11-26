import React, { useState } from 'react'
import Modal from '../../../utils/Modal'
import { auth } from './../../../firebase/firebase';
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import SignIn from './SignIn';
import SignUp from './SignUp';



const Auth = ({ modal, setModal}) => {
    const [createUser, setCreateUser] = useState(false);
    const [signReq, setSignReq] = useState("");
   

    const hidden = modal ? "visible opacity-100" : "invisible opacity-0"
  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>

        <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows ${hidden} transition-all duration-500`}>
            <button 
            onClick={( ) => setModal(false)}
            className='absolute top-8 right-8 text-2x1 hover:opacity-50'><FaTimes /></button>
            <div className='flex flex-col justify-center items-center gap-[3rem]'>
                
                {signReq === "" ? (  <>
                    <h2 className='text-2x1 pt-[5rem]'>{createUser ? "Register" : "Welcome Back"}</h2>
                    <div className='flex flex-col gap-4 w-fit mx-auto'>
                        <Button icon={<FcGoogle className='text-xl' />} text={`${createUser ? "Sign Up" : "Sign In"} With Google`} />

                        <Button icon={<MdFacebook className='text-xl text-blue-600' />} text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`} /> 

                        <Button
                            click={( ) => setSignReq( createUser ? "sign-up" : "sign-in" )}
                            icon={<AiOutlineMail 
                            className='text-xl' />} 
                            text={`${createUser ? "Sign Up" : "Sign In"} With Email`} />  
                    </div>
                    <p>
                        {createUser ? "Already have an account?" : "No Account?"} 
                        <button
                        onClick={( ) => setCreateUser(!createUser)}
                        className='text-blue-500 hover:text-blue-900 font-bold ml-1'>{createUser ? "Sign In" : "Create One!"}</button>

                    </p>
                </>) : signReq === "sign-in" ? (
                    <SignIn setSignReq={setSignReq} />
                ) : signReq === "sign-up" ? (
                    <SignUp setSignReq={setSignReq}/>
                ) : null}
                <p className='md:w-[30rem] mx-auto text-center text-sm mb-[3rem] pl-5 pr-5'>
                    Click "Sign In" to agree to Medium's Terms of Service and acknowledge that Medium's Privacy Policy applies to you
                </p>

            </div>
        </section>

    </Modal>
  )
}

export default Auth;

const Button = ( {icon, text, click} ) => {
    // onClick={click}
    return (
        <button 
        onClick={click}
        className='flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full'>
            {icon} {text}
        </button>
    )
}