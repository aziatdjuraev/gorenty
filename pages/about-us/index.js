import { useEffect , useState } from 'react';
import Layout from '../../components/common/layout/layout'
import { api } from '../../services/api';
import {
    Navbar,
    BreadCrumb,
    Footer,
    AboutUs
  } from '../../components/'
  import { serverSideTranslations } from "next-i18next/serverSideTranslations";
  import { useTranslation } from "next-i18next";

import { useRouter } from 'next/router';

  
  export default function About()  {
    const {t} = useTranslation()
    const router = useRouter()
    const [about , setAbout] = useState()
  useEffect(() => {
    api.get("about" , {headers: { 'accept-language': router.locale } }).then(async (response) => {
      setAbout(response.data.data);
      console.log(response.data.data + 'about is work') 
    });

  }, []);
      return (
          <Layout title={'О нас'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:about-us')} link3={''} url2={'/about-us'}  />
            <AboutUs data={about}/>
            <Footer/>
          </Layout>
      )
  }
  export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }