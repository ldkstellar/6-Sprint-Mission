const URL = `https://panda-market-api.vercel.app/products/`;
export const getProducts = async (searchParams = "") => {
  const response = await fetch(`${URL}${searchParams}`, {
    method: "GET",
  });
  if (!response.ok) {
    if (response.status === "") {
      return console.error(response.status);
    }
    console.error(response.text());
  }
  const result = await response.json();

  return result.list;
};

export const getProduct = async (searchParams = "") => {
  const response = await fetch(`${URL}${searchParams}`, {
    method: "GET",
  });
  if (!response.ok) {
    if (response.statusText === "") {
      return console.error(response.status);
    }
    console.error(response.text());
  }
  const result = await response.json();

  return result;
};

export const getComments = async (searchParams = "") => {
  const response = await fetch(`${URL}${searchParams}`, {
    method: "GET",
  });
  if (!response.ok) {
    if (response.statusText === "") {
      return console.error(response.status);
    }
    console.error(response.text());
  }
  const result = await response.json();
  return result.list;
};

