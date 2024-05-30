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
const handleUnknownError = (error: unknown) => {
  if (error instanceof Error) {
    window.alert(`Error: ${error.message}`);
  } else {
    window.alert('Unknown error type');
  }
};

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
    const httpError = await response.json();
    const error = new Error(httpError.message);
    error.name = `httpError`;
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
    const httpError = await response.json();
    const error = new Error(httpError.message);
    error.name = `httpError`;
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
    const httpError = await response.json();
    const error = new Error(httpError.message);
    error.name = `httpError`;
    throw error;
  }
  const result = await response.json();

  return result.list;
};

export { getProduct, getProducts, getComments, handleUnknownError };

