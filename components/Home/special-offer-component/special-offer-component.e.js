import styled from 'styled-components';

export const OffersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  overflow: hidden;
  margin: 0 0 100px 0;
`;
export const Offer = styled.div`
  width: 408px;
  height: 490px;
  padding: 20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-image: url('${(props)=>props.imgUrl}') ;
  background-color: linear-gradient(0deg, #f1f1f1, #f1f1f1);
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
  @media (max-width: 1600px) {
    width: 338px;
    height: 400px;
  }
  &:hover {
    color: #fff;
    background-color: none;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    background-image: url('${(props)=>props.imgUrl}') ;
    background-size: 150%;
    transition: background 3s;
    backdrop-filter: sepia(90%);

  background-color: linear-gradient(0deg, grey, grey);
    

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
export const GBlock = styled.div`
  /* max-width: 1600px; */
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  @media(max-widtH:500px){
          
          margin: -25px 0px;
      
              }
  .swiper-wrapper {
    display: flex;
    /* width: 200%; */
    /* overflow: hidden; */
   @media(max-width:500px){
    margin: 17px;
   }
   @media(max-width:365px){
    margin: 0px;
   }
  }
  .swiper-slide {
        margin-right: 69px !important;
        
        @media(max-width:1600px){
          width: 312px !important;
        }
        @media(max-width:1450px){
          width: 275px !important;
        }
        @media(max-width:500px){
          margin-right: 209px !important;

        }
        @media(max-width:413px){
          margin-right: 190px !important;
        }
        @media(max-width:403px){
          margin-right: 177px !important;
        }
        @media(max-width:400px){
          margin-right: 111px !important;

        }
       
        
        
        @media(max-width:395px){
          margin-right: 16  5px !important;

        }
        @media(max-width:380px){
          margin-right: 150px !important;

        }
        @media(max-width:365px){
          margin-right: 152px !important;
        }
        @media(max-width:320px){
          margin-right: 85px !important;

        }
       
    }
  .buttons{
      /* margin: 0; */
      cursor: pointer;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-width: 569px;
    max-width: 1070px;
    padding: 0;
    margin: 40px auto;
    @media(max-width:1600px){
    margin: 20px auto;

    }
    @media(max-width:500px){
      display: none;
    }
  }
  .swiper-pagination {
    z-index: 10;
    position: relative;
    height: 2px;
    max-width: 450px;
    display: flex;
    justify-content: center;
    /* background: #C4C4C4; */
    border-radius: 20px;
    top: 556px;
    margin: 0 auto;
    @media(max-width:1640px){
      top: 466px;
      top: 456px;

    }
}
.swiper-pagination-bullet {
    background: #C4C4C4;
    min-width: 120px;
    display: block;

    @media(max-width:1600px){
      min-width: 72px;
    }
}
    .swiper-pagination-bullet-active{
        background-color: #EC4D19;;
        min-width: 120px;
        display: block ;
    }   

    /* .swiper-pagination {
    bottom: 50px;
    @media(max-width:425px){
      display: none;
    }
  }
  .swiper-pagination-bullet {
    height: 25px;
    width: 2px;
    background-color: #f0803d;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #0d4656;
  } */
`;
