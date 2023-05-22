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
    deleteBook: (state, actions) => {
      const id = actions.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((state) => state.id == id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;

export default booksSlice.reducer;
