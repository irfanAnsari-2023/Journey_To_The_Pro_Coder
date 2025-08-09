import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

const {id} = useParams();

const allPastes = useSelector((state) => state.paste?.pastes || []);
const paste = allPastes.find((p)=> String(p._id) === String(id))
if (!paste) {
  return <div>Paste not found or still loading...</div>;
}
console.log(paste)

  return (
    <div>
       <div>
        hello
        <input className='p-2 bg-white' 
          placeholder='Enter Your Title'
          type="text" 
          value={paste.title || ""}  
          disabled
          onChange={(e)=> setTitle(e.target.value)}/>

        {/* <button onClick={createPaste}>
          {
            pasteId ? "Update My Paste" : "Create My Paste"
          }  
        </button> */}
        <div>
          <textarea
            value={paste.content || ""}
            placeholder="Enter your content here..."
            rows={20}
            cols={50}
            disabled
            onChange={(e)=> setContent(e.target.value)}
            />
          
        </div>
    </div>
    </div>
  )
}

export default ViewPaste