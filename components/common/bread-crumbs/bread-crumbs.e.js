import styled from "styled-components";

export  const BodyB = styled.div`
    position: relative;
    @media(max-width:500px){
        display:none;
    }
`
export const BreadCrumbBody = styled.div`
    display:flex;
    position : absolute ;
    top :110px ;
    a {
        color:#000;
        font-size:18px;
        /* margin: 0 5px ; */
        &:hover {
            color:#EC4D19;
        }
        &::before {
        /* content : '>'; */
        margin: 0 10px ;


       
        
        
    }
    span {
        margin: 0 10px ;
       
    }
    }
    
    .glav::before {
        content : '' !important;
        margin: 0px !important ;

        }
   
`