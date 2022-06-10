import  styled from 'styled-components'

export const FooterBlock = styled.footer`
    background: #161616;
    padding: 40px 0 ;
`
export  const FooterBlocks = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width:500px){
        flex-direction:column;
    }
`
export const FooterNav = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 634px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    flex-wrap: wrap;
    margin:40px 0;

    color: #FFFFFF;
    a{
        margin: 10px 20px 0  0;
        
        &:hover{color:  #EC4D19;}
    }
    @media(max-width:500px){
        width: 300px;
    }
`
export const FooterContacts = styled.div`
    width: 255px;

    h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
    }   
    p {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        margin:0 0 8px   0 ;

        color: #FFFFFF;
    }
`
export const AnswerBlock = styled.div`
    width: 308px;
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
    }
    h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #FFFFFF;
        padding: 0 0 19px 0;
        border-bottom: 1px solid #fff;
    }
    .social {
        display: flex;
        justify-content: space-between;
    }
`

export const Circle = styled.p`
  width: 40px;
  height: 40px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */
  color: #000000;
  border-radius: 50%;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &.active {
    color: #fff;
    background: #ec4d19;
  }
  &.lang {
    &:hover {
      color: #fff;
      background: #ec4d19;
    }
  }
  
`;
export const ElJamalCopyKhan = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    text-align: right;

    /* белый */

    color: #FFFFFF;

    .khan {
        display: none;
        margin-top: 10px;
    }
`