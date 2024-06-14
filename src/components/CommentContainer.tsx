import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getComments } from '../api/api';
import { commentsType, commentType } from '../api/apiType';
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentContainer = () => {
  const router = useRouter();
  const [comments, setComments] = useState<[commentType] | []>([]);
  const id = router.query['id'];
  const saveComment = async () => {
    try {
      const result = await getComments(id as string, 5);
      setComments(result);
    } catch (error) {}
  };
  useEffect(() => {
    saveComment();
  }, []);
  return (
    <>
      <CommentInput />
      {comments.map((element) => (
        <Comment
          content={element.content}
          image={element.writer.image}
          createdAt={element.createdAt}
          nickName={element.writer.nickname}
        />
      ))}
    </>
  );
};

export default CommentContainer;

