import styled from "styled-components";
// import {StarFill} from '@styled-icons/bootstrap/StarFill'
import icon from '../../../img/Icon/dentist-chair-1.svg'
export const Container = styled.div` 
    width:90%;
    margin:100px auto;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
`
export const Navbar = styled.div`
    width: 30%;
    margin:auto;
    @media(max-width:1024px){
        width: 100%;
    }
`
export const NavbarTextOne = styled.h3`
    font-size:20px;
    margin:10px 0;
    color: rgb(63,213,211);
`
export const NavbarText_two = styled.p`
    font-weight: 500;
    font-size:30px;

`

export const Card = styled.div` 
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:100px;
    text-align:center;
    @media (max-width:1024px) {
    grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:520px) {
    grid-template-columns: auto;
    }
    
`
export const Card_item = styled.div` 
    width:90%;
    margin:0 auto;
    /* justify-content: center; */
`
export const Icon = styled.div` 
    width:100px;
    height: 100px;
    color:blueviolet;
    background-image: url(${icon});
    background-size: cover;
    margin: auto;
    `
export const Text = styled.p`
    font-weight: 600;
    font-size:25px;
`
export const Texts = styled.p` 
    font-size: 17px;
    word-spacing: 5px;
    color: rgb(121,119,123);
    text-align:center;
`
export const Button = styled.button`
    margin-top:50px;
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 12px ;
    font-weight: 700;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(169,142,237);
    }
`