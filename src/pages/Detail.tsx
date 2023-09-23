import s from '../style';

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams } from 'react-router-dom';
import list from '../productData';


import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ListCard from '../common/ListCard';

const Detail = () => {
    let id : String= useParams()["id"] as String;
    let findId = list.find((a)=>a._id.toString() === id);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    console.log(findId);
    return (
        <s.Detail className="mw">
            <div className="DetailCon">
                <div className="imgCon">
                    <img src={"/img/"+findId?.img} alt={findId?.title} />
                </div>
                <div className="DetailText">
                    <h2>{findId?.title}</h2>
                    <p>{Number(findId?.price).toLocaleString('ko-KR')+"원"}</p>

                    <div className="cartWrap">
                        <div className="countBtn">
                            <span className="minus">-</span>
                            <span>1</span>
                            <span className="plus">+</span>
                        </div>
                        <div className="cartBtn">
                            <span>ADD TO CART</span>
                        </div>
                    </div>
                    <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>공지사항</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

            <div className="detailTab">
                {/* <button>상품설명</button>
                <button>추가설명</button>
                <button>구매리뷰</button> */}
                <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                      className="mb-3">
                    <Tab eventKey="baseinfo" title="상품설명">
                        상품설명
                    </Tab>
                    <Tab eventKey="extrainfo" title="추가설명">
                        추가설명
                    </Tab>
                    <Tab eventKey="review" title="구매리뷰">
                        구매리뷰
                    </Tab>
                </Tabs>
            </div>

            <h2>Similer Items</h2>
            <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]} 
            className='listCon mySwiper'
            >
                {list.filter((l) => {
                    return l.category === findId?.category;
                }).map((l, i) => {
                return(<SwiperSlide key={i} className="slide">
                    <ListCard _id={l._id} img={l.img} title={l.title} discount={l.discount} price={l.price}/>
                </SwiperSlide>);})
                }

            </Swiper>
        </s.Detail>
    );
}

export default Detail;