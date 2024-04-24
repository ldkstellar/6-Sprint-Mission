const URL = `https://panda-market-api.vercel.app/products`;

export const getProducts = async (searchParams = "") => {
  const response = await fetch(`${URL}${searchParams}`, {
    method: "GET",
  });

  if (!response.ok) {
    if (response.text() === "") {
      return console.error(response.status);
    }
    console.error(response.text());
  }
  const result = await response.json();

  return result.list;
};

