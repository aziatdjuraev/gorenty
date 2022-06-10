import { GWrapper } from "../../../styles/global-styles.e";
import {
    AboutContent,
    AboutText,
    ImBlock,
    ChesNiy,
    Punkt,
    PunktBlock,
    Circleel
} from './about-us-page.e'
import Image from "next/image";
import parse from 'html-react-parser'
const AboutUs = ({
    data
}) => {
    return (
        <GWrapper>
            <AboutContent>
                <AboutText>
                    <h2 className="block-title">{data?.block1.title}</h2>
                    {/* <Image
                        src={'/logo.png'}
                        alt="logo"
                        width={280}
                        height={48}
                    /> */}
                    <p className="about_text">{parse(data?.block1.text || '')}</p>
                    {/* <p>Прокат автомобилей, который предоставляет решения проблем с выбором автомобиля на время, решения для бизнес партнеров а также индивидуальных персон и общества. Мы помогаем нашим клиентам с удобством бронирования автомобилей, встречаем их в аэропорту также доставляем авто по городу в назначенную ими локацию. Наша компания отличается креативным подходом для клиентов, как команда GO Renty мы обещаем быть вежливыми, предоставлять хороший сервис посетителям.</p> */}
                </AboutText>
                <ImBlock>
                    {data?.block1.image  ? (
                        <Image
                            src={data?.block1.image}
                            width={850}
                            height={428}
                            alt="mujik"
                        />
                    ): (
                        ''
                    )
                    }
                
                </ImBlock>
            </AboutContent>
            <h2 className="block-title no-margin">{data?.block2.title}</h2>
            <ChesNiy>
                <div className="ramka">
                    {
                    data?.block2.image ? (
                        <Image
                        src={data?.block2.image}
                        width={850}
                        height={630}
                        alt="about"
                    />
                    ): ''
                    }
                   
                </div>
                <Punkt>
                    <h2>{data?.block2.subtitle}</h2>
                    <PunktBlock>
                        <Circleel>1</Circleel>
                        <div>
                            {/* <h2>Честность</h2> */}
                            {/* <p>Полная прозрачность ценообразования со всеми нюансами. Никаких скрытых платежей и неожиданностей. Подробное описание автомобилей и всех страховок. Все написано крупным шрифтом и простым языком.</p> */}
                            <p>{parse(data?.block2.text1 || '')}</p>
                        </div>
                    </PunktBlock>
                    <PunktBlock>
                        <Circleel>2</Circleel>
                        <div>
                            {/* <h2>Круглосуточная поддержка</h2>
                            <p>В Go Renty наши услуги не заканчиваются после передачи вам ключей от машины. В случае непредвиденных обстоятельств вы получите немедленную помощь в любое время и в любой точке города</p> */}
                            <p>{parse(data?.block2.text2 || '')}</p>
                        </div>
                    </PunktBlock>
                    <PunktBlock>
                        <Circleel>3</Circleel>
                        <div>
                            {/* <h2>Сервис</h2>
                            <p>Персональный подход к каждому клиенту, при котором вас обслуживает зачастую сам владелец прокатной компании.</p> */}
                            <p>{parse(data?.block2.text3 || '')}</p>
                        </div>
                    </PunktBlock>
                </Punkt>
            </ChesNiy>
        </GWrapper>
    )
}
export default AboutUs