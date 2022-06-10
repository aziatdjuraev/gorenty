import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import react, { useRef } from 'react';
import { useRouter } from 'next/router';
import { GWrapper } from '../../../styles/global-styles.e';
import { OfferNum, GBlock, OffersBlock, OfferText, Offer } from './special-offer-component.e';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useTranslation } from "next-i18next";
SwiperCore.use([Pagination, Navigation]);
const SpecialOfferComp = ({
  data,
  imgUrl
}) => {
  const navigationPrevRefS = useRef(null);
  const navigationNextRefS = useRef(null);
  const {t} = useTranslation()
  const router = useRouter()
  return (
    <GWrapper>
      <h2 className="block-title spes">{t('common:propms')}</h2>
      <GBlock>
        <div className='btns'>
         <div  className="buttons" ref={navigationPrevRefS}>
            <Image src={'/sliderPrevSp.png'} width={50} height={50} />
          </div>
          <div className="buttons" ref={navigationNextRefS}>
            <Image src={'/sliderNextSp.png'} width={50} height={50} />
          </div>
        </div>
      
          
        <Swiper
          id='special'
          spaceBetween={80}
          slidesPerView={4}
          speed={2000}

            pagination={{
              clickable: true,
            }}
            autoplay={true}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRefS.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRefS.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          navigation={{
            prevEl: navigationPrevRefS.current,
            nextEl: navigationNextRefS.current,
          }}
          breakpoints={{
            200: {
              width:null,
              slidesPerView: 1,
              // centeredSlides:true,

            },
            700: {
              width:null,
              slidesPerView: 3,
              // loop:true,

            },
            1366 : {
              width:null,
              slidesPerView:4,
            },
            1700:{
              width:null,
              
              // centeredSlides:false,
              // loop:false
            }
          }}
          className="mySwiper">
          <OffersBlock>
            {data?.map((item,idx)=>(
              <SwiperSlide key={idx}> 
                <a href={'/'+ router.locale + '/' + item?.slug}>
                  <Offer className="no-select" imgUrl={item.image ? item.image : ''}>
                    <OfferText>{item.title} </OfferText>
                    <OfferNum>{idx + 1}</OfferNum>
                  </Offer>
                </a>
              </SwiperSlide>
            ))}
         
          </OffersBlock>
        </Swiper>
      </GBlock>
    </GWrapper>
  );
};

export default SpecialOfferComp;
