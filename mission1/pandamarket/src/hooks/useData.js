import React from "react";
import { useEffect, useState } from "react";
const useData = () => {
  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/products", { method: "GET" })
      .catch(() => {
        window.alert("불러오기 실패");
      })
      .then((response) => response.text())
      .then((data) => {
        const result = JSON.parse(data);
        setValue(result.list);
      });
  }, []);
  const [value, setValue] = useState(undefined);
  return { value, setValue };
};

export default useData;

