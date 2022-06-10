import styled from "styled-components";
import { TextField , FormControl} from "@mui/material";

 
  
  export const ModalB = styled.div`


  `
  export const PoUp = styled.div`
    display:flex;
    width:1342px;
    justify-content:space-between;
    
    @media(max-width:1350px){
      max-width: 1200px;
    }
    @media(max-width:500px){
      flex-direction:column;
      max-wisth:300px;
      border:none;
    }
  `
  export const HarasT = styled.div`
    width: 700px;
    /* height: 1135px; */
    max-height: 1739px;
    box-sizing: content-box;
    background:#fff;
    margin:140px 0;
    border-right:2px solid #676767;
    padding:40px 30px ;
    @media(max-width:500px){
      max-width:300px;
      margin:0 auto;
      border:none;
    }
    .harast {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;

      color: #000000;
      @media(max-width:500px){
      font-size:18px;
      margin: 35px 0 15px 0 ;
  }
    }
    
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: #EC4D19;
    }
  `

export const FotmCar = styled.div`
  width: 600px;
  padding: 40px 50px;
  margin:140px 0;
  background:#fff;
  height: 1135px;
  @media(max-width:500px){
      max-width:300px;
      margin:0 auto;
      padding: 34px;
      max-width: 360px;
    }
    
`
export const CarPrise = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  margin: 0;
  /* black */

  color: #161616;
  @media(max-width:1350px){
    font-size:25px;
    
  }
  @media(max-width:500px){
    font-size:16px;
    line-height:17px;
  }
  
`
export const NameCar = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  /* identical to box height */
  margin: 0;

  color: #000000;

  @media(max-width:1500px){
    font-size: 35px;
    line-height: 51px;
  }
  @media(max-width:1400px){
    font-size: 30px;
    line-height: 40px;
  }
  @media(max-width:500px){
    font-size: 24px;
    max-width:200px;
    line-height: 27px;
    text-align:center
  }
 

`
export const HatrastBlock = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 20px 0 ;
  border-top: 1px solid #676767;
  &.last{
        border-bottom:2px #676767;
      }
`
export const HarastText  = styled.p`
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      margin: 0;

      color: #000000;
      @media(max-width:500px){
      font-size:15px;
        span{
          display: none;
        }
  }
`

export const ShowAllHarast = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  text-align:left;
  cursor: pointer;
  &:hover{
    color: #EC4D19;;
  }
`
// car 


export const CarImg = styled.div`
  /* text-align:center; */
  .ramka {
    width: 520px;
    overflow:hidden;
    max-height: 320px;

    img {
      width: 100%;
    }
    @media(max-width:500px){
      width: 300px;
    }
  }
`

export const DopUslugi = styled.div`
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;

      color: #000000;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      /* identical to box height */
      margin: 0;
      padding: 20px 0;
      border-bottom : 1px solid  #676767; ;
      color: #000000;
    }
`
export const UserData = styled.div`
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
`
export const UserName = styled(TextField)`
  width: 520px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  margin:10px 0;
  color: #000000;
  @media(max-width:500px){
    width: 290px;
    font-size: 16px;

  }
`
export const UserNumber = styled(TextField)`
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  
  margin:10px 0 !important;
  color: #000000;
  @media(max-width:500px){
    width: 290px;
    font-size: 16px;
    margin: 20px 0!important;
  }
`
export const Strana = styled(FormControl)`
  width: 160px;
`
export const UserNS = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  width:104%;
`
export const HowSocial = styled.div`
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #000000;
  }
  div {
    max-width:400px;
  }
`
export const Message = styled.textarea`
  max-width:520px;
  width:520px;
  /* background: #E8E8E8; */
  outline:none;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  padding: 20px 10px;
  max-height:150px;
  height:150px;
  color: #000000;
  @media(max-width:500px){
    max-width:300px;
    }
`
export const SubmitBtn = styled.button`
  width: 520px;
  padding: 20px 0;
  text-align:center;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin:40px 0;
  cursor: pointer;
  
  border:1px solid #EC4D19;
  color: #FFFFFF;
  background: #EC4D19;
  border-radius: 10px;
  &:hover{
    background: transparent;
    color: #EC4D19 ;
  }
  &.disablet {
    opacity: 0.5;
    &:hover{
      opacity: 0.5;
      color: #FFFFFF;
      background: #EC4D19;
      cursor: not-allowed;

    }
  }
  @media(max-width:500px){
    max-width:300px;
    font-size:20px;
    /* margin:0 auto; */
    text-align:center;
    }
`
export const Ix = styled.p`
  cursor: pointer;
  font-size:24px;
  font-weight:bold;
  position:absolute;
  top:0;
  right:17px;

  @media(max-widtH:500px){
    right: 30px;
    bottom: 30px;
  }
  
`