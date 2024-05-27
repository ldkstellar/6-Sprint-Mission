import React, { useEffect, useState } from 'react';

import { getComments, getProduct, Product, Inquiry } from '../api/api';
import { useParams, useSearchParams } from 'react-router-dom';
import SpecificItem from './SpecificItem';

const SpecificItemContainer = () => {
  const { id } = useParams();
  const [specificItem, setSpecificItem] = useState<Product | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('limit=5');

  const getSpecificProduct = async () => {
    try {
      setIsLoading(true);
      const [productInfo, productComment] = await Promise.all([
        getProduct(id),
        getComments(`${id}/comments/?${searchParams.toString()}`),
      ]);
      setSpecificItem(productInfo);
      setInquiries(productComment);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'httpError') {
          window.alert(error.message);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSpecificProduct();
  }, [id]);

  if (!specificItem) {
    return <div>상품이 없습니다</div>;
  }

  return (
    <>
      {!isLoading && (
        <SpecificItem specificItem={specificItem} inquiries={inquiries} />
      )}
    </>
  );
};

export default SpecificItemContainer;

