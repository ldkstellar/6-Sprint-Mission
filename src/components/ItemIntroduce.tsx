import React from 'react';
import { Inquiry, Product } from '../api/api';
import InquiryContainer from './CommentsContainer';

import InquiryFormContainer from './InquiryFormContainer';
import Product-detail from './ProductIntroduce';

const ItemIntroduce = ({
  specificItem,
  inquiries,
}: {
  specificItem: Product;
  inquiries: Inquiry[];
}) => {
  return (
    <>
      <Product-detail specificItem={specificItem} />
      <InquiryFormContainer />
      <InquiryContainer inquiries={inquiries} />
    </>
  );
};

export default ItemIntroduce;

