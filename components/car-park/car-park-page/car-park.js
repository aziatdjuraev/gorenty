import {useState} from 'react'
import { GWrapper } from "../../../styles/global-styles.e";

import {
    ParkHero,
    FliterCars,
    FilterType,
    CardBlock,
    CarCard,
    CarName,
    CarPrice
} from './car-park.e'
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
const CarParkPage = ( {data , sortData , allActive}) => {
    const [all , setAll ] = useState(true)
    const [allAc , setAllAc] = useState('active')
    const remove = () => {
        setAllAc('')
    }
   const {t} = useTranslation()
    return (
        <GWrapper>
            <ParkHero>
                <div>
                    <h3>{data?.trend?.title}</h3>
                    <h5>от {data?.trend?.from_cost}</h5>
                    <p>до {data?.trend?.to_cost}<span> /Сум в день</span></p>
                    <h3>{t('common:trend')}</h3>
                </div>
                {data?.trend?.image ? (
                    <div className='ramka_'>
                <img
                    src={data?.trend?.image}
                    alt={'img car  d'}
                />
                    </div>
                   
                ):''}
                
            </ParkHero>
            <FliterCars>
                <FilterType   className={allActive == 'active'  ?  allAc : '' } onClick={()=>sortData(0)}>{t('common:allavto')}</FilterType>
                {data?.types?.map((item, idx)=>(
                <FilterType  key={idx} className={item.status }onClick={()=>sortData(item.id)}>{item.title}</FilterType>
                ))}


            </FliterCars>
                    <CardBlock>
                        { data?.avtoList?.map((item , idx)=>(
                            <Link href={item?.slug} key={idx}>
                                <a>
                                <CarCard>
                                    <div>
                                        <p>  {item.specification[1].value} <br/>{item.specification[0].value}</p>
                                            <p>{item?.type} {item.specification[2].value}</p>
                                    </div>
                                    {item.image ? (
                                        <Image
                                        src={item.image}
                                        width={400}
                                        height={200}
                                        alt={'car img'}
                                        />
                                    ):''}
                                  
                                    <CarName>{item?.title}</CarName>
                                    <CarPrice>{item?.from_cost}</CarPrice>
                                    <div>
                                        <p>{t('common:do')}  {item?.to_cost}<span> / Сум </span></p>
                                        <p><spna>{t('common:den')}</spna></p>
                                    </div>
                                </CarCard>
                                </a>
                            </Link>
                            ))
                        }
                    </CardBlock>
                    
        </GWrapper>
    )
}

export default CarParkPage