import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../style/NavigationBtn.css';
const ROOT_PATH = `/items?`;
const PageNationPrevious = ({
  children,
  pageGroup,
  searchParams,
  setPageGroup,
  scrollView,
}) => {
  const navigation = useNavigate();
  const onClick = () => {
    if (searchParams.get('page') > 1) {
      const id = parseInt(searchParams.get('page')) - 1;
      if (id === 3 * (pageGroup - 1)) {
        setPageGroup(pageGroup - 1);
      }
      searchParams.set('page', id);
      navigation(`${ROOT_PATH}${searchParams.toString()}`);
    }
  };
  return (
    <button className='navBtn' onClick={onClick}>
      {children}
    </button>
  );
};

export default PageNationPrevious;

