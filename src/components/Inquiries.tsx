import React from 'react';
import NoInquiry from './NoInquiry';
import Comment from './Comments';
import '../style/BackButton.css';
import backImage from '../img/backImage.png';
import { useNavigate } from 'react-router-dom';
import { Inquiry } from '../api/api';
const Inquiries = ({ inquiryList }: { inquiryList: Inquiry[] }) => {
  const now = new Date();
  const navigation = useNavigate();
  const backButtonHandler = () => {
    navigation('/items');
  };
  if (inquiryList.length === 0) {
    return <NoInquiry />;
  }
  return (
    <div>
      {inquiryList.map((element) => (
        <Comment key={element.id} element={element} />
      ))}
      <div className='backBtnContainer'>
        <button className='backBtnContainer-btn' onClick={backButtonHandler}>
          목록으로 돌아가기
          <img
            className='backBtnContainer-image'
            src={backImage}
            alt='뒤로가기'
          />
        </button>
      </div>
    </div>
  );
};

export default Inquiries;

