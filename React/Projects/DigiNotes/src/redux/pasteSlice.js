import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState, 
    reducers:{
        addToPastes: (state, action)=>{
           const paste = action.payload;
        //     add a check if paste already exists
        const exists = state.pastes.some(item => item._id === paste._id)
        if(!exists){
            state.pastes.push(paste);
           localStorage.setItem('pastes', JSON.stringify(state.pastes))
        //    toast("Paste created successfullt!!!!")
            toast.success("Paste created successfully")
            // toast.error("Something went wrong!!!!")
        }else{
            toast.error("Paste already exists!");
        }
           
        },
        updateToPastes: (state,action)=>{
            const paste = action.payload;
            const index = state.pastes.findIndex((item)=> item._id === paste._id)
            if(index>=0){
                state.pastes[index] = paste;
                localStorage.setItem('pastes', JSON.stringify(state.pastes))
                toast.success("paste updated")
            }
        }, 
        deleteAllPastes:(state,action)=>{
            state.pastes = [];
            localStorage.removeItem('pastes');
        },
        deleteFromPastes:(state,action)=>{
            const pasteId = action.payload;
            const index  = state.pastes.findIndex((item)=> item._id === pasteId)
            if(index>=0){
                state.pastes.splice(index,1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes))
                toast.success("Paste deleted!!!")
            }
        }
    }
})

export const { addToPastes, updateToPastes,deleteFromPastes,deleteAllPastes } = pasteSlice.actions;

export default pasteSlice.reducer;