import Layout from '../../components/common/layout/layout'
import { useEffect , useState } from 'react';
import { api } from '../../services/api';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import {
    Navbar,
    Footer,
    RentTerms,
    SpecialOfferPage,
    BreadCrumb
  } from '../../components/'
import { useRouter } from 'next/router';


  export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }

  export default function SpecialOffer()  {
    const [spec , setSpec] = useState()
    const router = useRouter()
    useEffect(() => {
      api.get("promotions", {headers: { 'accept-language': router.locale } }).then(async (response) => {
        setSpec(response.data.data);
      });
  
    }, []);
    const {t} = useTranslation()
      return (
          <Layout title={'Спец предложение'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:propms')} link3={''} url2={'/special-offer'}/>
            <SpecialOfferPage data={spec}/>

            <Footer/>
          </Layout>
      )
  }