import React from 'react';
import Button from './Button';
import '../style/RegisterForm.css';
import Tag from './Tag';

const RegisterForm = ({
  tagList,
  registerTag,
  productData,
  onChange,
  isFormFilled,
  previewImage,
  handleSubmit,
  handleKey,
  removeImage,
  removeTagItems,
}) => {
  return (
    <>
      <form
        className='formContainer'
        onSubmit={handleSubmit}
        onKeyDown={handleKey}
      >
        <div className='header'>
          <h2>상품등록하기</h2>
          <button
            disabled={!isFormFilled}
            type='submit'
            className={`submitBtn ${isFormFilled ? 'on' : 'off'}`}
          >
            등록
          </button>
        </div>

        <div className='productImage'>
          <p className='productImageTitle'>상품 이미지</p>
          <div className='filePreview'>
            <label htmlFor='fileInput' className='imageRegister'>
              <p>+</p>
              <p>이미지등록</p>
            </label>
            <input
              type='file'
              id='fileInput'
              name='file'
              onChange={onChange}
            ></input>
            {previewImage && (
              <div className='previewImageBox'>
                <Button
                  width={20}
                  height={20}
                  type='cancel'
                  onClick={removeImage}
                >
                  X
                </Button>
                <img className='previewImage' src={previewImage} />
              </div>
            )}
          </div>
        </div>

        <div className='productName'>
          <p>상품명</p>
          <input
            type='text'
            name='title'
            placeholder='상품명을 입력해주세요'
            value={productData.productName}
            onChange={onChange}
          />
        </div>

        <div className='productIntroduce'>
          <p>상품 소개</p>
          <input
            type='text'
            name='introduce'
            placeholder='상품소개를 입력해주세요'
            onChange={onChange}
            value={productData.productIntroduce}
          />
        </div>

        <div className='productPrice'>
          <p>판매가격</p>
          <input
            type='number'
            name='price'
            placeholder='판매 가격을 입력해주세요'
            value={productData.productPrice}
            onChange={onChange}
          />
        </div>

        <div className='productTag'>
          <p>태그</p>
          <input
            placeholder='태그를 입력해주세요'
            name='tag'
            value={productData.productTag}
            onChange={onChange}
            onKeyUp={registerTag}
          />
        </div>

        <div className='tagList'>
          {tagList.map((element) => (
            <Tag
              key={element.tagId}
              name={element.name}
              tagId={element.tagId}
              onclick={removeTagItems}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

