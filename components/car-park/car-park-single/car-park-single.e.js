import styled from "styled-components";

export const HeroBody = styled.div`
    margin: 160px 0 0 0;
    @media(max-width:1500px){
    margin: 140px 0 0 0;

    }
    @media(max-width:500px){
    margin: 100px 0 0 0;

    }
`
export const CarName = styled.h1 `
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 90px;
    text-align: center;
    color: #000000;
    @media(max-width:1500px){
        font-size: 36px;
        line-height: 45px;

    }
`
export const Car = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width:500px){
        flex-direction:column;
    }
`
export const CarGaller =  styled.div`
    display: flex;
    flex-direction : column;
    justify-content: space-between;
    @media(max-width:500px){
        display: none;
    }
    
    .ramka_ {
        margin: 0 0 20px 0;
        cursor : pointer;
        width: 330px;
        height: 161px;
        
        img{
            width: 100%;
            height: 100%;
        }
    }
`
export const ThisCar = styled.div`
    width: 950px;
    @media(max-width:500px){
        width: 335px;
    }
`

export const CarPriseBron = styled.div`
    width: 370px;
    text-align:center;
    span {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;

        color: #EC4D19;
    }
    h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;

        color: #000000;

    }
`
export const CarPrise = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    padding-bottom:10px;
    border-bottom:1px solid #000;
    color: #000000;
    @media(max-width:1050px){
        font-size: 24px;
        line-height: 30px;
    }
`   
export const CircleBron = styled.div`
    text-align:center;

    
    width: 150px;
    height: 150px;
    margin: 40px auto;
    border: 1px solid #000;
    border-radius :50%;
    text-align:center;
    display: flex;
    align-items:center;
    cursor: pointer;
    &:hover{
        border: 2px solid #EC4D19;
        color: #EC4D19;
    }
    h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        margin: 0 auto;
        line-height: 25px;
        text-align: center;
    }
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
         color: #EC4D19;
    }
`


export const Specifications = styled.div`
    margin: 40px 0;
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        text-align:center;
        color: #000000;

    }
`
export const SpecificationsBlock = styled.div`
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
    @media(max-width:500px){
        flex-wrap:wrap
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
    @media(max-width:500px){
        margin:5px;
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
        width: 170px;
        /* &.active{
            color: #EC4D19 ;

        } */
`

export const TextBlock = styled.div`
    margin:140px 0;
    display: flex;
    /* align-items:center; */
    justify-content:space-between;
    @media(max-width:1600px){
        margin:140px  0 0 0;

    }
    @media(max-width:500px){
        flex-wrap:wrap;

    }
`
export const Block1  = styled.div`
    width: 770px;
    text-align:left;
    @media(max-width:1600px){
        width:550px;
    }
    @media(max-width:1400px){
            max-width: 630px;
        }
    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        color: #161616;
        
        @media(max-width:1500px){
            font-size: 27.5215px;
            line-height: 35px;
        }
        @media(max-width:1024px){
            font-size: 18px;
            line-height: 24px;
        }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        color: #161616;
        @media(max-width:1500px){
            font-size: 18.3477px;
            line-height: 23px;
            max-width: 607px;
        }
    }
`
export const Block2 = styled.div`
    width: 930px;
    @media(max-width:1600px){
    width: 730px;

    }
    @media(max-width:1400px){
            max-width: 630px;
        }
    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        margin: 50px 0 40px 0;
        color: #161616;
        @media(max-width:1500px){
            font-size: 18px;
            line-height: 24px;
        }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        color: #161616;
        /* padding-bottom:40px; */
        /* border-bottom: 1px solid #000;  */
        /* margin: 40px 0; */
        @media(max-width:1500px){
            font-size: 18.3477px;
            line-height: 23px;
        }
       
    }
`
export const ImgBlock =styled.div`
    /* @media(max-width:1600px){
        width:600px;
        
        height:259px;
    } */
`
