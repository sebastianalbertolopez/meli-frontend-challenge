import supertest from 'supertest';

import { app, server } from '../server';

const api = supertest(app);

describe('productsController', () => {
  afterAll(() => {
    server.close();
  });

  const query = 'notebook';

  test('products should be returned as JSON', async () => {
    await api
      .get(`/api/items?q=${query}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('list endpoint should return four items, categories array and author', async () => {
    const { body } = await api.get(`/api/items?q=${query}`);

    expect(body).toHaveProperty('items');
    expect(body).toHaveProperty('categories');
    expect(body).toHaveProperty('author');

    const { items, categories, author } = body;

    expect(items.length).toBe(4);
    expect(categories).toBeArray();
    expect(author).toStrictEqual({ name: 'Sebastián', lastname: 'López' });
  });

  test('item details endpoint should return item and author', async () => {
    const { body } = await api.get('/api/items/MLA932471563');

    expect(body).toHaveProperty('item');
    expect(body).toHaveProperty('author');
  });

  test("should return a 404 if the product doesn't exist", async () => {
    await api.get('/api/items/test').expect(404);
  });
});
