import  {useState } from "react";
import { GWrapper } from '../../../styles/global-styles.e';
import Image from "next/image";
import parse from 'html-react-parser'
import { useTranslation } from "next-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
    EffectFade,
    Autoplay,
    FreeMode,
    Thumbs
  } from "swiper";

import {
    GBlock,
    NewsBlock,
    NewsImage,
    NewsText,
    Asab,
    NewsThumbs,
    Bron,
    NewTit,
    NewP
} from './news-slider.e'
import Link from "next/link";
SwiperCore.use([
    Navigation,
    EffectFade,
    Autoplay,
    FreeMode,
    Thumbs,
  ]);
const NewsSlider = ({
    data
}) => {
  
  const [thumbsSwiperW, setThumbsSwiper] = useState(null);
  const {t} = useTranslation()

    return (
        <GWrapper>
            <GBlock>
                <h2 className="block-title">{t('common:news')}</h2>
                <Swiper
                thumbs={{ swiper: thumbsSwiperW }}
                slidesPerView={1}
                spaceBetween={80}
                className={'sosat-etoTalant'}
                speed={1000}
                pagination={{
                    clickable: true,
                  }}
                    >
                    <Asab>
                        {data?.map((item,idx)=>(
                            <SwiperSlide key={idx}>
                            <NewsBlock>
                                <NewsImage>
                                    {
                                        item.image ? (
                                            <img 
                                            src={item.image}
                                            alt="News 1 "
                                        />
                                        ):''
                                    }
                                </NewsImage>
                                <div>
                                <NewsText>
                                    <NewTit className="tit"> {item.title} </NewTit>
                                    <NewP className="text">{parse(item.text || '')}</NewP>
                                </NewsText>
                                <Link href={"/" + item.slug}> 
                                    <Bron >{t('common:podrobnee')}</Bron>
                                </Link>
                                </div>
                                
                            </NewsBlock>
                            </SwiperSlide>
                        ))}
                    </Asab>
                </Swiper>
                <Swiper
                            //  @ts-ignore
                            onSwiper={setThumbsSwiper}
                            slidesPerView={3}
                            // freeMode={true}
                            // navigation={false}
                            speed={777}
                            spaceBetween={40}
                            slideActiveClass={'activeSlide'}
                            className='khanSwiper'
           
                >
                    {data?.map((item,idx)=>(
                        <SwiperSlide key={idx}>
                            <NewsThumbs>
                                <p> {item.title} </p>
                            </NewsThumbs>
                        </SwiperSlide>
                    ))}
                   
                    {/* <SwiperSlide>
                            <NewsThumbs>
                                <p> 2 Новая модель chevrolet equinox 2021 </p>
                            </NewsThumbs>
                    </SwiperSlide>  
                    <SwiperSlide>
                            <NewsThumbs>
                                <p> 3 Новая модель chevrolet equinox 2021 </p>
                            </NewsThumbs>
                    </SwiperSlide>  */}
                   
                </Swiper>
                
            </GBlock>

        </GWrapper>
    )
}

export default NewsSlider