import React from 'react';
import s from '../style';
import MainBanner from './MainBanner';

interface p {
   // _id:number,
    title: string,
    img: string,
    price: string,
   // category: string,
   // discount: string
}

export default class ListCard extends React.Component<p>{
    constructor(props: p){
        super(props);

    }
    render(): React.ReactNode {
        return(
            <s.ListCard>
                <li>
                    <div className='p_img'>
                        <img src={"/img/"+this.props.img} alt="상품 이미지" />
                    </div>
                    <span>{this.props.title}</span>
                    <span>{this.props.price}</span>
                    <a className='detail' href="#">자세히보기</a>
                </li>
            </s.ListCard>
        );
    }
}