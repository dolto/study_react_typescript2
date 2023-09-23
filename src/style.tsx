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
let Blog = styled.main`
    h2{
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
    }
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
let ListCard = styled.li`
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
    .discount{
        position: absolute;
        background-color: transparent;
        color: transparent;
        border-radius: 5px;
        min-width: 2rem;
        text-align: center;
        top: 5%;
        left: 5%;
        transition: 0.5s;
    }
    .detail:hover ~ .discount{
        background-color: brown;
        color: black;
    }
`;
let Shop = styled.main`
    h1 {
    width: 100%;
    padding: 2rem 0;
    font-size: 2rem;
    font-weight: bold;
    }
    .AllList {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    }
    .ShopBtnWrap {
    width: 18%;
    margin-right: 1rem;
    }
    .ShopBtnWrap .btn {
    width: 100%;
    border-radius: 0rem;
    border: 1px solid goldenrod;
    color: goldenrod;
    padding: 0.5rem 0;
    margin-top: 0;
    margin-bottom: 0.5rem;
    }
    .ShopBtnWrap .btn:hover {
    background-color: goldenrod;
    color: #fff;
    }
`;
let Detail = styled.main`
    /* Detail */
    border: 1px solid red;
    > * {
    border: 1px solid blue;
    }
    padding-top: 2rem;
    .DetailCon {
    display: flex;
    justify-content: space-between;
    }
    .DetailCon .imgCon {
    padding-top: 40%;
    border: 1px solid blue;
    width: 40%;
    position: relative;
    }
    .DetailCon .imgCon img {
    position: absolute;
    top: 0;
    width: 100%;
    }
    .DetailCon .DetailText {
    border: 1px solid orange;
    width: 58%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    }
    h2 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 0 1.25rem;
    width: 100%;
    }
    .DetailCon .DetailText p {
    width: 100%;
    color: goldenrod;
    font-weight: 600;
    }
    .DetailCon .cartWrap {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 2rem;
    }
    .DetailCon .countBtn {
    min-width: 100px;
    width: 15%;
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 0;
    background-color: #eaeaea;
    margin-right: 2rem;
    }
    .DetailCon .countBtn .plus,
    .DetailCon .countBtn .minus {
    cursor: pointer;
    }
    .DetailCon .cartBtn {
    width: 50%;
    border: 2px solid goldenrod;
    color: goldenrod;
    text-align: center;
    padding: 0.5rem 0;
    cursor: pointer;
    transition: 0.3s;
    }
    .DetailCon .cartBtn:hover {
    color: #fff;
    background-color: goldenrod;
    }
    .Detail .listCon {
    display: block;
    width: 100%;
    }
    .Detail .slide {
    border: 1px solid red;
    position: relative;
    }
    .detailTab {
    padding: 2rem 0;
    }

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
let Footer = styled.footer`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    .heigth{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .right{
        text-align: end;
    }
    span{
        margin: 0.2rem;
        color: gray;
    }
    .black{
        color: black;
        font-weight: bold;
    }
    .low > .right > span{
        margin-left: 1rem;
    }
    .height > .right{
        border-bottom: 1px solid black;
    }
`;

export default {AppElement, Header, Blog, MainBanner, MainList, ListCard, Shop, Detail, ProductInfo, EctInfo, InfoDescription, InfoReviews, InfoAditional, Similar, Cart, Footer}