import React, { useEffect, useState } from 'react';
import BestPosts from './BestPosts';
import { writing } from '../api/apiType';

const URL = 'page=1&pageSize=3&orderBy=like';
const BestPostsContainer = ({ bestPosts }: { bestPosts: writing[] }) => {
  return <BestPosts posts={bestPosts} />;
};

export default BestPostsContainer;

