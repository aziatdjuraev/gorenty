import styled  from "styled-components";

export const GBlock = styled.div`
    
`

export const AboutBlock = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    margin-bottom: 140px;
    @media(max-width:1600px){
    align-items: inherit;
        
    }
    @media(max-width:500px){
        flex-direction:column;
    }
`
export const AboutImage = styled.div`
    max-width: 875px;
    position: relative;
    @media(max-width:1600px){
        width: 675px;
    }
    @media(max-width:1380px){
        width: 622px;
    }
    @media(max-width:500px){
        width: 335px;
    }
`
export const AboutContent = styled.div`
    width: 725px;
    padding: 0 0 40px  0;
    border-bottom: 1px solid #000;
    @media(max-width:1600px){
        width: 625px;
        margin:40px 0 0 0;
        margin: -29px 0 0 0;
    }
    @media(max-width:1380px){
        width: 585px;
    }
    @media(max-width:500px){
        margin: 25px 0;
    }
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;

        /* black */

        color: #161616;
        @media(max-width:1380px){
            font-size: 25.6125px;
            line-height: 32px;
        }
        @media(max-width:500px){
            font-weight: bold;
            font-size: 18px;
            line-height: 23px;
            color: #161616;

        }
    }
    p {
        max-width: 577px;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;

        /* black */

        color: #161616;
        /* @media(max-width:1380px){
           font-size: 17.075px;
line-height: 21px;
        } */
        @media(max-width:500px){
            width: 335px;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            color: #161616;
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
    @media(max-width:1600px){
        width: 150px;
        height: 150px;
        text-align: center;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        left: 43%;
        top: 198px;
    }
    @media(max-width:1380px){
        top: 168px;
        width: 142.29px;
        height: 142.29px;
    }
    @media(max-width:500px){
        width: 100px;
        height: 100px;
        left: 32%;
        top: 200px;
    }
`
export const Bron = styled.div`
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
    left: 308px;
    @media(max-width:1600px){
        left: 208px;
    }
    @media(max-width:500px){
        left: 0;
        right: 0;
    }
    &:hover {
        color: #EC4D19  ;
        border: 1px solid #EC4D19;
    }
`
