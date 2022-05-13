import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookDTO } from '@dto/BookDTO';

interface BooksState {
  books: BookDTO[];
  loading: boolean;
  title: string;
}

interface BooksPayload {
  books: BookDTO[];
}

interface SearchByTitlePayload{
  title: string;
  page?: number;
}

const books = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: false,
    title: '',
  } as BooksState,
  reducers: {
    booksRequest: (state, action) => {
      state.loading = true;
    },
    booksSuccess: (state, action: PayloadAction<BooksPayload>) => {
      state.books = [...state.books, ...action.payload.books];
      state.loading = false;
    },
    booksFailure: (state) => {
      state.loading = false;
    },
    clearBooks: (state) => {
      state.books = [];
    },
    searchByTitle: (state, action: PayloadAction<SearchByTitlePayload>) => {
      state.loading = true;
    },
    searchByTitleSuccess: (state, action: PayloadAction<BooksPayload>) => {
      state.books = [...state.books, ...action.payload.books];
      state.loading = false;
    },
    searchByTitleFailure: (state) => {
      state.loading = false;
    },
    bookTitle:(state, action:PayloadAction<SearchByTitlePayload>) => {
      state.title = action.payload.title;
    }
  },
});

export const { booksRequest, booksSuccess, booksFailure, clearBooks, searchByTitle, searchByTitleSuccess, searchByTitleFailure, bookTitle } =
  books.actions;
export default books.reducer;
