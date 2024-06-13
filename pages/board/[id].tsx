import { articleType } from '@/src/api/apiType';
import { GetServerSideProps } from 'next';
import { AxiosError } from 'axios';
import React from 'react';
import { getArticle } from '@/src/api/api';
import { useRouter } from 'next/router';
interface articleProps {
  article: articleType;
}
const board: React.FC<articleProps> = ({ article }) => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps<articleProps> = async (
  context
) => {
  const { id } = context.query;

  try {
    const article = await getArticle(id as string);
    return {
      props: { article },
    };
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};
export default board;

