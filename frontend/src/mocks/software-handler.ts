import { http, HttpResponse } from 'msw';

const software = [
  {
    id: '1',
    name: 'Word',
  },
  {
    id: '2',
    name: 'Excel',
  },
];

const handlers = [
  http.get('/api/user/software', () =>
    HttpResponse.json({
      data: software,
    })
  ),
];

export default handlers;
