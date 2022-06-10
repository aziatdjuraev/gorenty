import {GWrapper} from '../../../styles/global-styles.e'
import {
    BreadCrumbBody,
    BodyB
} from './bread-crumbs.e'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
const BreadCrumb = (
    {
        link2 ,
        link3 ,
        url2,
    }
) =>{
    const {t} = useTranslation()
    return (
        <GWrapper>
            <BodyB>
                <BreadCrumbBody>
                    <Link href={'/'} className='glav'>
                        <a className='glav'>
                            {t('common:main')}
                        </a>
                    </Link>
                    <Link href={url2}>
                        <a>
                    <span>{ link2 ? '>' : ''}</span> {link2}
                        </a>
                    </Link>
                        <a>
                        <span>{ link3 ? '>' : ''}</span> {link3}
                        </a>
                </BreadCrumbBody>
            </BodyB>
           

        </GWrapper>
    )
}
export default BreadCrumb