import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ sub: 'Bob Smith' });
  }),
];

export default handlers;
