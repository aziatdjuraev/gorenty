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
    NewsPage,
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

  export default function Newsss()  {
    const [news , setNews] = useState()
    const router = useRouter()
      useEffect(() => {
        api.get("news", {headers: { 'accept-language': router.locale } }).then(async (response) => {
          setNews(response.data.data);
          console.log(response.data.data)
        });
    
      }, []);
    const {t}= useTranslation()
      return (
          <Layout data={news} title={'Новости'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:news')} url2={'/news'} url3={''} link3={''}/>
            <NewsPage data={news}/>
            <Footer/>
          </Layout>
      )
  }