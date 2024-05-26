import React, { useEffect, useState } from 'react';
import ItemIntroduce from '../components/ItemIntroduce';
import '../style/item.css';
import { getComments, getProduct } from '../api/api';
import { useParams, useSearchParams } from 'react-router-dom';

const SpecificItemPage = () => {
  const { id } = useParams();
  const [specificItem, setSpecificItem] = useState({});
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('limit=5');
  useEffect(() => {
    console.log(specificItem);
  }, []);

  const getSpecificProduct = async () => {
    try {
      setIsLoading(true);
      const productInfo = await getProduct(id);
      const productComment = await getComments(
        `${id}/comments/?${searchParams.toString()}`
      );
      console.log(productInfo);

      setInquiries(productComment);
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
      {!isLoading && (
        <ItemIntroduce specificItem={specificItem} inquiries={inquiries} />
      )}
    </div>
  );
};

export default SpecificItemPage;

