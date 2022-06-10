import Layout from '../components/common/layout/layout'
import {useState ,useEffect} from 'react'
import {api} from '../services/api'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';
import {
  Navbar,
  HomeHero,
  ChooseCar,
  OurAdvenSlider,
  SpecialOfferComp,
  AboutUsSlider,
  NewsSlider,
  Footer,
  LoadingScreen,
  Modal
} from '../components'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [main , setMain] = useState()
  const [modalActive , setModalActive] = useState(false)
  const [Modaldata, seModalDate] = useState()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    api.get("index" , {headers: { 'accept-language': router.locale } }).then(async (response) => {
      setMain(response.data.data);
      console.log(response.data.data )
    });

    
  }, []);
  
  return (
   <>
   {!loading ? (
      <Layout data={main} title={'GoRenty'}>
      {/* <Modal data={slug} active={modalActive} setActive={setModalActive} /> */}
      <Navbar/>
      <HomeHero data={main?.banner} />
      <ChooseCar data = {main?.cars}/>
      <OurAdvenSlider data={main?.advantage}/>
      <SpecialOfferComp data={main?.promotion}/>
      <NewsSlider data={main?.news}/>
      <AboutUsSlider data={main?.about[0]} />
      <Footer />
    </Layout>

   ): (
    <LoadingScreen />
   )}
      
    
   </>
     
    
     
  )
}
