import styled from 'styled-components';
import {CheckLg} from '@styled-icons/bootstrap/CheckLg';
import {ArrowRightShort} from "@styled-icons/bootstrap/ArrowRightShort"

export const HomePage = styled.div`
    box-sizing: border-box;
    background: rgb(238,231,255);
    @media(max-width:850px){
        height:auto;
    }
    `
export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    padding:50px;
    box-sizing: border-box;
    @media(max-width:425px){
        padding: 20px;
    }
`
export const Navbar = styled.div`
    text-align: center;

`
export const NavbarTextOne = styled.p`
    font-size: 30px;
    margin-bottom: 10px;
`
export const NavbarTextTwo = styled.p`
    font-size: 16px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    margin-bottom: 50px;
`
export const Card = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:30px;
    @media(max-width:768px) {
        grid-template-columns: 100%;
    }
    `
export const CardItem = styled.div`
    border: 1px solid  rgba(121,119,123, 0.5);
    border-radius: 6px;
    padding:50px;
    background: white;
    
    @media(max-width:375px){
        padding: 20px;
    }
`
export const Img = styled.img`
    width:50px;
    height:60px;
    background: rgb(63,213,211);
    
`
export const Text = styled.h2`

`
export const Flex = styled.div`
    width: 100%;
    display: flex;
    text-align: left;
    border-bottom:${props => props.border ? "none" : "1px solid  rgba(121,119,123, 0.2)"}; 
    padding: 5px 0;
    `
export const FlexIcon = styled(CheckLg)`
    width:18px;
    color:rgb(63,213,211);
    margin: 5px 0px;
    `
export const FlexText = styled.p `
    font-size: 17px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    margin-left: 15px;  
`
export const FlexPrice = styled.p`
    font-size: 17px;
    font-weight: 600;
    color: rgb(11,19,31);
    margin-left: auto;   
`
export const Footer = styled.div`
    display: flex;
    justify-content:space-between;
    
`
export const FooterText = styled.p` 
    color:rgb(63,213,211);
    font-size: 17px;
    font-weight: 600;
`
export const FooterBotton = styled(ArrowRightShort)`
    width:35px;
    height:35px;
    color:white;
    background: rgb(63,213,211);
    border-radius: 50%;
    align-self: center;
`