import React from 'react';
import s from '../style';
import MainBanner from './MainBanner';
import ListCard from './ListCard';
import list from '../productData';

export default class MainList extends React.Component{
    render(): React.ReactNode {
        return(
            <s.MainList className='mw'>
                <h2>MainList</h2>
                <a href="#">View all</a>
                <ul className="__list">
                    {list.map((l, i) => {
                        return (
                            <ListCard key={i} img={l.img} title={l.title} price={l.price}/>
                        )
                    })}
                </ul>
            </s.MainList>
        );
    }
}