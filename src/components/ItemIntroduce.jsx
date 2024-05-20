import React, { useEffect, useState } from 'react';
import InquiryContainer from './CommentsContainer';
import InquiryForm from './InquiryForm';
import InquiryFormContainer from './InquiryFormContainer';
import Introduce from './Introduce';

const ItemIntroduce = ({ specificItem, inquiries }) => {
  return (
    <>
      <Introduce specificItem={specificItem} />
      <InquiryFormContainer />
      <InquiryContainer inquiries={inquiries} />
    </>
  );
};

export default ItemIntroduce;

