import React from 'react';
import s from '../style';
import MainBanner from '../common/MainBanner';
import MainList from '../common/MainList';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
    <s.Shop className="mw">
        <h1>All Goods</h1>
        <div className="AllList">
            <nav className="ShopBtnWrap">
                <Link to='/shop/:index'><button className="btn">등록순</button></Link>
                <Link to='/shop/:cost-height'><button className="btn">낮은 가격순</button></Link>
                <Link to='/shop/:cost-low'><button className="btn">높은 가격순</button></Link>
                <Link to='/shop/:discount'><button className="btn">높은 할인율순</button></Link>
            </nav>
            <MainList />
        </div>
    </s.Shop>
    );
  }
  
  export default Shop;