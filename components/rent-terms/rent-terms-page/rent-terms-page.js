import { GWrapper } from "../../../styles/global-styles.e";
import Image from "next/image";
import parse from 'html-react-parser'
import {
    HeroRent,
    TerminBlock,
    TerKvadtar,
    Propbeg,
    InsurseBlock ,
    ContentIns,
    Imgblock
} from './rent-terms-page.e'
const RentTerms = ({
    data
}) => {
    return (
        <GWrapper>
            <HeroRent>
                {
                data?.bg_image  ? (
                <Image
                src={data?.bg_image }
                width={1750}
                height={450}
                alt="asab"
                />
                    ): ''
                }
                
            </HeroRent>
            <TerminBlock>
                <TerKvadtar>
                    <h2>{data?.block1.title}</h2>
                    <p>{parse(data?.block1?.text || '')}</p>
                    {/* <ul>
                        <li>Паспорты гражданина</li>
                        <li>Водительские права</li>
                    </ul>
                    <p>Минимальный возраст арендатора</p>
                    <ul>
                        <li>Минимальный возраст 26 год</li>
                        <li>Минимальный водительский тажь 4 года </li>
                    </ul>    */}
                </TerKvadtar>
                <Propbeg>
                    <h2>{data?.block2.title}</h2>
                    {/* <h4>{parse(data?.block2.text)}</h4> */}
                    <p>{parse(data?.block2.text || '')}</p>
                    {/* <p>За чертой города. Доплата за перепробег при аренде автомобиля до 800 000 сум</p> */}
                    {/* <p>Тур по стране от 800 000 сум за 500 км пробега в сутки. Доплата за перепробег при аренде автомобиля до 500 000 сум</p> */}
                </Propbeg>
            </TerminBlock>
            <div>
                <h2 className="block-title rent">{data?.block3.title}</h2>
            </div>
            <InsurseBlock>

                <ContentIns>
                    <p>{parse(data?.block3.text || '')}</p>
                    {/* <p>Безусловная франшиза – это сумма, которую клиент оплачивает в случае повреждения автомобиля по своей вине, либо вине лиц, личности которых установить не удалось или не представляется возможным.</p> */}
                    {/* <p>Оплачивается только в случае ДТП или угоне автомобиля и залогом не является. Собственно говоря, франшиза – это и все, что Вы платите при ДТП по Вашей вине:</p>
                    <p>– 3 000 000 сум (на автомобили от 200 000 сум в сутки);</p>
                    <p>– 5 000 000 сум (на автомобили от 500 000 до 2 000 000 сум в сутки);</p> */}
                </ContentIns>
                <Imgblock>
                {
                  data?.block3.image ? (
                    <Image
                    src={data?.block3.image}
                    width={850}
                    height={430}
                    alt="hm"
                />
                  )  : ''
                }
                    
                </Imgblock>
            </InsurseBlock>
        </GWrapper>
    )
}
export default  RentTerms