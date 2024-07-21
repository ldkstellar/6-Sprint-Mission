import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import BestProducts from './BestProducts';
import { getProducts } from '../api/api';
import '../style/BestProduct.css';

const BestProductsContainer = ({ windowWidth }: { windowWidth: number }) => {
  const navigate = useNavigate();
  const query = `?orderBy=favorite`;
  const { data, isPending } = useQuery({
    queryKey: ['bestProudcts'],
    queryFn: () => getProducts(query),
  });
  const handleNavigateItemDetail = (id: number) => {
    navigate(`/items/${id}`);
  };

  if (!isPending && data) {
    let goodProducts = [];
    if (windowWidth < 1199 && windowWidth > 767) {
      goodProducts = [...data.slice(0, 2)];
    } else if (windowWidth < 767) {
      goodProducts = [...data.slice(0, 1)];
    } else {
      goodProducts = [...data.slice(0, 4)];
    }
    return (
      <BestProducts
        products={goodProducts}
        onClick={handleNavigateItemDetail}
      />
    );
  }
};

export default BestProductsContainer;

