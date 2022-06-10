import React, {  useRef, useState, useEffect  } from "react";
import { GWrapper } from "../../../styles/global-styles.e";
import {
    CarBlock,
    Harastitistika,
    HarastCircle,
    HarastText,
    CarPreviw,
    CarPreviwTitle,
    CarPrise,
    ActiveC ,
    Bron,
    Strelka,
    NameCar,
    
} from './choose-your-car.e'
import STR from '../../../assets/images/home/str.png'
import STR2 from '../../../assets/images/home/str2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { api } from "../../../services/api";
import { useRouter } from "next/router";

import SwiperCore, {
    Pagination,
    Parallax,
    Navigation,
    EffectFade,
    Controller,
    Autoplay,
    FreeMode,
    Scrollbar, A11y ,
    Thumbs,
    
  } from "swiper";
import { Modal } from "../..";
import Link from "next/link";
SwiperCore.use([
    Pagination,
    Parallax,
    Navigation,
    EffectFade,
    Autoplay,
    FreeMode,
    Thumbs,
  ]);
  
const ChooseCar = ({
    data,
    
}) =>
{
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [modalActive, setModalActive] = useState(false);
  const router = useRouter()
  const [Modaldata, setModaldata] = useState('')

 
  const showM = (slug) => {
    setModaldata(slug)


        api.get('avto/showModal/' + slug, {headers: { 'accept-language': router.locale } }).then(async(response)=>{
            setModaldata(response.data.data)
          })
        console.log(slug)
        setModalActive(true)
  }
    const {t} = useTranslation()

    return (    
        <GWrapper>
                <Modal data={Modaldata} active={modalActive} setActive={setModalActive} />
                <h2 className="block-title">{t('common:choose-car')}</h2>
                <CarBlock>


                    <CarPreviw>
                        <Swiper
                          direction="vertical"
                          spaceBetween={80}
                          thumbs={{ swiper: thumbsSwiper }}
                          loop={true}
                          slidesPerView={1}
                          autoplay={true}
                          className="mySwiper2"
                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                          centeredSlides={true}
                          slideToClickedSlide={true}
                          speed={1200}
                          breakpoints={{
                            200: {
                              allowTouchMove:false,
                              speed:1000,
                              slidesPerView: 1,

                            },
                            1024:{
                                spaceBetween:1080,
                                allowTouchMove:true,

                            },
                            
                            1700: {
                              width: null,
                              
                            },
                          }}
                          >
                              {
                              data ? (
                                data?.map((item,idx)=>(
                                    <SwiperSlide key={idx}>
                                    <CarPreviwTitle>{item?.title}</CarPreviwTitle>
                                    <div className="flex-block-car">
                                    <Harastitistika className='harastt'>
                                    <HarastCircle>
                                        <div>
                                            <HarastText>{item?.specification[0].title}</HarastText>
                                            <HarastText className="orange">{item?.specification[0].value}</HarastText>
                                        </div>
                                        
                                    </HarastCircle>
                                    <HarastCircle>
                                        <div>
                                            <HarastText>{item?.specification[1].title}</HarastText>
                                            <HarastText className="orange">{item?.specification[1].value}</HarastText>
                                        </div>
                                        
                                    </HarastCircle>
                                    <HarastCircle>
                                        <div>
                                        <HarastText>{item?.specification[2].title}</HarastText>
                                            <HarastText className="orange">{item?.specification[2].value}</HarastText>
                                        </div>
                                        
                                    </HarastCircle>
                                </Harastitistika>
                                    {item?.image ? (
                                        <div className="ramka_">
                                         <img
                                        src={item?.image}
                                        alt="image"
                                        />  
                                        </div>
                                      
                                    ):'no img'}
                                      
                                    </div>
                                    <CarPrise >
                                   <span className="border-bottom">{item?.from_cost} / cум</span>
                                    <Bron onClick={() => showM(item?.slug)}>
                                        {t('common:bron')}
                                    </Bron>
                                    </CarPrise>
                                    </SwiperSlide>
                                  ))
                              ):''
                             }
                              
                        </Swiper>
                    
                    </CarPreviw>
                    <Harastitistika className="zb">
                        <div className="Buttons">
                        <Strelka  ref={navigationPrevRef}>
                            <Image
                                src={STR}
                                width={15}
                                height={50}
                            />
                        </Strelka>
                        <Strelka className="next" ref={navigationNextRef}>
                            <Image
                                src={STR2}
                                width={15}
                                height={50}
                            />
                        </Strelka>
                        </div>
                        
                        
                        <Swiper
                            direction={"vertical"}
                            //  @ts-ignore
                            onSwiper={setThumbsSwiper}
                            slidesPerView={3}
                            freeMode={true}
                            className="CarsSlide"
                            speed={777}
                            spaceBetween={40}
                            centeredSlides={true}
                            slideToClickedSlide={true}
                            loopedSlides={5}
                            modules={[Controller]}
                            loop={true}
                            slideActiveClass={'test'}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            //@ts-ignore
                            onInit={(swiper) => {
                            //@ts-ignore

                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                            //@ts-ignore

                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            //@ts-ignore
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                           
           
                >
                    { 
                        data?.map((item , idx)=>(
                            <>
                            <SwiperSlide className="xxx" key={idx}>
                              <ActiveC  className={` btn-active no-select`}>
                                      <div>
                                          <HarastText>{item?.title || 'no title'} </HarastText>
                                      </div>
                                      
                              </ActiveC>
                              </SwiperSlide>
                             
                            </>
                           
                        ))
                   }
                  
            
                   
                        
                </Swiper>
                        
                    </Harastitistika>
                </CarBlock>
        </GWrapper>
    )
}

export default ChooseCar; 