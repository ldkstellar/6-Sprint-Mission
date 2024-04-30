import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/TotalProduct.css';
import TotalProduct from './TotalProduct';
import { getProducts } from '../api/api';
const TotalProducts = ({ windowWidth, searchParams }) => {
  const location = useLocation();
  const params = location.search;
  const [orderBy, setOrderBy] = useState('recent');
  const [selectValue, setSelectValue] = useState('1');
  const [totalProducts, setTotalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const navigation = useNavigate();

  const registerClick = () => {
    navigation('/addItem');
  };
  let products = [];
  const getProductsData = async () => {
    try {
      setIsLoading(true);
      const query = `?${searchParams.toString()}`;
      const result = await getProducts(query);
      setTotalProducts(result);
    } catch (error) {
      window.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(totalProducts);
  if (windowWidth < 1199 && windowWidth > 767) {
    products = totalProducts.slice(0, 6);
  } else if (windowWidth < 767) {
    products = totalProducts.slice(0, 4);
  } else {
    products = totalProducts;
  }

  const newOption = (e) => {
    if (e.target.value === '1') {
      setSelectValue('1');
      const value = 'recent';
      searchParams.set('orderBy', value);
      console.log(params);
      navigation(`/items${params}`);

      setOrderBy('recent');
    } else if (e.target.value === '2') {
      setSelectValue('2');
      const value = 'favorite';
      searchParams.set('orderBy', value);
      console.log(params);
      navigation(`/items?${searchParams.toString()}`);
      setOrderBy('favorite');
    }
  };

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
        {products?.map((element) => {
          return <TotalProduct key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default TotalProducts;

