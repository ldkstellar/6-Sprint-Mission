import React from 'react';

import style from '../style/RegisterForm.module.css';
import Tag from './Tag';

export interface TagIdData {
  name: string;
  tagId: number;
}

export interface ProductData {
  image: File | null;
  productName: string;
  productIntroduce: string;
  productPrice: string;
  productTag: TagIdData[];
}

interface RegisterFormData {
  tagList: TagIdData[];
  tagName: string;
  handleKey: (e: React.KeyboardEvent<HTMLFormElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: () => void;
  removeTagItems: (id: number) => void;
  registerTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isFormFilled: boolean;
  previewImage: string;
  productData: ProductData;
}
const RegisterForm = ({
  tagList,
  tagName,
  registerTag,
  productData,
  onChange,
  isFormFilled,
  previewImage,
  handleSubmit,
  handleKey,
  removeImage,
  removeTagItems,
}: RegisterFormData) => {
  return (
    <>
      <form
        className={style['formContainer']}
        onSubmit={handleSubmit}
        onKeyDown={handleKey}
      >
        <div className={style['header']}>
          <h2>상품등록하기</h2>
          <button
            disabled={!isFormFilled}
            type='submit'
            className={`${style['submitBtn']} ${
              isFormFilled ? style['on'] : style['off']
            }`}
          >
            등록
          </button>
        </div>

        <div className={style['productImage']}>
          <p className={style['productImageTitle']}>상품 이미지</p>
          <div className={style['filePreview']}>
            <label htmlFor='fileInputId' className={style['imageRegister']}>
              <p>+</p>
              <p>이미지등록</p>
            </label>
            <input
              id='fileInputId'
              className={style['fileInput']}
              type='file'
              name='file'
              onChange={onChange}
            ></input>
            {previewImage && (
              <div className={style['previewImageBox']}>
                <button onClick={removeImage}>X</button>
                <img className={style['previewImage']} src={previewImage} />
              </div>
            )}
          </div>
        </div>

        <div className={style['productName']}>
          <p>상품명</p>
          <input
            type='text'
            name='title'
            placeholder='상품명을 입력해주세요'
            value={productData.productName}
            onChange={onChange}
          />
        </div>

        <div className={style['productIntroduce']}>
          <p>상품 소개</p>
          <input
            type='text'
            name='introduce'
            placeholder='상품소개를 입력해주세요'
            onChange={onChange}
            value={productData.productIntroduce}
          />
        </div>

        <div className={style['productPrice']}>
          <p>판매가격</p>
          <input
            type='number'
            name='price'
            placeholder='판매 가격을 입력해주세요'
            value={productData.productPrice}
            onChange={onChange}
          />
        </div>

        <div className={style['productTag']}>
          <p>태그</p>
          <input
            placeholder='태그를 입력해주세요'
            name='tag'
            value={tagName}
            onChange={onChange}
            onKeyUp={registerTag}
          />
        </div>

        <div className={style['tagList']}>
          {tagList?.map((element) => (
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

