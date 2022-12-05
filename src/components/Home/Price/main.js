import styled from 'styled-components';
import { CheckLg } from '@styled-icons/bootstrap/CheckLg';
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"

export const HomePage = styled.div`
    margin-top: 80px;
    box-sizing: border-box;
    background: rgb(238,231,255);
    @media(max-width:850px){
        height:auto;
    }
`
export const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    padding:50px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 100%;
    @media(max-width:1024px) {
        grid-template-columns: 100%;
        text-align: center;
        
    }
    @media(max-width:425px){
        width:90%;
        padding: 20px;
    }
    @media(max-width:425px){
        width:100%;
        padding: 20px;
    }
`
export const Navbar = styled.div`
    display:grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-content: bottom;
    margin-bottom: 40px;

    @media (max-width:620px) {
    grid-template-columns: auto;
    }

`
export const NavbarText = styled.div`
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media(max-width:1024px) {
       width: 100%;
    }
`

export const NavbarTextOne = styled.p`
    font-size: 30px;
    margin-bottom: 10px;
`
export const NavbarTextTwo = styled.p`
    font-size: 16px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    margin: 0;
`
export const Button = styled.button`
    padding: 15px 50px;
    background: rgb(169,142,237);
    color: white;
    border: none;
    margin: 20px;
    border-radius: 5px;
    font-size: 12px ;
    font-weight: 700;
    transition: .3s background-color;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(63,213,211);
        transition: .3s background-color;
    }      
`
export const Card = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:20px 30px;
    @media(max-width:768px) {
        grid-template-columns: 100%;
    }
    `
export const CardItem = styled.div`
    border: 1px solid  rgba(121,119,123, 0.2);
    border-radius: 6px;
    padding:30px;
    background: white;
`
export const Img = styled.img`
    width:50px;
    height:60px;
`
export const Text = styled.h2`
    font-size: 27px;
`
export const Flex = styled.div`
    width: 100%;
    margin:0 auto;
    display: flex;
    align-items: center;
    text-align: left;
    border-bottom:${props => props.border ? "none" : "1px solid  rgba(121,119,123, 0.5)"}; 
    `
export const FlexIcon = styled(CheckLg)`
    width:12px;
    height:12px;
    color:rgb(63,213,211);
    margin: 10px 0;
    `
export const FlexText = styled.p`
    align-self: bottom;
    font-size: 13px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    margin: 10px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const FlexPrice = styled.p`
    font-size: 13px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    margin-left: auto;
`
export const Footer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
`
export const FooterText = styled.div` 
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