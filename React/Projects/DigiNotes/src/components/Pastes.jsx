import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromPastes } from '../redux/pasteSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Pastes = () => {
  const pastes = useSelector((state)=> state.paste.pastes)
  console.log(pastes)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch();
  const filteredData = pastes.filter(
    (paste)=> paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleDelete(pasteId){
    dispatch(deleteFromPastes(pasteId))
  }

  return (
    <div>
      <input 
        type="search"
        placeholder='Search Paste'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}

      />
<div className='flex flex-col gap-5'>
    {
      filteredData.length>0 && filteredData.map(
        (paste) => {
          return (
            <div className='flex gap-8 border-2 p-2' key={paste?._id}>
              <div className='flex flex-col'>
                {paste.title}
              
                {paste.content}
              </div>
              <div className='flex flex-row gap-3'>
                <button  className='bg-red-500 rounded-md p-1'><Link to={`/?pasteId=${paste?._id}`}>Edit</Link></button>
                <button onClick={()=> handleDelete(paste?._id)} className='bg-red-500 rounded-md p-1'>Delete</button>
                <button className='bg-red-500 rounded-md p-1'>share</button>
                <button className='bg-red-500 rounded-md p-1'><Link to={`/pastes/${paste?._id}`}> view </Link></button>
                <button onClick={() => {
                  navigator.clipboard.writeText(paste?.content)
                   toast.success("Copied")
                   }} className='bg-red-500 rounded-md p-1'>Copy</button>
              </div>
              
            </div>
          )
        }
      )
    }

</div>

    </div>
  )
}

export default Pastes