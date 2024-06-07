import { log } from 'console';
import React, { ChangeEvent, useState } from 'react';
import AddBoardForm from './AddBoardForm';
import { form } from './AddBoardForm';
const AddBoardContainer = () => {
  const [formData, setFormData] = useState<form>({
    title: '',
    content: '',
    image: null,
  });
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setFormData((prev) => ({ ...prev, ['title']: e.target.value }));
    } else if (e.target.name === 'content') {
      setFormData((prev) => ({ ...prev, ['content']: e.target.value }));
    } else if (e.target.name === 'image') {
      const file = e.target.files?.[0];
      if (file) setFormData((prev) => ({ ...prev, ['image']: file }));
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <AddBoardForm onChangeHandler={onChangeHandler} formData={formData} />
    </>
  );
};

export default AddBoardContainer;

