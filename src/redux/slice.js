import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'

export const slice = createSlice({
  name: "slice",
  initialState: {
    selectedColor: "red",
    noteList: data,
    theme: localStorage.getItem('theme'),
    searchInput: "",
    confirmId: 0,
  },
  reducers: {
    pickColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    addNote: (state, action) => {
      state.noteList = [...state.noteList, action.payload];
    },
    deleteNote: (state, action) => {
      state.noteList = state.noteList.filter(note => note.id !== action.payload)      
    },
    changeTheme: (state, action) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload);
    },
    updateSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    toggleConfirm: (state, action) => {
      state.confirmId = action.payload
    },
  },
});

export const { pickColor, addNote, changeTheme, updateSearchInput, deleteNote, toggleConfirm } = slice.actions;
export default slice.reducer;
