import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {

    const [title, setTitle] = useState('')
    const [content,setContent] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPaste = useSelector((state)=> state.paste.pastes)

    function createPaste(){
      const paste = {
        _id: pasteId || Date.now().toString(),
        title: title,
        content: content,
      }

      if(pasteId){
      dispatch(updateToPastes(paste))
    }else{
      dispatch(addToPastes(paste))
    }
//  after creation and updation clearing the things
    setTitle('');
    setContent('');
    setSearchParams({});

    }
    useEffect(()=>{
      if(pasteId){
        const paste = allPaste.find((p)=>p._id === pasteId);
        setTitle(paste.title)
        setContent(paste.content)
      }
      
    },[pasteId])
    

  return (
    <div>
        hello
        <input className='p-2 bg-white' placeholder='Enter Your Title' type="text" value={title}  onChange={(e)=> setTitle(e.target.value)}/>

        <button onClick={createPaste}>
          {
            pasteId ? "Update My Paste" : "Create My Paste"
          }  
        </button>
        <div>
          <textarea
            value={content}
            placeholder="Enter your content here..."
            rows={20}
            cols={50}
            onChange={(e)=> setContent(e.target.value)}
            />
          
        </div>
    </div>
  )
}

export default Home