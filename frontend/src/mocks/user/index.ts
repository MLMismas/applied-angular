import { http, HttpResponse, delay } from 'msw';

const handlers = [
  http.get('/api/user', async () => {
    return HttpResponse.json({ sub: 'Bob Smith' });
  }),
];

export default handlers;
