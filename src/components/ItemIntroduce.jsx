import React, { useEffect, useState } from 'react';
import InquiryContainer from './CommentsContainer';
import InquiryForm from './InquiryForm';
import InquiryFormContainer from './InquiryFormContainer';
import Introduce from './Introduce';

const ItemIntroduce = ({ specificItem, inquiryList }) => {
  return (
    <>
      <Introduce specificItem={specificItem} />
      <InquiryFormContainer />
      <InquiryContainer inquiryList={inquiryList} />
    </>
  );
};

export default ItemIntroduce;

