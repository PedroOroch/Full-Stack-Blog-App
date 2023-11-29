import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { LiaEditSolid } from 'react-icons/lia';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Search from './Search';
import Modal from '../../../utils/Modal';
import UserModal from './UserModal';

const HomeHeader = () => {
  const [modal, setModal] = useState(false);


  console.log(setModal); // Use `modal` em vez de `setModal` aqui
  const hidden = modal ? "visible opacity-100" : "invisible opacity-0"

  return (
    <header className='border-b border-gray-200'>
      <div className='size h-[60px] flex items-center justify-between'>
        {/* left side */}
        <div className='flex items-center gap-3'>
          <Link to={'/'}>
            <span className='text-4xl text-blue-500'>
              <FaReact />
            </span>
          </Link>
          <Search />
        </div>
        {/* right side */}
        <div className='flex items-center gap-3 sm:gap-7'>
          <Link to='/write' className='hidden md:flex items-center gap-1 text-gray-500'>
            <span className='text-3xl'>
              <LiaEditSolid />
            </span>
            <span className='text-sm mt-2'>Write</span>
          </Link>
          <span className='text-3xl text-gray-500 cursor-pointer'>
            <IoMdNotificationsOutline />
          </span>
          <div className='flex items-center relative'>
            <img
              onClick={( ) => setModal(true)}
              className='w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer'
              src='/profile.png'
              alt='profile-img'
            />
            <span onClick={( ) => setModal(true)} className='text-gray-500 cursor-pointer'>
              <MdKeyboardArrowDown />
            </span>
            <Modal modal={modal} setModal={setModal} hidden={hidden}>
              <div className={`${modal ? 'visible opacity-100%' : 'invisible opacity-0'} transition-all duration-100`}>
                <UserModal />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;