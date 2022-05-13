import callBaseApi from '../base';

const bookApi = {
  listBooks: (page: number, accessToken: string) =>
    callBaseApi({
      title: 'Books - getBooks',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      endpoint: `/books?page=${page} `,
    }),
  searchByTitle:(data: {page: string; title: string}, accessToken: string) => callBaseApi({
    title: 'Books - searchByTitle',
    method: 'GET',
    headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    endpoint: `/books?page=${data.page}&title=${data.title}`,
  }),
};

export { bookApi };
