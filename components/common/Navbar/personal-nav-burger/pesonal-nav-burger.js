import {NavItem , Circle} from '../Navbar.e'
import Link from "next/link";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage"
import { useTranslation } from "next-i18next";

// import './styles.css'
const PersonalNavBurger = () => {
    const router = useRouter();

    const setRu = () => {
        setLanguage("ru");

      };
      const setTu = () => {
        console.log(router);
        setLanguage("tr");

      };
      const setUz = () => {
        setLanguage("en");
      };
    const {t} = useTranslation()

    return (
        <>

			<div className="a-header">
					<input type="checkbox" name="main-nav" id="main-nav" className="burger-check"/>
					<label htmlFor="main-nav" className="burger menu"><span></span></label>
					<ul>
					<NavItem>
                    <Link href={'/car-park'}>
                        <a>
                        {t('common:avtopark')}

                        </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/rent-terms'}>
                            <a>
                        {t('common:renty-us')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/about-us'}>
                            <a>
                            {t('common:about-us')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/contacts'}>
                            <a>
                            {t('common:contacts')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/news'}>
                            <a>
                            {t('common:news')}
                            </a>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href={'/special-offer'}>
                            <a>
                            {t('common:propms')}
                            </a>
                    </Link>
					
					
                </NavItem>
				<NavItem >
					<a className='flex-block'><Circle onClick={setUz} className={`lang ${router.locale == "en" ? "active" : ""}`}>en</Circle><Circle onClick={setRu} className={`lang ${router.locale == "ru" ? "active" : ""}`}>Ru  </Circle><Circle onClick={setTu} className={`lang ${router.locale == "tr" ? "active" : ""}`}>Tr</Circle></a>
				

				</NavItem>
				
						
						
				</ul>
			</div>
        </>
      
    )

}

export default PersonalNavBurger;
