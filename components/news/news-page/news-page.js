import { GWrapper } from "../../../styles/global-styles.e";
import {
    OffersBlock,
    Offer,
    OfferText,
    OfferNum,
    GBlockS
} from '../../special-offer/special-offer-pge/special-offer.e'
import Link from "next/link";

const NewsPage = ({
    data
}) => {
    return (
        <GWrapper>
            <GBlockS>
                <h2 className="block-title">Новости</h2>
                <OffersBlock>
                {data?.map((item, idx) => (
                <Link href={item.slug} key={idx}>
                      <a>
                        <Offer className="no-select" imgUrl={item.image}>
                          <OfferText>{item.title}</OfferText>
                          <OfferNum>{item.number}</OfferNum>
                        </Offer>
                      </a>
              </Link>
            ))}
                  
                   
                  
                </OffersBlock>
               
            </GBlockS>
        </GWrapper>
    )
}
export default NewsPage