import styled from "styled-components";
import {StarFill} from '@styled-icons/bootstrap/StarFill'
export const Container = styled.div` 
    width:90%;
    margin:100px auto;
`
export const Navbar = styled.div`
    text-align: center;
`
export const NavbarTextOne = styled.p`
    font-size:30px;
    margin:10px 0;
`
export const NavbarTextTwo = styled.p`
    font-size:15px;
    margin:20px 0;
`

export const Card = styled.div` 
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:100px;
    text-align:center;
    @media (max-width:1024px) {
    grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:520px) {
    grid-template-columns: auto;
    }
    
`
export const CardItem = styled.div` 
    width:90%;
    margin:0 auto;
`
export const Icon = styled(StarFill)` 
    width:15px;
    height:15px;
    color:blueviolet;
    display: inline-block;
    margin:10px 0 10px 10px;
`
export const Text = styled.p` 
    font-size: 14px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    text-align:center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const List = styled.div`
    display:flex;
    justify-content: center;
    margin-top:20px;
`
export const ListAvatar = styled.img` 
    border-radius:50%;
    width:50px;
    height:50px;
    /* background:blue; */
    margin-right:20px;
`
export const ListText = styled.p` 

`