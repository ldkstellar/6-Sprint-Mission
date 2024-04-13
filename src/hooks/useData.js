import React from "react";
import { useEffect, useState } from "react";
const useData = () => {
  const getData = async () => {
    try {
      const response = await fetch(
        "https://panda-market-api.vercel.app/products",
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setValue(result.list);
    } catch (error) {
      window.alert("불러오기 실패");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [value, setValue] = useState([]);
  return { value, setValue };
};

export default useData;

