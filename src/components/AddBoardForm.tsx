import React from 'react';
import style from '@/styles/AddBoardForm.module.css';
const AddBoardForm = () => {
  return (
    <form className={style.formFrame}>
      <div className={style.registerFrame}>
        <p>게시글 쓰기</p>
        <button type='submit' className={style.registerBtn}>
          등록
        </button>
      </div>
      <p className={style.title}>*제목</p>
      <input
        type='text'
        className={style.titleInput}
        placeholder='제목을 입력해주세요'
      />
      <p className={style.content}>*내용</p>
      <input
        type='text'
        className={style.contentInput}
        placeholder='내용을 입력해주세요'
      />
      <p className={style.image}>이미지</p>

      <label htmlFor='file' className={style.imageRegister}>
        <p>+</p>
        <p>이미지 등록</p>
      </label>
      <input id='file' type='file' className={style.imageInput} />
    </form>
  );
};

export default AddBoardForm;

