import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import '../style/NavigationBtn.css';

const ROOT_PATH = `/items?`;
const PageNationBtn = ({
  searchParams,
  children,
  type = 'default',
  setPageGroup,
  pageGroup,
}) => {
  const navigation = useNavigate();

  const leftMove = () => {
    if (searchParams.get('page') > 1) {
      const id = parseInt(searchParams.get('page')) - 1;
      console.log(id);
      console.log(pageGroup);
      if (id === 3 * (pageGroup - 1)) {
        setPageGroup(pageGroup - 1);
        console.log('Dd');
      }
      searchParams.set('page', id);
      navigation(`${ROOT_PATH}${searchParams.toString()}`);
    }
  };

  const rightMove = () => {
    const id = parseInt(searchParams.get('page')) + 1;
    if (id === 3 * pageGroup + 1) {
      setPageGroup(pageGroup + 1);
    }
    searchParams.set('page', id);
    navigation(`${ROOT_PATH}${searchParams.toString()}`);
  };

  const numberClick = (e) => {
    if (type === 'default') {
      searchParams.set('page', children);
      navigation(`${ROOT_PATH}${searchParams}`);
    }
  };
  return (
    <button
      className={
        searchParams.get('page') === children ? 'navBtn clicked' : 'navBtn'
      }
      onClick={
        type === 'default'
          ? numberClick
          : type === 'left'
          ? leftMove
          : type === 'right'
          ? rightMove
          : undefined
      }
    >
      {children}
    </button>
  );
};
export default PageNationBtn;

