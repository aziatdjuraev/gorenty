import {
  ModalB,
  PoUp,
  HarasT,
  FotmCar,
  CarPrise,
  NameCar,
  HarastText,
  HatrastBlock,
  ShowAllHarast,
  DopUslugi,
  CarImg,
  UserData,
  UserName,
  UserNumber,
  Strana,
  UserNS,
  HowSocial,
  Message,
  SubmitBtn,
  Ix
} from './modal.e'
import {api} from '../../../services/api'
import { Checkbox   } from '@mui/material';
import { useFormik } from "formik";
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
const  Modal = ({ active, setActive , data}) => {
  const [isShow , setShow ] = useState(false)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [coun  ,setCou] = useState('uz')

  const formik = useFormik({
    initialValues: {
      car_id: '',
      detskoy_kreslo: false,
      full_name:'',
      country:  coun,
      phone_number: '' ,
      telegram: false,
      whatsApp:false,
      viber:false,
      comment:'',
      
},
    onSubmit: values => {
      console.log(values);
      api.post("/forms" , values)
      setTimeout(() => window.location.reload(), 1000);
      
    }
  });
 
    const {t} = useTranslation()
 
  return (
    <ModalB
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={formik.handleSubmit}>
        <PoUp>
          <HarasT>
            <div className='flex-block center'>
          <Ix onClick={()=>setActive(false)}>X</Ix>

              <div>
                <NameCar>{data?.title}</NameCar>
                <h4 className='harast'>{t('common:haras')}</h4>
              </div>
              <div>
                <CarPrise> {t('common:ot')} {data?.from_cost}</CarPrise>
                <HarastText>{t('common:do')}{data?.to_cost}<span>/{t('common:sumvden')}</span></HarastText>
              </div>
            </div>
            {data?.specifications_active?.map((item , idx)=>(
              <HatrastBlock key={idx}>
                <HarastText>{item?.title}</HarastText>
                <HarastText>{item?.value}</HarastText>
              </HatrastBlock>
            ))}
            
            <input   onChange={formik.handleChange} type='hidden' value={formik.values.car_id = data?.id} name='car_id'/>
              {isShow == true ? (
                <>
               {data?.specifications_hidden?.map((item , idx)=>(
              <HatrastBlock key={idx}>
                <HarastText>{item?.title}</HarastText>
                <HarastText>{item?.value}</HarastText>
              </HatrastBlock>
            ))}
                </>
              ): '' }
             {isShow == false ? <ShowAllHarast className='no-margin' onClick={()=> setShow(true)}>{t('common:allharas')} 	&#8250;</ShowAllHarast>: ' ' }
             {isShow == true ? <ShowAllHarast className='no-margin' onClick={() => setShow(false)}>{t('common:ubrat')}</ShowAllHarast> : '' }
             
          </HarasT>
          <FotmCar>
              <CarImg>
                {
                  data?.image ? (
                    <div className='ramka'>
                  <img
                    src={data?.image}
                  />
                    </div>
                    
                  ):'no img'
                }
               
              </CarImg>
             
                <DopUslugi>
                  <h2>{t('common:dop')}</h2>

                  <p><Checkbox {...label}
                   value={formik.values.detskoy_kreslo}
                   onChange={formik.handleChange}
                   name="detskoy_kreslo"
                   id="detskoy_kreslo"
                     />{t('common:detskoye')}</p>

                </DopUslugi>
                <UserData>
                  <h2>{t('common:yourData')}</h2>
                  <UserName 
                  label={t('common:imyafam')} placeholder='Иван' variant="outlined"
                  value={formik.values.full_name}
                  onChange={formik.handleChange }
                  name="full_name"
                  id="full_name"
                  type="text"
                  required
                  />
                  <UserNS>
                    <UserNumber label={(t('common:telTel'))} placeholder='998 --- -- --  ' variant="outlined" 
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    name="phone_number"
                    id="phone_number"
                    min={8}
                    max={8}
                    type="number"
                    required
                    />
                  </UserNS>
                  <HowSocial>
                    <p className='no-margin'> {t('common:bla_bla_bla')}</p>
                    <div className='flex-block'>

                      <p>
                        <Checkbox 
                        value={formik.values.telegram}
                        onChange={formik.handleChange}
                        name="telegram"
                        id="telegram"
                     /> <span>Telegram</span>
                     </p>
                    
                      <p><Checkbox 
                       value={formik.values.whatsApp}
                      onChange={formik.handleChange}
                      name="whatsApp"
                      id="whatsApp"
                      /
                      ><span>WhatsApp</span></p>
                      <p><Checkbox 
                       value={formik.values.viber}
                     onChange={formik.handleChange}
                     name="viber"
                     id="viber"
                     />
                     <span>Viber</span></p>
                    </div>
                  </HowSocial>
                  <div>
                    <Message 
                     value={formik.values.comment}
                     onChange={formik.handleChange}
                     name="comment"
                     id="comment"
                     type="text"
                    placeholder='Комментарий'/>
                  </div>
                  <SubmitBtn type='submit'  >{t('common:bron')}</SubmitBtn>
                </UserData>
          </FotmCar>
        </PoUp>
        </form>
        
      </div>
    </ModalB>
  );
}
export default Modal 