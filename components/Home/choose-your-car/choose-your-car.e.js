import styled from "styled-components";

// export const ChooseCatdTitle = styled.h2`
//     font-style: normal;
//     font-weight: normal;
//     font-size: 48px;
//     line-height: 60px;

//     color: #000000;

// `
export const CarBlock = styled.div`
    display: flex;
    min-height: 600px;
    min-width: 600px;
    justify-content: space-between;
    /* @media(max-width:500px){
        flex-direction:column;
    } */
    .mySwiper2 {
    height: 1007px;
    overflow: hidden;
        @media(max-width:1600px){
            height: 807px;
        }
    
    @media(max-width:500px){
        height:477px;
    }
    
    .swiper-slide  {
        min-width: 1701px !important;
        margin: 0 -10px;
       
        @media(max-width:1600px){
            width: 100%;
            min-width:990px  !important;
            margin: 0 auto;
        }
        @media(max-width:800px){
        min-width: 47px !important;
    }
        @media(max-width:500px){
            width: 100%;
            min-width:40px  !important;
            text-align:center;
            margin: 0 auto;
        }
    }
    .ramka_ {
        max-width:1053px;
        max-height:808px;
        z-index:100;
        img {
            width: 100%;
            height: 100%;
        }
        
        @media(max-width:1600px){
            max-width:1053px;
             max-height:508px;
             margin-top:30px;
        img {
            margin-left:90px;
            margin-top:10px;
        }
        }
        @media(max-width:1380px){
            max-width:1053px;
            max-height:508px;
        img {
            margin-left:00px;
            margin-top:10px;
        }
        }
        @media(max-width:800px){
            max-width:853px;
            max-height:358px;
        }
        @media(max-width:500px){
            max-width:335px;
           max-height:170px;
           
        }
    }
}
`
export const Harastitistika = styled.div`
    display: flex;
    flex-direction: column;
    height: 470px;
    justify-content: space-between;
    margin: 0 0 0 38px;
    @media(max-width:500px){
        flex-direction: none;

    }
    &.harastt {
        @media(max-width:500px){
        display: none;
    }
    }
    
    &.zb {
        height: 610px;
        position: relative;
        bottom: 63px;
        margin: 0 38px 0 0px;
    }
    .CarsSlide {
        max-height: 470px;
        overflow: hidden;
        width: 100%;
        z-index: 5;
        @media(max-width:500px){
            display: none;
        }
        .swiper-wrapper{
            
            @media(max-width:500px){
                display: flex;

            }
        }
    }
    .next {
        position: relative;
        bottom: 0;
        top: 488px;
    }
 
    .Buttons {
        position: relative;
        top: 77px;
        @media(max-width:500px){
            display: none;
        }
    }
    .swiper-slide-thumb-active  {
	/* border: 1px solid #EC4D19 ; */
	color: #EC4D19 ;

	

}

.swiper-slide-thumb-active  {
    .btn-active{
        border: 1px solid #EC4D19 ;

    }

}
`
export const HarastCircle = styled.div`
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    border: 1px solid #000;
    width: 130px;
    z-index: 1;
    height: 130px;
    text-align: center;
    border-radius: 50%;
    justify-content: center;
`
export const ActiveC = styled.div`
      display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #000;
    width: 130px;
    z-index: 1;
    height: 130px;
    text-align: center;
    border-radius: 50%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.3s all ease-in !important;
    transition: 0.3s all ease-in !important;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    &.swiper-slide-thumb-active {
        border: 1px solid #EC4D19 ;
        color: #EC4D19 ;

    }
    &.btn-active:hover{
        border: 1px solid #EC4D19 ;
        color: #EC4D19 ;
    transition: 0.3s all ease-in !important;

    }
`
export const HarastText = styled.p`
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        text-align: center;
        /* display: block; */
        line-height: 20px;
        margin: 0;
        z-index: 2;
        background-color: #fff;
        width: 200px;
        /* &.active{
            color: #EC4D19 ;

        } */
`
export const CarPreviw = styled.div`
       width: 1549px;
        margin: 0 auto;
        text-align: center;
    @media(max-width:500px){
        width:335px;
        margin: 0;
    }

        .flex-block-car {
            display: flex;
            justify-content:space-between;
            text-align : center;
            width:1400px;

            
           
            @media(max-width:1600px){
            width:1000px;
            margin-left:38px ;
            }
            @media(max-width:1380px){
            margin-left:0px ;
            }
            @media(max-width:800px){
                width: 700px;
            }
            @media(max-width:500px){
                flex-direction:column;
            }
        }
`
export const CarPreviwTitle = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 0px;
    margin:30px 0;
    color: #000000;
       
        @media(max-width:1600px){
            margin: 30px 0 0 17%;
        }
        @media(max-width:500px){
            font-size: 26px;
            margin: 39px auto;

        }
`
export const CarPrise = styled.p`
    display: flex;
    width:410px;
    align-items:center;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    padding-bottom: 10px;
    color: #000000;
    /* border-bottom: 2px solid #000; */
    margin: 0px auto 0 auto;
    max-width: 1016px;
    /* flex-direction:column; */
    
    @media(max-width:1600px){
        margin: -28px 0 0 45%;
    }
    @media(max-width:500px){
        font-size: 18px;
    width: 100%;
    max-width: 275px;
    display: flex;
    margin: 36px auto;
    justify-content: space-between;
    }


`
export const Bron = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 130px;
    width: 130px;
    text-align: center;
    background: transparent;
    border: 1px solid #000;
    margin: 27px auto;
    border-radius: 50%;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #000;
    &:hover {
        color: #EC4D19  ;
        border: 1px solid #EC4D19;
    }
    @media(max-width:500px){
        height: 100px;
        width: 100px;
    font-size: 14px;
    margin:0;

    }
    `
export const Strelka = styled.div`
    /* height: 50px;
    width: 2px; */
    width: 100%;
    text-align: center;
    cursor: pointer;
    
`
export const CarWrap = styled.div`
    max-height: 407px;
    overflow: hidden;
`
export const NameCar = styled.p`
    font-size:30px;
    line-height:26px;
    margin: 0;
 
    
`