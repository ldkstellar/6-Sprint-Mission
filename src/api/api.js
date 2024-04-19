export const getData = async (page, pageSize, orderBy = "recent") => {
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("요청을 받지 못하였습니다");
  }
  const result = await response.json();

  return result;
};

