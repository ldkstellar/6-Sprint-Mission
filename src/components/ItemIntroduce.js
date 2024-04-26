import React, { useEffect, useState } from "react";
import InquiryContainer from "./InquiryContainer";
import InquiryForm from "./InquiryForm";
import IntroduceContainer from "./IntroduceContainer";

const ItemIntroduce = ({ specificItem }) => {
  return (
    <>
      <IntroduceContainer specificItem={specificItem} />
      <InquiryForm />
      <InquiryContainer />
    </>
  );
};

export default ItemIntroduce;

