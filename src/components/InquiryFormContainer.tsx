import React, { useState } from 'react';
import InquiryForm from './InquiryForm';

type HTML = HTMLInputElement | HTMLTextAreaElement;
type ChangeHandler = (e: React.ChangeEvent<HTML>) => void;

export interface Inquiry {
  inquiry: string;
  textChangeHandler: ChangeHandler;
  onSubmitHandler: () => void;
}
const InquiryFormContainer = () => {
  const [inquiry, setInquiry] = useState('');

  const textChangeHandler: ChangeHandler = (e) => {
    setInquiry(e.target.value);
  };

  const onSubmitHandler = () => {
    console.log(inquiry);
  };
  return (
    <InquiryForm
      inquiry={inquiry}
      textChangeHandler={textChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default InquiryFormContainer;

