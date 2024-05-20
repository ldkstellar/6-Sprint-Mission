import React, { useEffect, useState } from 'react';
import InquiryFormContainer from './InquiryFormContainer';
import CommentsContainer from './CommentsContainer';
import Introduce from './Introduce';
import '../style/item.css';
import { getComments, getProduct } from '../api/api';
import { useParams, useSearchParams } from 'react-router-dom';

const SpecificItemContainer = () => {
  const { id } = useParams();
  const [specificItem, setSpecificItem] = useState({});
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    limit: 5,
  });

  const getSpecificProduct = async () => {
    try {
      setIsLoading(true);
      const [productInfo, productComment] = await Promise.all([
        getProduct(id),
        getComments(`${id}/comments/?${searchParams.toString()}`),
      ]);
      setInquiries(productComment);
      setSpecificItem(productInfo);
    } catch (error) {
      if (error.name === 'httpError') {
        window.alert(error.message);
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
    !isLoading && (
      <div className='itemContainer'>
        <Introduce specificItem={specificItem} />
        <InquiryFormContainer />
        <CommentsContainer inquiries={inquiries} />
      </div>
    )
  );
};

export default SpecificItemContainer;

