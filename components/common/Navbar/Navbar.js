import react, { useState } from "react";
import {
    NavBody,
    Nav,
    NavItem,
    Apps,
    Circle,
    NavBurger
        } from './Navbar.e'
import { useRouter } from "next/router";
import Image from "next/image";
import phone from '../../../assets/images/navbar/phone.png'
import tg from '../../../assets/images/navbar/tg.png'
import insta from '../../../assets/images/navbar/insta.png'
import setLanguage from "next-translate/setLanguage"
import  PersonalNavBurger from './personal-nav-burger/pesonal-nav-burger'
import { useTranslation } from "next-i18next";
import Link from 'next/link'
import { GWrapper } from "../../../styles/global-styles.e";

const Navbar = ({darc}) =>{



  const router = useRouter();

    const setRu = () => {
        setLanguage("ru");
        
      };
      const setTu = () => {
        console.log(router);
        setLanguage("tr");

      };
      const setUz = () => {
        setLanguage("en");
      };
    const {t} = useTranslation()

    return (

    <>
    <GWrapper>
    <NavBody className="select ">
            <Link href={'..'}>
                            <a>
                            <img
                            src={!darc ? '/navv.png' : '/logo.png'}
                            // width={280}
                            // height={48}
                            alt={'logo'}
                        />
                        </a>
            </Link>
           
            <Nav className={darc}>
                <NavItem>
                    <Link href={'/car-park'}>
                        <a>
                            {t('common:avtopark')}
                        </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/rent-terms'}>
                            <a>
                            {t('common:renty-us')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/about-us'}>
                            <a>
                            {t('common:about-us')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/contacts'}>
                            <a>
                            {t('common:contacts')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/news'}>
                            <a>
                            {t('common:news')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/special-offer'}>
                            <a>
                            {t('common:propms')}
                            </a>
                    </Link>
                </NavItem>
            </Nav>
            <Apps>
                   <Circle onClick={setUz} className={`lang ${router.locale == "en" ? "active" : ""}`}>En</Circle>
                   <Circle onClick={setTu} className={`lang ${router.locale == "tr" ? "active" : ""}`}>Tr</Circle>
                   <Circle onClick={setRu} className={`lang ${router.locale == "ru" ? "active" : ""}`}>Ru  </Circle>
            </Apps>
            <Apps className="social">
            <Circle>
                       <Link href={'/'}>
                        <a>
                            <Image
                            src={phone}
                            width={19}
                            alt="img"
                            height={19}
                            />
                        </a>
                       </Link>
                     
                   </Circle>
                   <Circle className="app_hh">
                       <Link href="https://t.me/lazizbukharov">
                            <a target='_blank'>
                            <Image
                            src={tg}
                            width={23}
                            height={17}
                            alt="img"
                        />
                        </a>
                       </Link>
                   </Circle>
                   <Circle>
                   <Link href="https://instagram.com/gorenty_uz">
                        <a target='_blank'>
                        <Image
                            src={insta}
                            width={18}
                            height={15}
                            alt="img"
                        /> 
                        </a>
                    </Link>
                   </Circle>
            </Apps>
                  
            
        </NavBody>
    </GWrapper>
          
        <NavBurger>
        <PersonalNavBurger/>
            <div className="fixed-logo">
                <Link href={'/'}>
                                    <a>
                                    <Image
                                    src={'/logo.png'}
                                    width={180}
                                    height={34}
                                />
                                </a>
                    </Link>
            </div>
            
            
        </NavBurger>
        
    </>
    )

}
export default Navbar