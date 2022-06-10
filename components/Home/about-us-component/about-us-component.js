import react from "react";
import { GWrapper } from '../../../styles/global-styles.e';
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";

import {
    AboutBlock,
    AboutImage,
    AboutContent,
    Bron,
    GoRentyC
} from './about-us-component.e'
import Image from "next/image";
import Link from "next/link";

const AboutUsSlider = ({
  
    data
}) => {
  const {t} = useTranslation()
    
    return (
        <GWrapper>
            <h2 className="block-title">{data?.title}</h2>
            <AboutBlock>
                <AboutImage>
                    {data?.image ? (
                        <Image
                        src={data?.image}
                        width={875}
                        height={655}
                        alt={'as'}
                        />
                    ):'am'}
                   
                    
                </AboutImage>
                <GoRentyC>
                        <Image  
                         src={'/Logopng.png'}
                         width={200}
                         height={200}
                        alt={'as'}

                         />
                         
                    </GoRentyC>
                <div>
                    <AboutContent>
                        {/* <h2>
                        Наша комания
                        </h2> */}
                        <p>{parse(data?.text || '')}</p>

                    </AboutContent>
                    <Link href={'/about-us'}>
                    <a>
                        <Bron>{t('common:podrobnee')}</Bron>
                    </a>
                </Link>
                </div>
                
            </AboutBlock>
        </GWrapper>
    )
}

export default AboutUsSlider