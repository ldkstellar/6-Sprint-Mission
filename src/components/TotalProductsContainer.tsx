import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/TotalProduct.css';
import TotalProduct from './TotalProduct';
import { getProducts, Product, handleUnknownError } from '../api/api';
import SearchBar from './SearchBar';
import { deviceSize } from '../util/deviceSize';

type NewOption = (e: React.ChangeEvent<HTMLSelectElement>) => void;

export interface Search {
  windowWidth: number;
  newOption: NewOption;
  selectValue: string;
}

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
  const [totalProducts, setTotalProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const getProductsData = async () => {
    try {
      setIsLoading(true);
      const query = `${searchParams.toString()}`;
      const result = await getProducts(query);
      setTotalProducts(result);
    } catch (error) {
      handleUnknownError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const newOption: NewOption = (e) => {
    if (e.target.value === '1') {
      setSelectValue('1');
      const value = 'recent';
      searchParams.set('orderBy', value);
      navigation(`/items${params}`);
    } else if (e.target.value === '2') {
      setSelectValue('2');
      const value = 'favorite';
      searchParams.set('orderBy', value);
      navigation(`/items?${searchParams.toString()}`);
    }
  };

  useEffect(() => {
    if (windowWidth > deviceSize.tablet) {
      if (totalProducts.length !== 10) {
        searchParams.set('pageSize', '10');
        getProductsData();
      }
    } else if (
      windowWidth <= deviceSize.tablet &&
      windowWidth > deviceSize.mobile
    ) {
      if (totalProducts.length !== 6) {
        searchParams.set('pageSize', '6');
        getProductsData();
      }
    } else if (windowWidth <= deviceSize.mobile) {
      if (totalProducts.length !== 4) {
        searchParams.set('pageSize', '4');
        getProductsData();
      }
    }
  }, [windowWidth]);

  useEffect(() => {
    getProductsData();
  }, [location]);

  return !isLoading ? (
    <div className='totalProductContainer'>
      <SearchBar
        windowWidth={windowWidth}
        newOption={newOption}
        selectValue={selectValue}
      />
      <div className='productList'>
        {totalProducts.map((element) => {
          return <TotalProduct key={element.id} element={element} />;
        })}
      </div>
    </div>
  ) : (
    <div>전체 상품 로딩중</div>
  );
};

export default TotalProductsContainer;

