import React, { useState } from 'react';
import InquiryForm from './InquiryForm';

const InquiryFormContainer = () => {
  const [inquiry, setInquiry] = useState('');
  const textChangeHandler = (e) => {
    setInquiry(e.target.value);
  };

  const onSubmitHandler = () => {
    console.log(inquiry);
  };
  return (
    <InquiryForm
      inquiry={inquiry}
      setInquiry={setInquiry}
      textChangeHandler={textChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default InquiryFormContainer;
