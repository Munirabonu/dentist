import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar_page = styled.div `
    display: flex;
    `
    export const Drop = styled.div` 
        display: none;
        @media(max-width:1024px){
            display: flex;
        }
    `
export const Containers = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
`
export const Link = styled(NavLink)`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 26px;
    color: grey;
    text-decoration: none;
    &:hover{
    }
`;
export const Img = styled.div `
    display: flex;
`
export const Icon =styled.div`
    alt: 'asss';
    width: 100px;
    position: relative;
`
export const Icon_text=styled.div`
    font-family:'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 25px;
    color: black;
`
export const Text = styled.p `
text-decoration: none;
    color:grey;
    font-size: 15px;
    margin: 0%;
`
export const Ul = styled.div `
    display: flex;
    margin: 20px 0;
    @media(max-width:1024px){
        display:none;
    }
`
export const Item = styled.div `
    padding:  0 20px;
    color: grey;
    font-size: 18px;
`
export const activeStyle = {
    color: 'rgb(92, 94, 96)',
    fontWeight:700
  };