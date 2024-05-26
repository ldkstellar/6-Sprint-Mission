import React from 'react';
import NoInquiry from './NoInquiry';
import Comments from './Comments';
import '../style/BackButton.css';
import backImage from '../img/backImage.png';
import { Link, useNavigate } from 'react-router-dom';
import { Inquiry } from '../api/api';
const CommentsContainer = ({ inquiries }: { inquiries: Inquiry[] }) => {
  const navigation = useNavigate();
  const backButtonHandler = () => {
    navigation('/items');
  };
  const star = 0;

  if (inquiries.length === 0) {
    return <NoInquiry />;
  }
  return (
    <div>
      {inquiries.length === 0 ? (
        <NoInquiry />
      ) : (
        inquiries.map((element) => (
          <Comments key={element.id} element={element} />
        ))
      )}
      <div className='backBtnContainer'>
        <Link className='backBtnContainer-btn' to={'/items'}>
          목록으로 돌아가기
          <img
            className='backBtnContainer-image'
            src={backImage}
            alt='뒤로가기'
          />
        </Link>
      </div>
    </div>
  );
};

export default CommentsContainer;

