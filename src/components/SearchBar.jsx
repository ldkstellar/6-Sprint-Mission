import React from 'react';

const SearchBar = ({ windowWidth, registerClick, newOption, selectValue }) => {
  return (
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
  );
};
export default SearchBar;

