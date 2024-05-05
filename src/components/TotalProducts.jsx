import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/TotalProduct.css';
import TotalProduct from './TotalProduct';
import { getProducts } from '../api/api';
const TotalProducts = ({ windowWidth, searchParams, setSearchParams }) => {
  const location = useLocation();
  const params = location.search;

  const [selectValue, setSelectValue] = useState('1');
  const [totalProducts, setTotalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigate();
  const registerClick = () => {
    navigation('/addItem');
  };
  let products = [];
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
  return (
    <div className='totalProductContainer'>
      <div className='totalProduct'>
        <div className='titleAndSearch'>
          <p className='title'>
            {windowWidth < 1999 ? '판매 중인 상품' : '전체 상품'}
          </p>
          <input
            className='search'
            placeholder='검색할 상품을 입력해주세요'
          ></input>
        </div>
        <div className='buttons'>
          <button onClick={registerClick} className='submit'>
            상품 등록하기
          </button>
          <select onChange={newOption} value={selectValue} className='filter'>
            <option value={'1'}>최신순</option>
            <option value={'2'}>좋아요순</option>
          </select>
        </div>
      </div>
      <div className='productList'>
        {totalProducts.map((element) => {
          return <TotalProduct key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default TotalProducts;

