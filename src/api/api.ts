export interface Products {}
export interface Product {
  createdAt?: string;
  description?: string;
  id?: number;
  images?: string;
  name?: string;
  favoriteCount?: number;
  ownerId?: number;
  price?: number;
  tags?: string[];
  updatedAt?: string;
}

export interface Comments {}

const URL = `https://panda-market-api.vercel.app/products/`;

const getProducts = async (searchParams = '') => {
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

const getProduct = async (searchParams = '') => {
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
  const result: Product = await response.json();
  return result;
};

const getComments = async (searchParams = '') => {
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

