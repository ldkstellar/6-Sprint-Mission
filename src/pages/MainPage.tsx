import React from 'react';
import schoolPanda from '../img/schoolPanda.png';
import hotItem from '../img/hotIem.png';
import search from '../img/search.png';
import bottomImage from '../img/bottomImage.png';
import registerImage from '../img/registerImage.png';
import instagramIcon from '../icon/instagram.png';
import facebookIcon from '../icon/facebook.png';
import twitterIcon from '../icon/twitter.png';
import youtubeIcon from '../icon/youtube.png';
import '../style/Main.css';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const navigation = useNavigate();
  return (
    <>
      <main>
        <div className='card'>
          <div className='box'>
            <h1>
              일상의 모든 물건을 <br />
              거래해보세요
            </h1>
            <button onClick={() => navigation('/items')}>구경하러 가기</button>
          </div>
          <img src={schoolPanda} alt='가방팬더' />
        </div>
        <div className='section'>
          <div className='confirmBox'>
            <img src={hotItem} alt='인기상품' />
            <div className='specific'>
              <h1>
                인기 상품을 <br />
                확인해 보세요
              </h1>
              <p>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='searchBox'>
            <div className='specific2'>
              <h1>
                구매를 원하는
                <br />
                상품을 검색하세요
              </h1>
              <p>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <img src={search} alt='검색' />
          </div>
        </div>
        <div className='section'>
          <div className='registerBox'>
            <img src={registerImage} alt='등록이미지' />
            <div className='specific3'>
              <h1>
                판매를 원하는 <br />
                상품을 등록하세요
              </h1>
              <p>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </div>
        <div className='bottomCard'>
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h2>
          <img src={bottomImage} alt='가방들고있는판다들' />
        </div>
      </main>

      <footer>
        <div className='tag'>
          <div className='mark'>
            <p className='codeit'>@codeit - 2024</p>
            <div className='privacy-container'>
              <p className='privacy'>Privacy Policy</p>
              <p className='faq'>FAQ</p>
            </div>
          </div>
          <div className='social'>
            <a>
              <img src={facebookIcon} />
            </a>
            <a>
              <img src={twitterIcon} />
            </a>
            <a>
              <img src={youtubeIcon} />
            </a>
            <a>
              <img src={instagramIcon} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainPage;

