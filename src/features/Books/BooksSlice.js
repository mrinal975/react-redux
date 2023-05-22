import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Mrinal" },
    { id: 2, title: "Narsingdi", author: "Mallik" },
  ],
};
export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, actions) => {
      state.books.push(actions.payload);
    },
  },
});

export const { showBooks, addBook } = booksSlice.actions;

export default booksSlice.reducer;
