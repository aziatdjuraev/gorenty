import { GWrapper } from "../../../styles/global-styles.e";
import Image from "next/image";
import parse from 'html-react-parser'
import {
    OfferBody,
    OfferBlock,
    ImgBlock,
    OfferContent
} from './offer.e'

const OfferPage = ({
    data
}) => {


    return (
        <GWrapper>
            <OfferBody>
                <h2 className="block-title">{data?.title}</h2>
                <OfferBlock>
                    <ImgBlock>
                    {data?.image ? (
                        <Image
                            src={data?.image}
                            width={875}
                            height={515}
                            alt="MQ"
                        />
                    ): ''}
                    </ImgBlock>
                    <OfferContent>
                        {/* <h3>Новая модель Chevrolet Tracker 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida faucibus vulputate id scelerisque quis a purus. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida faucibus vulputate id scelerisque quis a purus. Id habitant purus viverra dolor nunc faucibus pulvinar. Semper ipsum lacus, </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida faucibus vulputate id scelerisque quis a purus. Id habitant purus viverra dolor nunc faucibus pulvinar. Semper ipsum lacus, massa massa aliquam curabitur sollicitudin sed sit. Egestas nec viverra mi id mauris congue. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida faucibus vulputate id scelerisque quis a purus. </p> */}
                        <p>{parse(data?.text || '')}</p>
                    </OfferContent>
                </OfferBlock>
            </OfferBody>
        </GWrapper>
    )

}
export default OfferPage