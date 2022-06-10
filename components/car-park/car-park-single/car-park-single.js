import { useState } from "react";
import { GWrapper } from "../../../styles/global-styles.e";
import Image  from "next/image";
import parse from 'html-react-parser'
import {
    HeroBody ,
    CarName,
    Car,
    CarGaller,
    ThisCar,
    CarPriseBron,
    CarPrise,
    CircleBron,
    Specifications,
    SpecificationsBlock,
    HarastCircle,
    HarastText,
    TextBlock,
    Block1,
    Block2,
    ImgBlock
} from './car-park-single.e'
import Link from "next/link";
import { Modal } from "../..";
import { useTranslation } from "next-i18next";
const CarSingle = ({
    data,
    texCon,
    modalAc
}) => {
    const [modalActive, setModalActive] = useState(false);
    const {t} = useTranslation()
    return (
        <>

        <GWrapper>
            <HeroBody>
                <CarName>{data?.title}</CarName>
                <Car>
                    <CarGaller>
                        {data?.images?.map((item,idx)=> (
                            <div className="ramka_" key={idx}>
                                {item?.url ? (
                                        <img
                                            src={item?.url}
                                            alt={'car blet'}
                                        />
                                   
                                ):'no'}
                            
                            </div>
                        ))}
                    </CarGaller>
                    <ThisCar>
                        {
                            data?.image ? (
                                <Image
                                src={ data?.image}
                                width={950}
                                height={522}
                                alt={'asdas'}
                            />
                            ):''
                        }
                       
                    </ThisCar>
                    <CarPriseBron>
                        <CarPrise>{t('common:ot')} {data?.from_cost}</CarPrise>
                        <h3>{t('common:do')} {data?.to_cost} <span>{t('common:den')}</span></h3>
                            <CircleBron onClick={() => modalAc()}>
                                <h4>{t('common:bron')}  <span>{t('common:avto')}</span></h4>
                            </CircleBron>
                       
                    </CarPriseBron>
                </Car>
            </HeroBody>
            <Specifications>
                <h2>{t('common:haras')}</h2>
                <SpecificationsBlock>

                    {data?.specifications?.map((item,idx)=>(
                        <HarastCircle key={idx}>
                            <div>
                            <HarastText>{item?.title ? item?.title : 'nosjakda'}</HarastText>
                            <HarastText className="orange">{item?.value ? item?.value :' as'}</HarastText>
                            </div>
                        </HarastCircle>
                    ))}
                   
             
                </SpecificationsBlock>

                <TextBlock>
                    <Block1>
                        <h5 className="block-title no-margin" >{texCon?.block1?.title}</h5>
                        {/* <h3>Мойка арендованного авто </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis sapien sit faucibus lacus. Sit in auctor eget elit dolor a a pulvinar auctor. Aliquet fames est ac, mollis. Rhoncus quam suspendisse urna, vestibulum odio nibh tellus. Dictum sed sit et odio magna vivamus purus id. </p> */}
                        <p>{parse(texCon?.block1?.text || '')}</p>
                        <div>
                            <ImgBlock>
                            {
                                texCon?.block1?.image ? (
                                    <Image
                                    src={texCon?.block1?.image}
                                    width={770}
                                    height={470}
                                    alt={'zbasdassdas'}
                                />
                                ):<h2>GoRenty</h2>
                            }
                           
                            </ImgBlock>
                            
                        </div>
                    </Block1>
                    <Block2>
                        <ImgBlock>
                        {texCon?.block2?.image ? (
                                <Image
                                src={texCon?.block2?.image}
                                width={930}
                                height={305}
                                alt={'zb'}
                                />
                        ):'img not'}
                       
                        </ImgBlock>
                        
                        {/* <h3>Помощь при паломке</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas aenean blandit sit integer sodales. Cras purus a, dictum ornare. Scelerisque posuere ac fermentum sed dignissim ac at aliquam. A feugiat gravida sit neque, ipsum nisi. Iaculis luctus sem vulputate.</p> */}
                        <p>{parse(texCon?.block2?.text1 || '')}</p><hr/>
                        {/* <h3>Nec semper felis eget.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas aenean blandit sit integer sodales. Cras purus a, dictum ornare. Scelerisque posuere ac fermentum sed dignissim ac at aliquam. A feugiat gravida sit neque, ipsum nisi. Iaculis luctus sem vulputate.</p> */}
                        <p>{parse(texCon?.block2?.text2 || '')}</p><hr/>
                    </Block2>
                </TextBlock>
            </Specifications>
        </GWrapper>

        </>
        
    )
}
export default CarSingle