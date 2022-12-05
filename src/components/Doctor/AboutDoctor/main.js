import styled from 'styled-components'
import { CheckLg } from '@styled-icons/bootstrap/CheckLg';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import  {Twitter }from '@styled-icons/boxicons-logos/Twitter';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import { Link } from "react-router-dom";


export const Navbar = styled.div` 
    width:90%;
    margin:20px auto;
`
export const NavbarLink = styled(Link)` 
    font-size: 16px;
    margin:20px 0;
    padding:10px 0;
`
export const Card = styled.div` 
    width:60%;
    margin: auto;
    display: grid;
    grid-template-columns: 50% 50%;    
    border:  1px solid  rgba(121,119,123, 0.3); 
    border-radius: 5px;
    font-family:Arial, Helvetica, sans-serif;
    @media(max-width:768px){
        width:90%;
        grid-template-columns: 100%;
    }
`
export const Img = styled.img` 
    width: 100%;
`
export const Texts = styled.div` 
    padding: 30px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;

`
export const TextOne = styled.p` 
    font-size: 25px;    
    font-weight: 700;
    margin: 0;
    `
export const TextTwo = styled.p` 
    margin: 10px 0 ;
    font-size: 18px;
    color: rgb(156,145,165);
`
export const List = styled.div` 
    display: flex;
    width: 100%;
    padding: 10px 0;
    border-bottom:  1px solid  rgba(121,119,123, 0.3); 
`
export const Icon = styled(CheckLg)` 
    width:15px;
    color:rgb(63,213,211);
    margin: 10px;
`
export const List_text = styled.p`
    align-self: bottom;
    font-size: 15px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    margin: 10px 0px;   
`
export const Button = styled.div`
    margin-top:auto;    
    margin-bottom:20px;
    display:flex;
    align-items:center;
    font-size:20px;
    color:rgb(63,213,211);
    cursor: pointer;
    &:hover {
        color:rgb(210,138,229);
    }
    @media(max-width:768px){
        margin-top:20px;
    }
`
export const Text = styled.div` 
    width:80%;
    margin:100px auto;
    font-size:18px;
    color:rgb(84,115,123);
    @media(max-width:420px){
        font-size:16px;
    }
`
export const Facebooks = styled(Facebook) ` 
    color: rgb(25,49,57);
    width: 40px;
    padding:10px;
    border:1px solid grey;
    border-radius:50%;
`
export const Instagrams = styled(Instagram) ` 
    color: rgb(25,49,57);
    width: 40px;
    padding:10px;
    border:1px solid grey;
    border-radius:50%;
    margin-left:10px;
    `
export const Twitters = styled(Twitter) ` 
    color: rgb(25,49,57);
    width: 40px;
    padding:10px;
    border:1px solid grey;
    border-radius:50%;
    margin-left:10px;

`