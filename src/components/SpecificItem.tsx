import React from 'react';
import ProductIntroduce from './ProductIntroduce';
import InquiryFormContainer from './InquiryFormContainer';
import CommentsContainer from './CommentsContainer';
import { Inquiry, Product } from '../api/api';
import style from '../style/item.module.css';
const SpecificItem = ({
  specificItem,
  inquiries,
}: {
  specificItem: Product;
  inquiries: Inquiry[];
}) => {
  return (
    <div className={style['itemContainer']}>
      <ProductIntroduce specificItem={specificItem} />
      <InquiryFormContainer />
      <CommentsContainer inquiries={inquiries} />
    </div>
  );
};

export default SpecificItem;

