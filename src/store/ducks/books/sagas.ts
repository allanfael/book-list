import { put, takeLatest, select, all } from 'redux-saga/effects';

import { bookApi } from '@services/ioasys-api/books';

import { booksSuccess, booksFailure, searchByTitleSuccess, searchByTitleFailure } from './';

import { BookDTO } from '@dto/BookDTO';


// Token
const userAccessToken = (state) => state.auth.accessToken;

function* booksRequest(action) {
  try {
    const accessToken = yield select(userAccessToken);
    const response = yield bookApi.listBooks(action.payload, accessToken);
    const { data } = response;

    const books = data.data.map((book: BookDTO) => {
      return {
        id: book.id,
        title: book.title,
        description: book.description,
        authors: book.authors,
        pageCount: book.pageCount,
        imageUrl: book.imageUrl,
        category: book.category,
        ibsn10: book.ibsn10,
        ibsn13: book.ibsn13,
        language: book.language,
        publisher: book.publisher,
        published: book.published,
      };
    });

    yield put(booksSuccess({ books }));
  } catch (error) {
    yield put(booksFailure());
  }
}

function* searchByTitle(action) {
  try {
    const accessToken = yield select(userAccessToken);
    const response = yield bookApi.searchByTitle(action.payload, accessToken);
    const { data } = response;

    const books = data.data.map((book: BookDTO) => {
      return {
        id: book.id,
        title: book.title,
        description: book.description,
        authors: book.authors,
        pageCount: book.pageCount,
        imageUrl: book.imageUrl,
        category: book.category,
        ibsn10: book.ibsn10,
        ibsn13: book.ibsn13,
        language: book.language,
        publisher: book.publisher,
        published: book.published,
      };
    });

    yield put(searchByTitleSuccess({ books }));
  } catch (error) {
    yield put(searchByTitleFailure());
  }
}

export default all([
  takeLatest('books/booksRequest', booksRequest),
  takeLatest('books/searchByTitle', searchByTitle),
]);
