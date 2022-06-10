import styled  from "styled-components";

export const SliderBlock = styled.div`
    width: 100% ;
    max-width: 1616px;
    overflow: hidden;
    margin: 20px auto;
    padding: 0px 0 0  0; 

    @media(max-width:1600px){
        margin: 0px 0;
    }
   
`
export const Block1 = styled.div`
    display: flex;
    width: 1290px;
    justify-content: space-between;
    align-items:center;
    min-width: 0;
    margin: 70px 0 35px 85px; ;
    position:relative;
    @media(max-width:1600px){
        width: 1142px;
    }
    @media(max-width:1366px){
        max-width: 917px;
    }
    @media(max-width:500px){
        flex-direction:column;
        float: right;
        width: 335px;
    }

    .ramka {
        width: 570px;
        height:285px;
        @media(max-width:1600px){
            width: 387;
        height:267px;
        overflow: hidden;
        }
        @media(max-width:1380px){
            width: 405.53px;
            height: 202.77px;
        }
        img {
            width: 100%;
            height: 100%;
        }
        @media(max-width:500px){
            width:395px
            overflow: hidden;

        }
        @media(max-width:365px){
            width:350px
            overflow: hidden;

        }
    }
    
`
export const Block2 = styled.div`
    display: flex;
    width: 1290px;
    align-items:center;
    justify-content:  space-between;
    float: right;
    min-width: 0;
    margin: 50px 0 35px 85px;
    position:relative;
    @media(max-width:1600px){
        width: 1142px;
    }
    @media(max-width:1366px){
        
        max-width: 917px;
    }
    @media(max-width:500px){
        flex-direction:column;
        width: 335px;

    }   
    .ramka {
        width: 570px;
        height:285px;
        @media(max-width:1600px){
            width: 387;
             height:267px;
        }
        @media(max-width:1380px){
            width: 405.53px;
            height: 202.77px;

        }
        img {
            width: 100%;
            height: 100%;
        }
        @media(max-width:500px){
            width:395px
            overflow: hidden;

        }
        @media(max-width:365px){
            width:350px
            overflow: hidden;

        }
    }
    
`
export const TextBlock = styled.div`
    border-bottom: 1px solid #000;
    width: 670px;
   
    @media(max-width:1600px){
        width:530px;
    }
    @media(max-width:1366px){
        width:476px;
    }
    @media(max-width:500px){
        margin: 10px 0;
        max-width:375px;
        
    }
   
    @media(max-width:365px){
            width:300px

        }
`
export const BlockTit = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    margin: 0;
    color: #EC4D19;
    
   
    @media(max-width:1600px){
    font-size: 30px;

    }
    @media(max-width:1366px){
        font-size: 25.6125px;
        line-height: 32px;
    }
    @media(max-width:500px){
        font-size: 18px;
        line-height: 23px;
        max-width:300px;
    }
`
export const BlockP = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
   
    @media(max-width:1600px){
        font-size: 18px;
    }
    @media(max-width:1366px){
        font-size: 17.075px;
        line-height: 21px;
    }
    
    @media(max-width:500px){
        font-size: 14px;
        line-height: 18px;
    }
    @media(max-width:395px){
        width: 300px;
    }
`
export const BNumber = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 144px;
    line-height: 176px;
    position: absolute;
    z-index: 2;
    color: #EC4D19;
    bottom: 59px;
    left: -68px;
   
    @media(max-width:1600px){
    font-size: 104px;
    bottom: 77px;

    }
    @media(max-width:1380px){
         font-size: 102.45px;
         bottom: 18px;

    }
    @media(max-width:500px){
        /* font-size: 72px;
        bottom: 267px;
        margin: 0;
        left: -38px; */
        display: none;
    }

   
`
export const BlockG = styled.div`
    max-width: 1700px;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom:130px;
    @media(max-width:500px){
        margin-bottom: 0;
    }
.swiper-wrapper{
    overflow: hidden;
    /* min-width: ${(props) => (props.sliderWidth  + '%')}; */
    width: 900%;
    display: flex;
    
    .swiper-slide {
        @media(max-width:416px){
            margin-right:96px!important;
        }
    }
}   
.swiper-slide-prev {
    overflow: hidden;


}
.swiper-slide-next {

    overflow: hidden;
}
 .mySwiper {
     display: block;
     position: relative;
 }

 .btns {
     display: flex;
     justify-content: space-between;
     width: 100%;
     position: relative;
     top: 500px;
     right: 0;
     bottom: 0;

     margin: 0 auto;
   
    @media(max-width:1600px){
        top: 452px;
    }
    @media(max-width:1380px){
        top: 379px;

    }
    @media(max-width:1450px){
        top: 445px;

    }
    @media(max-width:500px){
        display: none;
    }
 }
 .buttons {
     
     z-index: 3;
     cursor: pointer;
 }
`