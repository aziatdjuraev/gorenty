import styled from "styled-components";

export const ParkHero = styled.div`
    max-width: 100%;
    max-height: 450px;
    margin: 159px 0 40px 0 ;
    display: flex;
    justify-content:space-between;
    @media(max-width:500px){
        flex-direction: column;
        margin: 79px 0 40px 0 ;

    }
    .ramka_ {
        max-width:900px;
        max-height:500px;
        overflow:hidden;
        img {
            width: 100%;
        }
    }
    h3 {
        font-weight: bold;
        font-size: 48px;
        line-height: 100%;
        /* identical to box height, or 48px */

        text-transform: capitalize;

        color: #000000;
    @media(max-width:1600px){
        font-size: 33px;
        }
    @media(max-width:500px){
        font-size: 24px;
        margin: 10px 0;
        }
    img {
        width: 100%;
        height: 100%;
    }
    }
    h5 {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;

        /* black */

        color: #161616;
        @media(max-width:500px){
        font-size: 18px;
        margin: 10px 0;
    }
    }
    p {
        font-size: 24px;
        line-height: 30px;
        @media(max-width:500px){
        font-size: 18px;
        margin: 10px 0;
    }
    }
    span {
        color: #EC4D19;
    }
    
`
// filter

export const FliterCars  = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1090px;
    @media(max-width:450px ){
        width: 402px;
        justify-content: flex-start;

        flex-wrap: wrap;
    }
    @media(max-width:390px){
        width: 351px;

    }

`
export const FilterType = styled.p`
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
    color: #000000;

    &.active {
        color:  #EC4D19;
    }
    &:hover{
        color:  #EC4D19;
    }
    @media(max-width:450px){
        font-size: 16px;
        line-height: 20px;
        margin-left:15px ;
    }
`

// cars card

export const CardBlock = styled.div`
    margin: 40px 0 100px 0 ;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;

    @media(max-width:1680px){
        /* justify-content: space-around; */
    margin: 40px 0 100px 43px;

    }
    @media(max-width:1600px){
        margin: 40px 0 100px 83px;
    }
    @media(max-width:1380px){
        /* justify-content: space-around; */
    margin: 40px 0 100px 25px;

    }
    @media(max-width:500px){
        margin: 40px 0 100px 6px;
    }
    @media(max-width:416px){
        margin: 38px 0 87px 16px;
    }
    @media(max-width:395px){
        margin: 38px 0 87px 16px;

    }
`
export const CarCard = styled.div`
    margin: 0 36px 40px 0;
    padding: 20px 30px ;
    width: 400px;
    border: 1px solid #000;
    height: 425px;
    cursor: pointer;
    /* text-align: center; */
    @media(max-width:1366px){
        margin: 10px 10px;
        max-width: 330px;
    }
    @media(max-width:500px){
        max-width: 338px;
        margin: 10px auto;
    }
    @media(max-width:390px){
        width: 308px;
    }
    &:hover{
        border: 1px solid #EC4D19;
    }
    div {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        p:last-child {
            text-align: right;
        }
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */
        max-width: 150px;
        margin: 0;
        padding: 0;
        color: #000000;
    }
    span {
        color: #EC4D19;
    }
`
export const CarName = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    /* identical to box height, or 24px */

    text-transform: capitalize;
    margin:  20px 0 34px 0;
    /* black */

    color: #161616;

`
export const CarPrice = styled.h5`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 5px 0;
    /* black */

    color: #161616;

`
