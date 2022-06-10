import { GWrapper } from "../../../styles/global-styles.e";
import {
    ContactsBody,
    AdresBlock,
    Adress,
    MapBlock,
    GoRentyC
} from './contacts-page.e'
import Image from "next/image";
import parse from 'html-react-parser'
const ContactsPage = ({
    data
}) => {
    return (
        <GWrapper>
            <ContactsBody>
                <h2 className="block-title">Контакты</h2>
                <AdresBlock>
                    <MapBlock>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5038.986272346965!2d69.29048157420151!3d41.32628234840664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4ca3a2b928f%3A0x4db2967cd9d8b594!2zMjEg0YPQu9C40YbQsCDQntGB0LjRkSwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1644388788018!5m2!1sru!2s" 
                            width="875"
                            height="671"  
                            allowFullScreen="" 
                            loading="lazy"></iframe>
                    </MapBlock>
                    <GoRentyC>
                        <Image
                            src={'/Logopng.png'}
                            width={200}
                            height={200}
                            />
                    </GoRentyC>
                   
                    <Adress>
                        <div>
                            <h3>Адрес</h3>
                            {/* <p>г. Ташкент</p> 
                            <p>р. Юнусабадул. Осие 21</p> */}
                            <p>{parse(data?.address || '')}</p>
                        </div>
                        <div className="flex-block">
                            <div>
                                <h3>Контакты</h3>
                                {/* <p> +998 90 111 34 44</p> 
                                <p>+998 90 956 66 66</p> */}
                                <p>{parse(data?.contacts || '')}</p>
                            </div>
                            <div>
                                <h3>Время работы</h3>
                                {/* <p>Пн - Вс 24/7</p> */}
                                <p>{parse(data?.working_time || '')}</p>
                            </div>
                        </div>
                        <div>
                            <h3> Электроная почта</h3>
                            {/* <p>gorentyuz.gmail.com</p> */}
                            <p>{parse(data?.email || '')}</p>
                            
                        </div>
                        <div>
                            <h3> Соц. сети</h3>
                            <p>{parse(data?.facebook || '')}</p>
                            <p>{parse(data?.telegram || '')}</p>
                            <p>{parse(data?.intagram || '')}</p>

                        </div>
                    </Adress>
                </AdresBlock>
            </ContactsBody>

        </GWrapper>
    )
}

export default ContactsPage 