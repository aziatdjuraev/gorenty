import Layout from '../../components/common/layout/layout'
import { useState , useEffect } from 'react';
import {api} from '../../services/api'
import {
    Navbar,
    NewsSlider,
    Footer,
    NewPage,
    BreadCrumb

    
  } from '../../components'
import { useRouter } from 'next/router';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';



export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
  export default function New()  {
    const [main , setMain] = useState()
    const [Neww , seNewww] = useState()
    const router = useRouter()
    const {t} = useTranslation()
    
    useEffect(() => {
    const  slug  = Object.values(router.query).toString();
      console.log(router)
      api.get("index" , {headers: { 'accept-language': router.locale } }).then(async (response) => {
        setMain(response.data.data);
        
      });
      api.get('news/' + slug , {headers: { 'accept-language': router.locale } }).then(async(response)=>{
        seNewww(response.data.data)
        console.log(response.data.data)
      })
  
    }, []);
      return (
          <Layout data={Neww} title={'Новость'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:news')} link3={Neww?.title} url2={'/news'}/>
            <NewPage data={Neww}/>
            <NewsSlider data={main?.news}/>
            <Footer/>
          </Layout>
      )
  }
