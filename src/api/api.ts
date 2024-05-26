const URL = `https://panda-market-api.vercel.app/products/`;

export interface Product {
  createdAt: string;
  description: string;
  id: number;
  images: string[];
  name: string;
  favoriteCount: number;
  ownerId: number;
  price: number;
  tags: string[];
  updatedAt: string;
}
export interface Inquiry {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: { id: number; image: string; nickname: string };
}

const getProducts = async (searchParams = ''): Promise<Product[]> => {
  let response;
  try {
    response = await fetch(`${URL}?${searchParams}`, {
      method: 'GET',
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  if (!response.ok) {
    const error = new Error();
    error.name = `httpError`;
    error.message = `httpCode:${response.status}`;
    throw error;
  }
  const result = await response.json();
  return result.list;
};

const getProduct = async (searchParams = ''): Promise<Product> => {
  let response;
  try {
    response = await fetch(`${URL}${searchParams}`, {
      method: 'GET',
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error();
    error.name = `httpError`;
    error.message = `httpCode:${response.status}`;
    throw error;
  }
  const result = await response.json();
  return result;
};

const getComments = async (searchParams = ''): Promise<Inquiry[]> => {
  let response;
  try {
    response = await fetch(`${URL}${searchParams}`, {
      method: 'GET',
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  if (!response.ok) {
    const error = new Error();
    error.name = `httpError`;
    error.message = `httpCode:${response.status}`;
    throw error;
  }
  const result = await response.json();

  return result.list;
};

export { getProduct, getProducts, getComments };

