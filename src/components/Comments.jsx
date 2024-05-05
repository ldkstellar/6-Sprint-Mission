import React from 'react';
import profile from '../img/profileBig.png';
import '../style/Comments.css';
import moreBtn from '../img/moreBtn.png';
import { getCreatedTime } from '../util/getCreatedTime';
const Comments = ({ element }) => {
  const { day, hours } = getCreatedTime(element);

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

