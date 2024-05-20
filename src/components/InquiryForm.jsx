import React, { useState } from 'react';
import '../style/InquiryForm.css';
let PLACE_HOLD =
  '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.';
const InquiryForm = ({ inquiry, onSubmitHandler, textChangeHandler }) => {
  return (
    <form className='inquiryForm' onSubmit={onSubmitHandler}>
      <p className='inquiryForm__name'>문의하기</p>
      <textarea
        className='inquiryForm__input'
        placeholder="'개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'"
        value={inquiry}
        onChange={textChangeHandler}
      />
      <button
        type='submit'
        disabled={!inquiry}
        className={`inquiryForm__btn ${inquiry ? 'inquiryForm__btn--on' : ''}`}
      >
        등록
      </button>
    </form>
  );
};

export default InquiryForm;

