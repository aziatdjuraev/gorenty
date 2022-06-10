import styled from 'styled-components';

export const NavBody = styled.header`
    display: -ms-flexbox;
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    /* background: #000; */
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-width: 1750px;
    padding: 18px 0;
    margin: -45px 0;
    width: 98%;
    z-index: 5;
    top: 55px;
    left: 0;
    right: 0;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 1624px) {
    align-items:center;
  }
  img {
    width:280px;
    height:48px;
    @media(max-width:1600px){
      width:213px;
      height:37px;
    }
  }
`;
export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 971px;
  color: #fff;
  @media (max-width: 1700px) {
    justify-content: space-between;
    width: 860px;
    color: #fff;
  }
  &.darc {
    color: #000000;
  }
`;
export const NavItem = styled.li`
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  list-style: none;
  /* identical to box height */

  transition: 0.2s all linear;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: #ec4d19;
  }
  @media (max-width: 1700px) {
    font-size: 17px;
  }
  @media (max-width: 1490px) {
    font-size: 16px;
  }
`;
export const Apps = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 160px;
  @media (max-width: 1500px) {
    width: 207px;
  justify-content: space-around;

  }
  &.social {
    @media(max-width:1600px){
      display: none;
    }
  }
`;
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
export const NavBurger = styled.div`
  display: none;
  background-color: #ffffff9c;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: absolute;
    z-index: 5;
    width: 100%;
  }
`;
