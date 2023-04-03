import { rest } from 'msw';

export interface ProductResponse {
  id: number;
  name: string;
  image: string;
  stock: number;
  price: number;
  isPrime: boolean;
}

export interface ProductRquest {
  id: number;
  quantity: number;
}

export const ProductLists: ProductResponse[] = [
  {
    id: 1,
    name: '바나나',
    image: '🍌',
    price: 4000,
    stock: 10,
    isPrime: true,
  },
  {
    id: 2,
    name: '딸기',
    image: '🍓',
    price: 10000,
    stock: 5,
    isPrime: true,
  },
  {
    id: 3,
    name: '멜론',
    image: '🍈',
    price: 20000,
    stock: 6,
    isPrime: true,
  },
  {
    id: 4,
    name: '파인애플',
    image: '🍍',
    price: 5000,
    stock: 5,
    isPrime: true,
  },
  {
    id: 5,
    name: '복숭아',
    image: '🍑',
    price: 8000,
    stock: 10,
    isPrime: false,
  },
  {
    id: 6,
    name: '포도',
    image: '🍇',
    price: 6000,
    stock: 5,
    isPrime: false,
  },
  {
    id: 7,
    name: '수박',
    image: '🍉',
    price: 22000,
    stock: 2,
    isPrime: false,
  },
  {
    id: 8,
    name: '사과',
    image: '🍎',
    price: 4000,
    stock: 14,
    isPrime: false,
  },
  {
    id: 9,
    name: '토마토',
    image: '🍅',
    price: 2000,
    stock: 4,
    isPrime: false,
  },
];

export const handlers = [
  rest.get('/api/fruits', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ProductLists));
  }),
  rest.post('/api/purchase', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),
];

export default handlers;
