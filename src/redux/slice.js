import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'slice',
    initialState:{
        selectedColor: 'red',
        noteList: [
        ],
    },
    reducers: {
        pickColor: (state, action) => {
            state.selectedColor = action.payload;
        },
        addNote: (state, action) => {
            state.noteList = [...state.noteList, action.payload]
        },        
    }
})

export const {pickColor, addNote} = slice.actions;
export default slice.reducer;