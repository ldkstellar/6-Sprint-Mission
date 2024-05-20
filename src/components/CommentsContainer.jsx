import React from 'react';
import NoInquiry from './NoInquiry';
import Comments from './Comments';
import '../style/BackButton.css';
import backImage from '../img/backImage.png';
import { useNavigate } from 'react-router-dom';
const CommentsContainer = ({ inquiries }) => {
  const navigation = useNavigate();
  const backButtonHandler = () => {
    navigation('/items');
  };

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

export default CommentsContainer;

