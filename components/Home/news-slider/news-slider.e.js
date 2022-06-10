import styled  from "styled-components";

export const GBlock = styled.div`
  overflow: hidden;
  max-height: 850px;
  margin: 0 0 140px 0  ;
  @media(max-width:1600px){
      margin: 0;
  }
  .sosat-etoTalant{
      @media(max-width:600px){
        height: 651px;
        margin: -53px 0;
      }
  }
.khanSwiper{
    position: relative;
    bottom: 180px;

    width: 1080px;
    overflow: hidden;
    background: #fff;
    padding:  0 0 95px 0;
    /* position: relative;
    bottom: 70px;
    width: 1080px;
    overflow: hidden;
    background: #fff;
    padding: 0 0 95px 0; */
    @media(max-width:1640px){
    bottom: 80px;

    }
    @media(max-width:600px){
    bottom: -20px;

    }
    .swiper-slide {
        overflow: hidden;
        margin-right:0 !important;
        width: 360px !important;
        @media(max-width:1600px){
        width: 280px !important;

        }
        @media(max-width:1440px){
            width: 260px !important;
        }
        @media(max-width:1050px){
            max-width:280px;

        }
        p {
            @media(max-width:500px){
           display: none;
        }
        }
        @media(max-width:500px){
            width: 120px !important;
        }
    }
}
.swiper-wrapper {
    display: flex;
    /* width: 200%; */
    overflow: hidden;
    width: 900%;
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
  }

    
       
    .swiper-slide-thumb-active  {
        div {
            border-top: 5px solid  #EC4D19;;
            p {
                opacity: 1;
            }

        }
    }


    
`
export const Asab = styled.div`
    max-width: 1750px;
    overflow: hidden;
`
export const NewsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px 0 ;
    /* align-items: center; */
    /* width: 100%; */
    width: 1750px;
    @media(max-width:1600px){
        justify-content: inherit;
        margin: 0;
    }
    @media(max-width:1050px){
        margin:40px auto;
        width:100%;

    }
    @media(max-width:500px){
        flex-direction:column;
        justify-content: inherit;

    }
    
`
export const NewsImage = styled.div`
    max-width: 1078px;
    max-height:430px;
    overflow: hidden;
    img {
        width: 100%;
    }
    @media(max-width:1600px){
        max-width:824px;
        min-height:338px;
    }
    @media(max-width:1380px){
        max-width:766px;
        max-height:305px;
    }
    @media(max-width:1040px){
        max-width:634px;
        min-height:434px;
    }
    @media(max-width:500px){
        max-width:350px;
        margin:  0 0 -200px 0;
}
`
export const NewsText  = styled.div`
    width: 622px;
    padding-bottom:40px;
    @media(max-width:1640px){
        margin:0 0px 0 60px;
        width:455px;
    }
  
    @media(max-width:1050px){
            max-width:280px;

    }
    @media(max-width:500px){
        margin:0 0 200px 0;
        font-size: 14px;
        line-height: 18px;
    }
        @media(max-width:416px){
            @media (max-width: 500px){
            margin: -33px 0 59px 0;
            font-size: 14px;
            line-height: 18px;
        }
    h2 , .tit {
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 45px;
        margin: 0;
        color: #161616;
        @media(max-width:1600px){
            font-size: 18px;
            line-height: 23px;
        }
        @media(max-width:500px){
            font-size: 18px;
            line-height: 23px;

        }
    }
    span {
        font-style: normal;
        /* black */
        color: #161616;
        @media(max-width:1600px){
            font-size: 18px;
            line-height: 23px;

        }
        @media(max-width:500px){
            font-size: 18px;
            line-height: 23px;

        }
    }
    p , .text{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
       
    @media(max-width:1600px){
            font-size: 18px;
            line-height: 23px;
            margin : 40px  0 ;

        }
        @media(max-width:1050px){
            font-size: 18px;
            line-height: 23px;
            margin : 40px  0 ;
            max-width:280px;

        }
        @media(max-width:500px){
            margin:0;
            font-size: 14px;
            line-height: 18px;
            width: 335px;
    }   
        /* black */

        color: #161616;

    }}
`
export const NewP = styled.p`
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
       
    @media(max-width:1600px){
            font-size: 18px;
            line-height: 23px;
            margin : 40px  0 ;

        }
        @media(max-width:1050px){
            font-size: 18px;
            line-height: 23px;
            margin : 40px  0 ;
            max-width:280px;

        }
        @media(max-width:500px){
            margin:0;
            font-size: 14px;
            line-height: 18px;
            width: 335px;
    }   
        /* black */

        color: #161616;
`
export const NewTit = styled.h2 `
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 45px;
        margin: 0;
        color: #161616;
        @media(max-width:1600px){
            font-size: 18px;
            line-height: 23px;
        }
        @media(max-width:500px){
            font-size: 18px;
            line-height: 23px;

        }
`

export const NewsThumbs = styled.div`
    width: 360px;
    border-top: 5px solid  #C4C4C4;
    color: #161616;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        cursor: pointer;
        /* black */

        color: #161616;
        width: 199px;
        opacity: 0.5;

    }
    @media(max-width:1440px){
    width: 260px;

    }
`
export const Bron = styled.a`
    display: flex;
    align-items: center;
    height: 130px;
    width: 130px;
    text-align: center;
    justify-content: center;
    background: transparent;
    border: 1px solid #000;
    margin: 42px auto;
    border-radius: 50%;
    cursor: pointer;
    font-style: normal;
    position: relative;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #000;
    bottom: 35px;
    left: 218px;
    &:hover {
        color: #EC4D19  ;
        border: 1px solid #EC4D19;
    }
    @media(max-width:1380px){
        left: 208px;

    }
    @media(max-width:500px){
        display: none;
    }
    `