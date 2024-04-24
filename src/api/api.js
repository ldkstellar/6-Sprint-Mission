export const getData = async (searchParams = "") => {
  console.log(searchParams);
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${searchParams}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    if (response.text() === "") {
      return console.error(response.status);
    }
    console.error(response.text());
  }
  const result = await response.json();
  return result;
};

export const getProducts = async (paramsString) => {
  const searchParams = new URLSearchParams(paramsString);
  if (searchParams.has("page", "pagesize", "orderby")) {
    return getData(paramsString);
  }
  return getData();
};

