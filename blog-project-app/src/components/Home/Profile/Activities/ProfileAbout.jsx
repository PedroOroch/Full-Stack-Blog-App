import React from 'react'

const ProfileAbout = ({getUserData, setEditModal}) => {
  return (
    <div className='w-full'>
        <p className='text=2x1 first-letter:uppercase'>
          {getUserData?.bio || getUserData?.username + " Has no bio"}
        </p>
        <div className='text-right'>
          <button
            onClick={( ) => setEditModal(true)} 
            className='border border-black py-2 px-5 rounded-full text-black mt-[3rem] hover:bg-black hover:text-white'>Edit</button>

        </div>
    </div>
  )
}

export default ProfileAbout