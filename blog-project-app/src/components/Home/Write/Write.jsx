import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import Preview from './Preview';
import { Blog } from '../../../Context/Context';

const Write = () => {
  const [desc, setDesc] = useState("")
  const { publish } = Blog( );

  const hidden = publish ? "visible opacity-100" : "invisible opacity-0";
  console.log(publish);
  return (
    <section className='w-[90%] md:w-[90%] lg:w-[60%] mx-auto py-[3rem]'>
        <input 
          type="text"
          placeholder='Title'
          className='text-4xl outline-none w-full' 
          />
          <ReactQuill
              theme="bubble"
              value={desc}
              onChange={setDesc}
              placeholder='Tell your Story...'
              className='write my-5'
            />

            <div>
              {/* <Preview className={`${publish ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-200 hidden`} hidden={hidden} /> */}
            </div>
    </section>
  )
}

export default Write