import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    name: "editSlice",
    initialState: [],
    reducers: {
        //function to send the blog data to editblog
        sendtoEdit: (state, action) => {
            state.push(action.payload)
        }
    }

    })

    export const {sendtoEdit}=editSlice.actions
    export default editSlice.reducer

