import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { NextPage } from 'next';
import SubTitleAndNumberProps from './sub_title';
import { dataPage } from '@/constants';
type SlideProps = {
  renderFootball?: boolean
}
const Slide:NextPage<SlideProps> =({renderFootball}) => {
  return (
   
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="md:!hidden"
      >
        {
          dataPage[renderFootball?'football': 'basketball'].map((item, index) => {
            return  <SwiperSlide key={index}>
              <div className='pt-[80px] px-5'>
                <SubTitleAndNumberProps number={item.number} subTitle={item.subTitle} classNameDivSubTitle='pb-5'></SubTitleAndNumberProps>
                <span  className='text-desc'>{item.desc}</span>
              </div>
            </SwiperSlide>
          })
        }
      
      </Swiper>
 
  );
}
export default  Slide;
