import React, { useEffect, useState } from "react";
import InquiryContainer from "./InquiryContainer";
import IntroduceContainer from "./IntroduceContainer";

const ItemIntroduce = ({ specificItem }) => {
  return (
    <>
      <IntroduceContainer specificItem={specificItem} />

      <InquiryContainer />
    </>
  );
};

export default ItemIntroduce;

