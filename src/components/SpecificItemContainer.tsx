import React, { useEffect, useState } from 'react';
import InquiryFormContainer from './InquiryFormContainer';
import CommentsContainer from './CommentsContainer';
import ProductIntroduce from './ProductIntroduce';
import '../style/item.css';
import { getComments, getProduct, Product, Inquiry } from '../api/api';
import { useParams, useSearchParams } from 'react-router-dom';

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
        <div className='itemContainer'>
          <ProductIntroduce specificItem={specificItem} />
          <InquiryFormContainer />
          <CommentsContainer inquiries={inquiries} />
        </div>
      )}
    </>
  );
};

export default SpecificItemContainer;

