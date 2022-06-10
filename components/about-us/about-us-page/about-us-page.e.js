import styled from "styled-components";



export const AboutContent = styled.div`
    margin: 188px 0;
    display: flex;
    justify-content: space-between;
    @media(max-width:500px){
        flex-direction:column-reverse;
        margin:0;
    }
`
export const AboutText   = styled.div`
    width: 850px;
    min-height: 425px;
    border-bottom: 1px solid #000 ;
    @media(max-width:1650px){
        width:545px;
    }
    @media(max-width:1380px){
        border-bottom: 0px solid #000 ;

    }
    @media(max-width:500px){
        width:335px;
    }
    h2 {
        @media(max-width:416px){
            margin: 15px 0;
        }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        /* border-top : 1px solid #000; */
        margin: 0;
        padding: 0;
        line-height: 30px;
        color: #000000;
        @media(max-width:1650px){
            font-size: 20px;
            line-height: 28px;
    }
        @media(max-width:500px){
            font-size: 14px;
            line-height: 18px;
    }
    }
    /* .about_text {
        border-top:1px solid #000;
    } */
`
export const ImBlock = styled.div`
    margin: 120px  0 0 0;
    width: 850px;
    @media(max-width:1450px){
        width:775px;
    }
    @media(max-width:500px){
        width:335px;
    }
`
export const ChesNiy = styled.div`
    padding: 40px 0 ;
    border-top: 1px solid #000;
    /* border-bottom: 1px solid #000; */
    display: flex;
    justify-content: space-around;
    @media(max-width:1600px){
        align-items:center;

        justify-content:space-between;
    }
    margin: 40px 0 140px 0;
    @media(max-width:500px){
        flex-direction:column;
    }
    .ramka {
        @media(max-width:1600px){
            margin:30px 20px 0 0;

            width:649px;
            height:481px;
        }
        @media(max-width:500px){

            width:335px;
            height:160px;
        }
    }
`
export const Punkt = styled.div`
    width: 800px;

    @media(max-width:500px){
       width: 334px;
    }
    @media(max-width:416px){
        margin: 44px 0 0 0px;
    }
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
        @media(max-width:500px){
            font-size: 18px;
            line-height: 23px;
            margin: 94px 0 10px 0;
        }
    }
`

export const PunktBlock = styled.div`
    width: 850px;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    @media(max-width:1600px){
    width: 650px;
    align-items:center;
    margin: 0 10px ;
    }
    @media(max-width:500px){
        width:335px
    }
    &:hover {
        div {
            color: #EC4D19;

        }
    }
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;  
        margin: 0;

        color: #000000;
        @media(max-width:1600px){
            font-size: 24px;
            line-height: 28px;
            width:775px
    }
        @media(max-width:500px){
            display: none;
    }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        color: #000000;
        width: 748px;
        @media(max-width:1600px){
            font-size: 18px;
            line-height: 20px;
            width:575px
    }
        @media(max-width:500px){
            font-size: 14px;
            line-height: 18px;
            width:275px;
    }
    }
   
 
`
export const Circleel = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid #000;
    text-align: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    align-items: center;
    color: #C4C4C4;
    &:hover {
        color: #EC4D19;
    }
    @media(max-width:1600px){
        width:50px;
        height:50px;
        font-size: 46px;

    }
    @media(max-width:500px){
        width:50px;
        height:50px;
        font-size: 36px;
        line-height: 42px;
    }
`