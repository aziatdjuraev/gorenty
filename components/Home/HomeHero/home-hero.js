import {
    HeroDes,
    HeeroDesText,
    MiniDes,
    ButtonPod,
    GlobalHome
} from './home-hero.e'
import parse from 'html-react-parser'
import {  useRef, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'next-i18next';
import { GWrapper } from "../../../styles/global-styles.e";
import { Wrapper, SliderImg, SliderDescriptionBtn, HeroTitle } from "./home-hero.e";
import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
} from "swiper";

SwiperCore.use([Pagination, Parallax, Navigation, EffectFade, Autoplay]);
const HomeHero = ({
  data
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const {t} = useTranslation()
  return (
    <Wrapper>

      <GWrapper className="container"></GWrapper>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        speed={1500}
        autoplay={true}
        loop={true}
        parallax={true}
        allowTouchMove={true}
        onSwiper={setControlledSwiper}
        className={'homeSlider'}
        breakpoints={{
          200: {
            width: null,
            slidesPerView: 1,
            allowTouchMove:false
          },
          1200: {
            width: null,
            slidesPerView: 1,
            allowTouchMove:true

          },
        }}
      >
        {data?.map((item , idx)=>(
            <SwiperSlide key = {idx} >
              <SliderImg
                data-swiper-parallax="20%"
                data-swiper-parallax-opacity="0"
              >
                {
                  item.image ? (
                    <img src={item.image} alt={'asd'} />

                  ):<p>davidkhan </p>
                }
              </SliderImg>
              <HeroDes className='no-select'>
                <HeeroDesText>
               {item.title ? item.title : ''}
                </HeeroDesText>
                <MiniDes>
               {parse(item.description ? item.description : '' || '')}
                </MiniDes>
                <Link href={item.slug}>
                  <a>
                  <ButtonPod>
                  {t('common:podrobnee')}
                  </ButtonPod>    
                  </a>
                </Link>
                   
            </HeroDes>
            </SwiperSlide>
        )) }
      </Swiper>

    </Wrapper>
  );
};

export default HomeHero;
