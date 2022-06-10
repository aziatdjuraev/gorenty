import react from "react";
import Image from "next/image";
import {GWrapper} from '../../../styles/global-styles.e'
import tg from '../../../assets/images/navbar/tg.png'
import insta from '../../../assets/images/navbar/insta.png'
import { useTranslation } from "next-i18next";
import {
    FooterBlock,
    FooterBlocks,
    FooterNav,
    FooterContacts,
    AnswerBlock,
    ElJamalCopyKhan,
    Circle
} from  './footer.e'
import Link from "next/link";
const Footer = () =>{
    const {t} = useTranslation()
    return (
        <FooterBlock>
        <GWrapper>
            <FooterBlocks>
                <div>
                    <Image
                        src={'/footerLogo.png'}
                        width={218}
                        height={38}
                    />
                    <FooterNav>
                        <Link href={'/'}><a>{t('common:main')}</a></Link>
                        <Link href={'/car-park'}><a>{t('common:avtopark')}</a></Link>
                        <Link href={'/rent-terms'}><a>{t('common:renty-us')}</a></Link>
                        <Link href={'/about-us'}><a>{t('common:about-us')}</a></Link>
                        <Link href={'/contacts'}><a>{t('common:contacts')}</a></Link>
                        <Link href={'/news'}><a>{t('common:news')}</a></Link>
                        <Link href={'/special-offer'}><a>{t('common:propms')}</a></Link>

                    </FooterNav>
                </div>
                <FooterContacts>
                    <h4>{t('common:contacts')}</h4>
                    <p>+ 998 90 111 - 34 - 44</p>
                    <p>+ 998 90 956 - 66 - 66</p>
                </FooterContacts>
                <AnswerBlock>
                    <p>{t('common:quiz')}</p>
                        <a href='mailto:gorentyuz.gmail.com'>
                        <h4>gorentyuz.@gmail.com</h4>

                        </a>
                    <p className="social">{t('common:soicial')}
                    <Circle>
                       <Link href="https://t.me/lazizbukharov">
                        <a target={'_blank'}>
                            <Image
                            src={tg}
                            width={23}
                            height={17}
                        alt={'logo'}

                        />
                        </a>
                       </Link>
                   </Circle>
                   <Circle>
                   <Link    href="https://www.instagram.com/gorenty_uz">
                        <a target={'_blank'}>
                        <Image
                            src={insta}
                            width={18}
                            height={15}
                        alt={'logo'}

                        /> 
                        </a>
                    </Link>
                   </Circle></p>
                </AnswerBlock>
            </FooterBlocks>
            <ElJamalCopyKhan>Designed by El-Jamal Group ©️ All rights reserved 2021-2024  <span className="khan"> ©️ Development by  Davidkhan Khodjayev</span></ElJamalCopyKhan>
        </GWrapper>
        </FooterBlock>
        
    )
}
export default Footer