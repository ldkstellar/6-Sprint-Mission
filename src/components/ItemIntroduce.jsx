import React, { useEffect, useState } from 'react';
import InquiryContainer from './CommentsContainer';
import InquiryForm from './InquiryForm';
import InquiryFormContainer from './InquiryFormContainer';
import ProductIntroduce from './ProductIntroduce';

const ItemIntroduce = ({ specificItem, inquiries }) => {
  return (
    <>
      <ProductIntroduce specificItem={specificItem} />
      <InquiryFormContainer />
      <InquiryContainer inquiries={inquiries} />
    </>
  );
};

export default ItemIntroduce;

