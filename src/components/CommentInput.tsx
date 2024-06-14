import React from 'react';
import style from '@/styles/CommentInput.module.css';
const CommentInput = () => {
  return (
    <div className={style.commentFrame}>
      <p className={style.comment}>댓글 달기</p>
      <input
        className={style.commentInput}
        placeholder='댓글을 입력해주세요.'
      />
      <button className={style.registerButton}>등록</button>
    </div>
  );
};

export default CommentInput;

