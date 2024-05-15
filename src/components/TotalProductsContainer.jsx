import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/TotalProduct.css';
import TotalProduct from './TotalProduct';
import { getProducts } from '../api/api';
import SearchBar from './SearchBar';

const TotalProductsContainer = ({ windowWidth, searchParams }) => {
  const location = useLocation();
  const params = location.search;
  const [selectValue, setSelectValue] = useState('1');
  const [totalProducts, setTotalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const registerClick = () => {
    navigation('/addItem');
  };

  const getProductsData = async () => {
    try {
      setIsLoading(true);
      const query = `${searchParams.toString()}`;
      const result = await getProducts(query);
      setTotalProducts(result);
    } catch (error) {
      if (error.name === 'httpError') {
        window.alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const newOption = (e) => {
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
    if (windowWidth > 1200) {
      if (totalProducts.length !== 10) {
        searchParams.set('pageSize', 10);
        getProductsData();
      }
    } else if (windowWidth <= 1200 && windowWidth > 767) {
      if (totalProducts.length !== 6) {
        searchParams.set('pageSize', 6);
        getProductsData();
      }
    } else if (windowWidth <= 767) {
      if (totalProducts.length !== 4) {
        searchParams.set('pageSize', 4);
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
        registerClick={registerClick}
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

