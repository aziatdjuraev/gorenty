import Layout from '../../components/common/layout/layout'
import { api } from '../../services/api';
import { useEffect , useState } from 'react';
import {
    Navbar,
    HomeHero,
    ChooseCar,
    OurAdvenSlider,
    SpecialOfferComp,
    BreadCrumb,
    NewsSlider,
    Footer,
    CarSingle,
    HitSeason,
    Modal
  } from '../../components/'
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

  export default function CarPark()  {
    const [main , setMain] = useState()
    const  [car , setCar ] = useState()
    const [modalActive , setModalActive] = useState(false)
    const [Modaldata, seModalDate] = useState()
    const router = useRouter()
    useEffect(() => {
    const  slug  = Object.values(router.query).toString();

      api.get("index" , {headers: { 'accept-language': router.locale } }).then(async (response) => {
        setMain(response.data.data);
        
      });
      api.get('avto/' + slug , {headers: { 'accept-language': router.locale } }).then(async (response)=> {
        setCar(response.data.data)
        console.log(response.data.data)
      })
      api.get('avto/showModal/' + slug , {headers: { 'accept-language': router.locale } }).then(async(response)=>{
        seModalDate(response.data.data)
      })
    }, []);
    const  slug  =Object.values(router.query).toString();

    const ModalTru = () => {
      setModalActive(true)
      // api.get('avto/showModal/' + slug)
    }
    const {t} = useTranslation()

      return (
          <Layout data={car?.contont} title={'Автопарк'}>
            <Modal  data={Modaldata} active={modalActive} setActive={setModalActive} />

            <Navbar darc={'darc'}/>
            <BreadCrumb link2={t('common:avtopark')} link3={car?.contont?.title} url2={'/car-park'} />
            <CarSingle modalAc={ModalTru} data={car?.contont}  texCon={car?.text_content}/>
            <HitSeason data={car?.avtoList}/>
            <SpecialOfferComp data={main?.promotion}/>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <Footer/>
          </Layout>
      )
  }
