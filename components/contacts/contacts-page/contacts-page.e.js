import styled from "styled-components";


export const ContactsBody = styled.div`
    margin: 187px 0 40px 0 ;
    @media(max-width:450px){
        margin: 80px 0 40px 0 ;

    }
`

export const AdresBlock = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    @media(max-width:1600px){
        width:100%;
        max-width:1339px;
    }
    @media(max-width:500px){
        flex-direction: column;
    }

`
export const MapBlock  = styled.div`
    width: 100%;
    max-width: 875px;
    height: 671px;
    background: grey;
    @media(max-width:1600px){
            max-width: 669px;
            height: 513px;
        }
        @media(max-width:1400px){
            max-width: 620px;

        }
    iframe {
        border: none ;
        @media(max-width:1600px){
            width: 669px;
            height: 513px;
        }
        @media(max-width:1400px){
            max-width: 620px;
            height: 513px;
        }
        @media(max-width:450px){
            width: 335px;
            height: 240px;
        }
    }
    @media(max-width:450px){
            width: 335px;
            height: 240px;
            margin:  0 auto;
        }

`
export const Adress = styled.div`
    width: 100%;
    max-width: 725px;
    padding-bottom: 70px;
    border-bottom: 1px solid #000;
    
    @media(max-width:1600px){
        max-width: 555px;
    }
    @media(max-width:1400px){
        max-width: 505px;
    }   
    @media(max-width:450px){
        margin: 70px auto 0 auto;
        width: 335px;
    }
    h3 { 
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        margin: 2px 0;
        /* black */

        color: #161616;
        @media(max-width:1600px){
            font-size: 27px;
            line-height: 35px;
        }
        @media(max-width:450px){
            font-size: 18px;
            line-height: 23px;
            margin: 10px 0;
        }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        max-width: 213px;
        /* black */
        margin: 20px 0;
        color: #161616;
        text-align: left;
        @media(max-width:450px){
            font-size: 14px;
            line-height: 18px;
            margin: 5px 0;
        }
        @media(max-width:1600px){
            font-size: 18.375px;
            line-height: 23px;
        }
    }
`
export const GoRentyC = styled.div`
    width: 200px;
    height: 200px;
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 45%;
    top: 32%;
    bottom: 0;
    @media(max-width:1600px){
        width: 153px;
        height: 153px;
        left: 44%; 
        }
    @media(max-width:450px){
        width: 100px;
        height: 100px;
        top: 25%;
        left: 36%;
        }
`