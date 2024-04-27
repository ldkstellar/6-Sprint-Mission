import React from 'react';
import profile from '../img/profileBig.png';
import '../style/Comments.css';
import moreBtn from '../img/moreBtn.png';

const Comments = ({ now, element }) => {
  const createdTime = () => {
    const before = new Date(element.createdAt);
    const time = now - before;
    const timeDifferenceInSeconds = Math.floor(time / 1000);
    // 초를 시, 분, 초로 변환
    const hours = Math.floor((timeDifferenceInSeconds % 86400) / 3600);
    const day = Math.floor(timeDifferenceInSeconds / 86400);
    return { day: day, hours: hours };
  };

  const { day, hours } = createdTime();

  return (
    <div className='commentContainer'>
      <p className='commentContainer-comment'>{element.content}</p>
      <div className='commentContainer__frame'>
        <div className='commentContainer-profile'>
          <img src={element.writer.image}></img>
          <div className='commentContainer-info'>
            <p>{element.writer.nickname}</p>
            <p>
              {day}일{hours}시간
            </p>
          </div>
        </div>
        <button className='commentContainer__frame_btn'>
          <img className='commentContainer__frame_btn--img ' src={moreBtn} />
        </button>
      </div>
    </div>
  );
};

export default Comments;

