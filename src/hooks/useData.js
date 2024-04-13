import React from "react";
import { useEffect, useState } from "react";
const useData = () => {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { value, setValue };
};

export default useData;

