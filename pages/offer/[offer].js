import Layout from '../../components/common/layout/layout'
import { useEffect , useState } from 'react';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import {
    Navbar,
    SpecialOfferComp,
    Footer,
    OfferPage,
    BreadCrumb
  } from '../../components'



  export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
  export default function Offer()  {
    const [main , setMain] = useState()
    const [offer , setOffer] = useState()
    const router = useRouter()
    useEffect(() => {
    const  slug  =Object.values(router.query).toString();
      // console.log(router.locale)
      api.get("index", {headers: { 'accept-language': router.locale } }).then(async (response) => {
        setMain(response.data.data);
        
      });
      api.get('promotions/' + slug , {headers: { 'accept-language': router.locale } }).then(async(response) => {
        setOffer(response.data.data)
        console.log(response.data.data)
      })
    }, []);
    const {t} = useTranslation()
      return (
          <Layout data={offer?.content} title={'Спец предложение'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:propms')} link3={offer?.content?.title} url2={'/special-offer'} />
            <OfferPage  data={offer?.content}/>
            <SpecialOfferComp data={main?.promotion}/>
            <Footer/>
          </Layout>
      )
  }