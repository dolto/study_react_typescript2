import styled from "styled-components";
import './value.css';

let AppElement = styled.div`
    .mw {
        margin-left: auto;
        margin-right: auto;
        max-width: 1200px;
        width: calc(100% - 2rem);
    }
`;
let Header = styled.header`
    /* * {
        border: 1px solid red;
    } */
    > div{
        /* border: 1px solid #000; */
        display: flex;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid #eaeaea;
        padding: 1rem 0;
    }
    h1{
        width: 25%;
        max-width: 250px;
        min-width: 100px;
    }
    a{
        text-decoration: none;
        color: inherit;
        padding: 0.5rem 1rem;
        transition: 0.3s;
    }
    a:hover{
        color: tomato;
    }
    > div div{
        position: relative;
        /* border: 1px solid black; */
    }
    > div div::before {
        position: absolute;
        content: "";
        width: 1px;
        height: 12px;
        background-color: #999;
        top: 'calc(50% - 10px)';
        left: -0.5rem;
    }
    img{
        width: 100px;
    }
    nav, div {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
    }
    nav {
        flex-grow: 1;
    }
`;
let Main = styled.div`
    
`;
let MainBanner = styled.div`
    border: 1px solid red;
    /* height: 400px; */
    margin: auto;
    .__inner {
        height: 400px;
    }
    .swiper-pagination-bullet{
        border: 1px solid blue;
    }
    .swiper-button-next:after {
        content: "" !important;
        width: 20px;
        height: 20px;
        border-top: 5px solid tomato;
        border-right: 5px solid tomato;
        transform: rotate(45deg);
        color: tomato;
    }
    .swiper-slide div{
        background-position: center;
        background-size: cover;
        
    }
    .swiper-slide .img1{
        background-image: url("/img/Img_bg1.jpg");
        width: 100%;
        height: 400px;
    }
    .swiper-slide .img2{
        background-image: url("/img/Img_bg2.jpg");
        width: 100%;
        height: 400px;
    }
    .swiper-slide .img3{
        background-image: url("/img/Img_bg3.jpg");
        width: 100%;
        height: 400px;
    }
`;
let MainList = styled.div`
    border: 1px solid green;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;

    img {
        width: 100px;
    }
    .__list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        grid-gap: 1rem;
        width: 100%;
        margin-top: 1rem;
        border: 1px solid blue;
    }
    .__list > li {
        position: relative;
        border: 1px solid aqua;
        width: calc(100%);
    }
    .__list span {
        display: block;
        line-height: 2rem;
    }
`;
let ListCard = styled.div`
    .p_img {
        border-radius: 1rem;
        overflow: hidden;
    }
    .p_img img{
        width: 100%;
    }
    .detail{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        color: transparent;
    }
`;
let Shop = styled.div`
    
`;
let AllList = styled.div`
    
`;
let Detail = styled.div`
    
`;
let ProductInfo = styled.div`
    
`;
let EctInfo = styled.div`
    
`;
let InfoDescription = styled.div`
    
`;
let InfoReviews = styled.div`
    
`;
let InfoAditional = styled.div`
    
`;
let Similar = styled.div`
    
`;
let Cart = styled.div`
    
`;
let Footer = styled.div`
    
`;

export default {AppElement, Header, Main, MainBanner, MainList, ListCard, Shop, AllList, Detail, ProductInfo, EctInfo, InfoDescription, InfoReviews, InfoAditional, Similar, Cart, Footer}