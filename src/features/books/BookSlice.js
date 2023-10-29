const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
    books: [
        {id: 1, title: "Love", author:"Abir Hasan"},
        {id: 2, title: "Hello", author:"Hasan"}
    ],
};



const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers:{
        showBook: (state) => state,
    }
});

export const {showBook} = booksSlice.actions;
export default booksSlice.reducer;