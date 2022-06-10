import Layout from '../../components/common/layout/layout'
import { useState , useEffect } from 'react';
import {api} from '../../services/api'
import {
    Navbar,
    SpecialOfferComp,
    NewsSlider,
    Footer,
    CarParkPage ,
    BreadCrumb
  } from '../../components/'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';


 
  export default function CarPark()  {
    const [main , setMain] = useState()
    const [park , setPark] = useState()
    const [avtiId, setAvtoId] = useState()
    const [card , setCard ] = useState()
    const [allActive , setAllAct] = useState('active')
    const router = useRouter()
  useEffect(() => {
    api.get("index", {headers: { 'accept-language': router.locale } }).then(async (response) => {
      setMain(response.data.data);
      
    });
    api.get("avto" ,{ params: { sortBy: avtiId } }, {headers: { 'accept-language': router.locale } }).then(async (response) => {
      setPark(response.data.data);
      
    });

  }, []);
  const sortWrapperTitle = (itemId) => {
    if (itemId !== 0 ) {
      api
        .get("avto", {
          params: { sortBy: itemId },
        })
        .then((response) => {
          setPark(response.data.data);
        });
    } else {
      api
      .get("avto")
      .then((response) => {
        setPark(response.data.data);
      });

    }
    setAllAct('')
  };
  const {t} = useTranslation()

      return (
          <Layout title={'Автопарк'}>
            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:avtopark')} link3={''} url2={'/car-park'}  />
            <CarParkPage data={park} sortData={sortWrapperTitle} allActive={allActive}/>
            <SpecialOfferComp data={main?.promotion}/>
            <NewsSlider data={main?.news}/>
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