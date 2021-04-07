import axios from 'axios';
import { StatusCodes } from 'http-status-codes'
import supertest from 'supertest';

describe("API: Products", () => {

  describe("GET /products", () => {
    it('should return a list of products', async () => {
      const result = await axios('http://localhost:3000/products')
      expect(result.status).toBe(StatusCodes.OK);
    });

    it(`should return a list of products`, async () => {
      await supertest('http://localhost:3000')
        .get('/products')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(StatusCodes.OK)
        .send()
    });
  });

});
