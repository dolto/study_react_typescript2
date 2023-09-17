import React from 'react';
import s from '../style';
import MainBanner from './MainBanner';

export default class Header extends React.Component{
    render(): React.ReactNode {
        return(
            <s.Header>
                <div className='mw'>
                    <h1>
                        <img src="/img/logo.svg" alt='쇼핑몰 로고'/>
                    </h1>
                    <nav>
                        <a href="#">shop</a>
                        <a href="#">blog</a>
                        <a href="#">our story</a>
                    </nav>
                    <div>
                        <a href="#">
                            <i className='fa-solid fa-magnifying-glass'></i>
                            </a>
                        <a href="#">
                            <i className='fa-solid facart-arrow-down'></i>
                            </a>
                        <a href="#">
                            <i className='fa-solid fa-person'></i>
                            </a>
                    </div>
                </div>
            </s.Header>
        );
    }
}