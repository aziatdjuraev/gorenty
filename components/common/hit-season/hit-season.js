import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import react, { useRef } from 'react';
import { GWrapper } from '../../../styles/global-styles.e';
import {  GBlock, OffersBlock} from '../../Home/special-offer-component/special-offer-component.e';
import SwiperCore, { Pagination, Navigation } from "swiper";    
import {CarCard , CarPrice ,CarName} from '../../car-park/car-park-page/car-park.e'
import {Hit} from './hit-season.e'
SwiperCore.use([Pagination, Navigation]);


const HitSeason = ({
    data
}) => {
    const navigationPrevRefS = useRef(null);
    const navigationNextRefS = useRef(null);
    const router = useRouter()
    return (
 <GWrapper>
     <Hit>
        <h2 className="block-title">Хит сезона</h2>
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
            spaceBetween={80}
            slidesPerView={4}
            speed={2000}
                pagination={{
                clickable: true,
                }}

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
                //   width: null,
                  slidesPerView: 1,
                  autoplay:true
                },
                500: {
                  width: null,
                  slidesPerView: 4,
                },
              }}
            className="mySwiper">
            <OffersBlock>
                {data?.map((item,idx)=>(
                    <SwiperSlide key={idx}>
                            <a href={'/'+ router.locale + '/' + item?.slug} >
                            <CarCard>
                                <div>
                                    <p>{item?.specification[0].value}л 
                                    <p>{item?.specification[1].value}</p>

                                    </p>
                                    <p>{item.type}   {item?.specification[2].value}  привод</p>
                                </div>
                                {item?.image ? (
                                        <Image
                                        src={item?.image}
                                        width={400}
                                        height={200}

                                        />
                                ):'no img'}
                                <CarName>{item?.title}</CarName>
                                <CarPrice>от {item?.from_cost}</CarPrice>
                                <div>
                                    <p>до {item?.to_cost}<span>/Сум </span></p>
                                    <p><spna>в день</spna></p>
                                </div>
                            </CarCard>
                            </a>

                </SwiperSlide>
                ))}
                
                
            </OffersBlock>
            </Swiper>
        </GBlock>
     </Hit>
     
    </GWrapper>
    )
}
export default HitSeason