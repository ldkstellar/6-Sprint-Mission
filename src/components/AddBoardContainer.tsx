import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { postArticles, postImage, tempSignIn } from '../api/api';
import AddBoardForm from './AddBoardForm';
import { formType } from './AddBoardForm';

const AddBoardContainer = () => {
  const routes = useRouter();
  const [previewImage, setPreviewImage] = useState<string>('');
  const [formData, setFormData] = useState<formType>({
    title: '',
    content: '',
    image: null,
  });

  const onCancelHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    URL.revokeObjectURL(previewImage);
    setPreviewImage('');
    setFormData((prev) => ({ ...prev, ['image']: null }));
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setFormData((prev) => ({ ...prev, ['title']: e.target.value }));
    } else if (e.target.name === 'content') {
      setFormData((prev) => ({ ...prev, ['content']: e.target.value }));
    } else if (e.target.name === 'image') {
      const file = e.target.files?.[0];
      if (file) {
        setFormData((prev) => ({ ...prev, ['image']: file }));
        const objectURL = URL.createObjectURL(file);
        setPreviewImage(objectURL);
      }
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = await postImage(formData.image);
    const result = await postArticles(formData, url);
    routes.push('/boards');
  };
  useEffect(() => {
    tempSignIn();
  }, []);

  return (
    <>
      <AddBoardForm
        onCancelHandler={onCancelHandler}
        onChangeHandler={onChangeHandler}
        formData={formData}
        previewImage={previewImage}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default AddBoardContainer;

