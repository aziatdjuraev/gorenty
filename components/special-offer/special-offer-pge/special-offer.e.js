import styled from "styled-components";


export const OffersBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 50px 0 0 0;
    @media(max-width:450px){
      justify-content: center;

    }
    
`
export const GBlockS = styled.div`
    margin: 187px 0 40px 0;
    @media(max-width:450px){
      margin: 87px 0px 40px 29px;;

    }
`
export const Offer = styled.div`
  margin: 0 29px 50px 0;
  width: 408px;
  height: 490px;
  padding: 20px;
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))  ; */
  background-image :  url('${(props)=>props.imgUrl}') ;
  /* background-color: linear-gradient(0deg, #f1f1f1, #f1f1f1); */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: transparent;
  @media(max-width:500px){
    color: #fff;
  }
  background-color: grey;
  transition: 0.1s p ease-in-out;

  transition: background 3s ease-in-out;
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 1600px) {
    width: 286px;
    height: 340px;
    margin: 0 32px 50px 0;

  }
  &:hover {
    color: #fff;
    background-color: none;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    background-size: 150%;
    transition: background 3s;
    background-image :  url('${(props)=>props.imgUrl}') ;
    background-repeat:no-repeat;
    h5 {
      font-size: 117px;
    }
  }
`;
export const OfferText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`;

export const OfferNum = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 115px;
  margin: 0;
  /* car rent */

  color: #ec4d19;
`;