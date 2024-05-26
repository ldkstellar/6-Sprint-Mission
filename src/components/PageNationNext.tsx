import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../style/NavigationBtn.css';
const ROOT_PATH = `/items?`;

interface PageNationRightBtn {
  children: string;
  pageGroup: number;
  searchParams: URLSearchParams;
  setPageGroup: React.Dispatch<React.SetStateAction<number>>;
}
const PageNationNext = ({
  pageGroup,
  searchParams,
  children,
  setPageGroup,
}: PageNationRightBtn) => {
  const navigation = useNavigate();
  const onClick = () => {
    const id = parseInt(searchParams.get('page') as string) + 1;
    if (id === 3 * pageGroup + 1) {
      setPageGroup(pageGroup + 1);
    }
    searchParams.set('page', id.toString());
    navigation(`${ROOT_PATH}${searchParams.toString()}`);
  };
  return (
    <button className='navBtn' onClick={onClick}>
      {children}
    </button>
  );
};

export default PageNationNext;

