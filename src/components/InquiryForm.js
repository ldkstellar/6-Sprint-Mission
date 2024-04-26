import React, { useState } from "react";
import "../style/InquiryForm.css";
const PLACE_HOLD =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";
const InquiryForm = () => {
  const [inquiry, setInquiry] = useState("");
  const textChangeHandler = (e) => {
    setInquiry(e.target.value);
  };
  const onSubmitHandler = () => {
    console.log(inquiry);
  };
  return (
    <form className="inquiryForm" onSubmit={onSubmitHandler}>
      <p className="inquiryForm-name">문의하기</p>
      <input
        className="inquiryForm-input"
        placeholder={PLACE_HOLD}
        value={inquiry}
        onChange={textChangeHandler}
      ></input>
      <button type="submit" className="inquiryForm--btn">
        등록
      </button>
    </form>
  );
};

export default InquiryForm;

