import React, { useEffect, useState } from 'react';
import ItemIntroduce from '../components/ItemIntroduce';
import '../style/item.css';
import { getComments, getProduct } from '../api/api';
import { useParams, useSearchParams } from 'react-router-dom';

const SpecificItemPage = () => {
  const { id } = useParams();
  const [specificItem, setSpecificItem] = useState({});
  const [inquiryList, setInquiryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('limit=5');

  const getSpecificProduct = async () => {
    try {
      setIsLoading(true);
      const productInfo = await getProduct(id);
      const productComment = await getComments(
        `${id}/comments/?${searchParams.toString()}`
      );
      setInquiryList(productComment);
      setSpecificItem(productInfo);
    } catch (error) {
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
    <div className='itemContainer'>
      {isLoading || (
        <ItemIntroduce specificItem={specificItem} inquiryList={inquiryList} />
      )}
    </div>
  );
};

export default SpecificItemPage;

