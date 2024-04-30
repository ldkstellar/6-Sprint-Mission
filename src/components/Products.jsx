import React, { useEffect, useRef, useState } from 'react';
import '../style/Products.css';
import BestProducts from './BestProducts';
import TotalProducts from './TotalProducts';
import PageNationBtn from './PageNationBtn';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [pageGroup, setPageGroup] = useState(1);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    pageSize: 10,
    orderBy: 'recent',
    group: 1,
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // 언마운트시 이벤트 리스너 삭제[
    };
  }, []);

  return (
    <div className='products'>
      <BestProducts windowWidth={windowWidth} />
      <TotalProducts
        searchParams={searchParams}
        windowWidth={windowWidth}
        setSearchParams={setSearchParams}
      />
      <div className='page'>
        <PageNationBtn
          searchParams={searchParams}
          pageGroup={pageGroup}
          setPageGroup={setPageGroup}
          type='left'
        >
          {'<'}
        </PageNationBtn>
        <PageNationBtn searchParams={searchParams} type='default'>
          {((pageGroup - 1) * 3 + 1).toString()}
        </PageNationBtn>
        <PageNationBtn searchParams={searchParams} type='default'>
          {((pageGroup - 1) * 3 + 2).toString()}
        </PageNationBtn>
        <PageNationBtn searchParams={searchParams} type='default'>
          {(pageGroup * 3).toString()}
        </PageNationBtn>

        <PageNationBtn
          searchParams={searchParams}
          pageGroup={pageGroup}
          setPageGroup={setPageGroup}
          type='right'
        >
          {'>'}
        </PageNationBtn>
      </div>
    </div>
  );
};

export default Products;

