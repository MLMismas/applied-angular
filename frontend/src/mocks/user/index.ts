import { http, HttpResponse, delay } from 'msw';

const handlers = [
  http.get('/api/user', async () => {
    await delay(4000);
    return HttpResponse.json({ sub: 'Bob Smith' });
  }),
];

export default handlers;
