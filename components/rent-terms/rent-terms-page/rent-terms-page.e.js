import styled from "styled-components";



export const  HeroRent   = styled.div`
    margin: 188px  0 50px 0 ;
    width: 100%;
    @media(max-width:500px){
        margin: 88px  0 50px 0 ;

    }
`
export const TerminBlock = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin: 0 0 140px 0;
    @media(max-width:500px){
        flex-direction:column;
    }
`
export const TerKvadtar = styled.div`
    width: 561px;
    padding: 30px 20px;
    min-height: 391px;

    border: 1px solid #000;
    @media(max-width:1600px){
        width: 438px;
        padding: 30px 20px;
        min-height: 305px;
    }
    @media(max-width:1024px){
        width:342px
    }
    @media(max-width:500px){
        margin: 0px auto 50px auto;

    }
    h2 {
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        /* black */
        margin: 10px 0;
        color: #161616;
        @media(max-width:1650px){
            font-size: 24px;
            line-height: 23px;
            margin: 0;
        }
    }
    p {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;

        color: #000000;
        @media(max-width:1650px){
            font-size: 20px;
            /* line-height: 30px; */
        }
    }
    ul {
        li {
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 23px;
            /* identical to box height */


            color: #000000;
            @media(max-width:1450px){
                font-size: 18px;
                /* line-height: 18px; */
        }
        }
    }
`
export const Propbeg = styled.div`
    width: 1139px;
    /* border-bottom: 1px solid #000; */
    min-height: 350px;
    @media(max-width:1650px){
        width: 972px;
    }
    @media(max-width:1380px){
        width: 772px;
    }
    @media(max-width:1029px){
        width: 572px;
    }
    @media(max-width:424px){
        max-width:330px;    
    }
    h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 60px;
        margin: 0;
        /* black */

        color: #161616;
        padding-bottom: 26px;
        border-bottom: 1px solid #000;
        @media(max-width:1650px){
            font-size: 36px;
            line-height: 30px;
        }
    }
    h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        margin: 10px 0 0 0;
        /* black */

        color: #161616;
        @media(max-width:150px){
            font-size: 20px;
            /* line-height: 23px; */
        }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;

        /* black */

        color: #161616;
        @media(max-width:1600px){
            font-size: 18px;

            /* line-height: 18px; */
        }

    }
`

export const InsurseBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    /* align-items: center; */
    @media(max-width:500px){
        flex-direction:column;
    }
`
export const ContentIns = styled.div`
    /* border-bottom: 1px solid #000; */
    border-top:1px solid #000 ;
    min-height: 430px;
    max-width: 850px;
    @media(max-width:1650px){
        width:500px;
    }
    @media(max-width:500px){
        width:335px;
        margin:0 0 50px 0;
    }
    h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 60px;

        /* black */

        color: #161616;
        padding-bottom: 50px;

        margin: 0;
        @media(max-width:1450px){
            font-size: 24px;
            line-height: 30px;
        }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;

        color: #000000;
        @media(max-width:1600px){
            font-size: 18.425px;
            line-height: 23px;

        }
    }
`
export const Imgblock  = styled.div`
@media(max-width:1650px){
        width:716px;
    }
    @media(max-widtH:1050px){
        width:416px;
    }
    @media(max-width:390px){
        display: none;
    }
`