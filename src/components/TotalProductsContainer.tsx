import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/TotalProduct.css';
import TotalProduct from './TotalProduct';
import { getProducts } from '../api/api';
import SearchBar from './SearchBar';
import { deviceSize } from '../util/deviceSize';
import { useQuery } from '@tanstack/react-query';

const TotalProductsContainer = ({
  windowWidth,
  searchParams,
}: {
  windowWidth: number;
  searchParams: URLSearchParams;
}) => {
  const location = useLocation();
  const params = location.search;
  const [selectValue, setSelectValue] = useState('1');
  const query = searchParams.toString();
  const navigation = useNavigate();

  const { data, isPending, error } = useQuery({
    queryKey: ['products', query],
    queryFn: () => getProducts(query),
  });

  const newOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '1') {
      setSelectValue('1');
      const value = 'recent';
      searchParams.set('orderBy', value);
      navigation(`/items${params}`);
    } else if (e.target.value === '2') {
      setSelectValue('2');
      const value = 'favorite';
      searchParams.set('orderBy', value);
      navigation(`/items${params}`);
    }
  };

  const onClick = (id: number) => {
    const URL = `/items/${id}`;
    navigation(URL);
  };

  useEffect(() => {
    if (windowWidth > deviceSize.tablet) {
      if (data?.length !== 10) {
        searchParams.set('pageSize', '10');
      }
    } else if (
      windowWidth <= deviceSize.tablet &&
      windowWidth > deviceSize.mobile
    ) {
      if (data?.length !== 6) {
        searchParams.set('pageSize', '6');
      }
    } else if (windowWidth <= deviceSize.mobile) {
      if (data?.length !== 4) {
        searchParams.set('pageSize', '4');
      }
    }
  }, [windowWidth]);

  return !isPending && data ? (
    <div className='totalProductContainer'>
      <SearchBar
        windowWidth={windowWidth}
        newOption={newOption}
        selectValue={selectValue}
      />
      <div className='productList'>
        {data.map((element) => {
          return (
            <TotalProduct
              key={element.id}
              element={element}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div>전체 상품 로딩중</div>
  );
};

export default TotalProductsContainer;

