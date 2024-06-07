import React, { useState } from 'react';
import AddBoardForm from './AddBoardForm';
interface form {
  title: string;
  content: string;
  image: string | null;
}

const AddBoardContainer = () => {
  const [form, setForm] = useState<form | object>({});

  return (
    <>
      <AddBoardForm />
    </>
  );
};

export default AddBoardContainer;

