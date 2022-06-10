import Layout from '../../components/common/layout/layout'
import { useState , useEffect } from 'react'
import { api } from '../../services/api'
import {
    Navbar,
    Footer,
    ContactsPage,
    BreadCrumb
  } from '../../components/'
  import { serverSideTranslations } from "next-i18next/serverSideTranslations";
  import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


  export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }

  export default function CarPark()  {
    const [contact , setContact] = useState()
    const router = useRouter()
    useEffect(() => {
      api.get("contact" , {headers: { 'accept-language': router.locale } }).then(async (response) => {
        setContact(response.data.data);
      });
  
    }, []);
    const {t} = useTranslation()

      return (
          <Layout title={'Контакты'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:contacts')} link3={''} url2={'/contacts'}/>

            <ContactsPage data={contact}/>
            <Footer/>
          </Layout>
      )
  }