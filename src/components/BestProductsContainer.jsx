import React, { useState, useEffect } from 'react';
import '../style/BestProduct.css';
import { getProducts } from '../api/api';
import BestProducts from './BestProducts';
const BestProductsContainer = ({ windowWidth }) => {
  const [bestProducts, setBestProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getBestProductsData = async () => {
    try {
      setIsLoading(true);
      const query = `?orderBy=favorite`;
      const result = await getProducts(query);
      setBestProduct(result);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getBestProductsData();
  }, []);

  let goodProducts = [];

  if (windowWidth < 1199 && windowWidth > 767) {
    goodProducts = [...bestProducts.slice(0, 2)];
  } else if (windowWidth < 767) {
    goodProducts = [...bestProducts.slice(0, 1)];
  } else {
    goodProducts = [...bestProducts.slice(0, 4)];
  }

  if (isLoading) {
    return <div>베스트상품 로딩중</div>;
  }
  return <BestProducts goodProducts={goodProducts} />;
};

export default BestProductsContainer;

