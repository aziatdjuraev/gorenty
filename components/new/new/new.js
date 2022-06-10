import { GWrapper } from "../../../styles/global-styles.e";
import Image from "next/image";
import parse from 'html-react-parser'
import {
    OfferBody,
    OfferBlock,
    ImgBlock,
    OfferContent
} from './new.e'

const NewPage = ({
    data
}) => {


    return (
        <GWrapper>
            <OfferBody>
                <h2 className="block-title">{data?.title}</h2>
                <OfferBlock>
                    <OfferContent>
                        <p>{parse(data?.text || '')}</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida faucibus vulputate id scelerisque quis a purus. Id habitant purus viverra dolor nunc faucibus pulvinar. Semper ipsum lacus, </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida faucibus vulputate id scelerisque quis a purus. Id habitant purus viverra dolor nunc faucibus pulvinar. Semper ipsum lacus, massa massa aliquam curabitur sollicitudin sed sit. Egestas nec viverra mi id mauris congue. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida faucibus vulputate id scelerisque quis a purus. </p> */}
                    </OfferContent>
                    <ImgBlock>
                    {data?.image ? (
                            <Image
                            src={data?.image}
                            width={1080}
                            height={570}
                            alt="MQ"
                            />
                    ): ''}
                       
                    </ImgBlock>
                </OfferBlock>
            </OfferBody>
        </GWrapper>
    )

}
export default NewPage