import React, { useState, useEffect, useRef } from 'react';
import RegisterForm from './RegisterForm';
const INITIAL_VALUE = {
  image: null,
  productName: '',
  productIntroduce: '',
  productPrice: 0,
  productTag: '',
};
const RegisterFormContainer = () => {
  const [productData, setProductData] = useState(INITIAL_VALUE);
  const [isFormFilled, setIsFillInput] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [tagList, setTagList] = useState([]);
  const tagId = useRef(0);

  useEffect(() => {
    if (
      productData.productIntroduce &&
      productData.productName &&
      productData.productPrice &&
      tagList
    ) {
      return setIsFillInput(true);
    }
    setIsFillInput(false);
  }, [productData, tagList]);

  const onChange = (e) => {
    if (e.target.name === 'file') {
      const value = e.target.files[0];
      setProductData((prev) => ({ ...prev, ['image']: value }));
      setPreviewImage(value);
    } else if (e.target.name === 'title') {
      const value = e.target.value;
      setProductData((prev) => ({ ...prev, ['productName']: value }));
    } else if (e.target.name === 'introduce') {
      const value = e.target.value;
      setProductData((prev) => ({ ...prev, ['productIntroduce']: value }));
    } else if (e.target.name === 'tag') {
      const value = e.target.value;
      setProductData((prev) => ({ ...prev, ['productTag']: value }));
    }
  };

  const registerTag = (e) => {
    if (e.key === 'Enter' && productData.productTag !== '') {
      e.preventDefault();
      setTagList((prev) => [
        ...prev,
        { name: productData.productTag, tagId: tagId.current },
      ]);
      tagId.current += 1;
      setProductData((prev) => ({
        ...prev,
        ['productTag']: INITIAL_VALUE.productTag,
      }));
    }
  };

  const removeImage = () => {
    setProductData((prev) => ({ ...prev, ['image']: null }));
    setPreviewImage(INITIAL_VALUE.image);
  };

  const removeTagItems = (id) => {
    const remainList = tagList.filter((element) => element.tagId !== id);
    setTagList(remainList);
  };
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in productData) {
      data.append(key, productData[key]);
    }
    console.log(data);
  };
  return (
    <RegisterForm
      tagList={tagList}
      handleKey={handleKey}
      handleSubmit={handleSubmit}
      onChange={onChange}
      isFormFilled={isFormFilled}
      previewImage={previewImage}
      removeImage={removeImage}
      removeTagItems={removeTagItems}
      registerTag={registerTag}
      productData={productData}
    />
  );
};

export default RegisterFormContainer;

