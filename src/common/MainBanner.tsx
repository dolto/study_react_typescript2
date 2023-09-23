import s from '../style';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';

const MainBanner = () => {
    return(
        <s.MainBanner className='mw'>
            <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            pagination={true} navigation={true} 
            modules={[Pagination, Navigation]} 
            className="__inner">
                <SwiperSlide>
                    <div className="img1">
                        {/* <img src="/img/Img_bg1.jpg" alt='배너이미지'/> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img2">
                        {/* <img src="/img/Img_bg2.jpg" alt='배너이미지'/> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img3">
                        {/* <img src="/img/Img_bg3.jpg" alt='배너이미지'/> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </s.MainBanner>
    );
}

export default MainBanner;