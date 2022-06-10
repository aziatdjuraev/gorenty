import styled from "styled-components";

export const OfferBody = styled.div`
    margin: 197px  0 40px 0;
    @media(max-width:1600px){
        margin: 151px 0 30px;
    }
    @media(max-width:600px){
        margin: 101px 0 30px;
    }
`
export const OfferBlock = styled.div`
    margin: 70px 0;
    display: flex;
    justify-content: space-between;
    @media(max-width:1600px){
        /* align-items:center; */
    }
    @media(max-width:500px){
        flex-direction:column;  
}
`
export const  ImgBlock = styled.div`
    width: 1080px;
    @media(max-width:1600px){
        max-width:826px
    }
    @media(max-width:1380px){
        max-width:768px
    }
    @media(max-width:500px){
        width:335px;
    }

`
export const OfferContent = styled.div`
    width: 620px;
    padding-bottom: 40px;
    border-top: 1px solid #000;
    @media(max-width:500px){
        widtH:335px;
        
    }
@media(max-width:1600px){
    max-width:473px;
    padding-bottom: 0px;

}
    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        margin: 10px 0;

        /* black */

        color: #161616;
        @media(max-width:1600px){
            font-size: 27.5414px;
            line-height: 35px;
        }
        @media(max-width:450px){
            font-size: 26px;

        }

    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;

        /* black */
        margin: 10px 0;
        color: #161616;
        @media(max-width:1600px){
            font-size: 18.3609px;
            line-height: 23px;
        }
        @media(max-width:450px){
            font-size: 16px;

        }
    }
`