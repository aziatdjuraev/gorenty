import Layout from '../../components/common/layout/layout'
import { useState , useEffect } from 'react';
import {api} from '../../services/api'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';
import {

    Navbar,
    NewsSlider,
    Footer,
    RentTerms,
    BreadCrumb
  } from '../../components/'


  export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
  export default function RentUs()  {
    const [rent , setRent] = useState()
    const [main , setMain] = useState()
    const router = useRouter()
  useEffect(() => {
    api.get("rent-terms", {headers: { 'accept-language': router.locale } }).then(async (response) => {
      setRent(response.data.data);
    });
    api.get("index", {headers: { 'accept-language': router.locale } }).then(async (response) => {
      setMain(response.data.data);
      
    });

  }, []);
      return (
          <Layout title={'Условия аренды'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={'Условия аренды'} link3={''} url2={'/rent-terms'} url3={''}/>
            <RentTerms data={rent?.content[0]}/>
            <NewsSlider data={main?.news}/>
            <Footer/>
          </Layout>
      )
  }