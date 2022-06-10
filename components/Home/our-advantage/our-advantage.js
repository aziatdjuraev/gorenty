import react, { useRef } from 'react';
import { GWrapper } from '../../../styles/global-styles.e';
import parse from 'html-react-parser'
import btnPrev from '../../../assets/images/home/btn-prev.png';
import btnNext from '../../../assets/images/home/btn-next.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useTranslation } from "next-i18next";

import {
  SliderBlock,
  Block1,
  BlockTit,
  BlockP,
  TextBlock,
  Block2,
  BNumber,
  BlockG,
} from './our-advantage.e';
const OurAdvenSlider = ({
  data
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const {t} = useTranslation()
  return (
    <GWrapper>
      <BlockG>
        <h2 className="block-title adven">{t('common:out-adveb')}</h2>
        <div className="btns">
          <div className="buttons" ref={navigationPrevRef}>
            <Image src={btnPrev} width={80} height={80} />
          </div>
          <div className="buttons" ref={navigationNextRef}>
            <Image src={btnNext} width={80} height={80} />
          </div>
        </div>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          speed={1000}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          navigation={true}
          className="mySwiper"
        >
          {data?.map((item , idx )=>(
              <SwiperSlide key={idx}>
              <SliderBlock>
                <Block1>
                  <div>
                    <BNumber>{item[1]?.number}</BNumber>
                    {item[1]?.image ? (
                    <div className='ramka'>
                    <img src={item[1]?.image} alt='advemn'/>
                    </div>

                    ):''}
                  </div>
                  <TextBlock>
                    <BlockTit>{item[1]?.title}</BlockTit>
                    <BlockP>{parse(item[1]?.description || '')} </BlockP>
                  </TextBlock>
                </Block1>
                <Block2>
                  <BNumber>{item[2]?.number}</BNumber>
                  <div>
                  {item[2]?.image ? (
                    <div className='ramka'>
                    <img src={item[2]?.image} alt='advemn'/>
                    </div>

                    ):''}
                  </div>
                  <TextBlock>
                    <BlockTit>{item[2]?.title}</BlockTit>
                    <BlockP>{parse(item[2]?.description || '')}</BlockP>
                  </TextBlock>
                </Block2>
              </SliderBlock>
            </SwiperSlide>
          ))}
        </Swiper>
      </BlockG>
    </GWrapper>
  );
};

export default OurAdvenSlider;
