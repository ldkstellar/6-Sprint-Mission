import React from 'react';
import '../style/BestProduct.css';
import { getProducts } from '../api/api';
import BestProducts from './BestProducts';
import { useQuery } from '@tanstack/react-query';
const BestProductsContainer = ({ windowWidth }: { windowWidth: number }) => {
  const query = `?orderBy=favorite`;
  const { data, isPending } = useQuery({
    queryKey: ['bestProudcts'],
    queryFn: () => getProducts(query),
  });

  if (!isPending && data) {
    let goodProducts = [];
    if (windowWidth < 1199 && windowWidth > 767) {
      goodProducts = [...data.slice(0, 2)];
    } else if (windowWidth < 767) {
      goodProducts = [...data.slice(0, 1)];
    } else {
      goodProducts = [...data.slice(0, 4)];
    }
    return <BestProducts products={goodProducts} />;
  }
};

export default BestProductsContainer;

