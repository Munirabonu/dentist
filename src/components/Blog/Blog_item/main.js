import styled from "styled-components";
import { Link } from "react-router-dom";
import {Newsletter} from '@styled-icons/entypo/Newsletter'

export const Container = styled.div`  
    width: 95%;
    margin: 20px auto;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(25,49,57);
`
export const Navbar = styled.div` 

`
export const NavbarLink = styled(Link)` 
    font-size: 16px;
`
export const NavbarText = styled.h1` 
    font-size: 40px;
    font-weight: 550;
`
export const Grid = styled.div` 
    display: grid;
    grid-template-columns: 60% 30%;
    box-sizing: border-box;
    gap: 100px;
    @media(max-width:768px){
        grid-template-columns: 100%;
    }
`
export const Cards = styled.div` 

`
export const Card = styled.div` 
  border-bottom: 2px solid rgb(156,145,156,0.2);
  margin-bottom: 50px;
`
export const CardImg = styled.img`
    width: 100%;
`
export const CardFlex = styled.div` 
    display:flex;
    & button {
        background: white;
        padding:8px 20px;
        margin: 20px 0;
        color: rgb(63,213,211);
        border: 1px solid rgb(63,213,211);
        border-radius: 5px;
        &:hover{
            background-color: rgb(63,213,211);
            color: white;
        }
    }
`
export const CardTextOne = styled.h1` 
    &:hover{
       color: rgb(160,162,164);
       transition: color .5s;
    }
    @media(max-width:425px){
        font-size: 20px;
    }
`
export const CardTextTwo = styled.p` 
    color: rgb(180,182,184);
    font-size:18px;
`

export const Right = styled.div` 
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
`
export const TextOne = styled.p` 
    color:rgb(63,213,211);
`
export const ListItem = styled.div` 
    font-size: 20px;
    border-bottom: ${({end})=>end ? 'none':"1px solid rgb(183,182,182)"};
    padding: 18px 0;
    &:hover {
        color:rgb(182,183,182);
    }
    @media(max-width:425px){
        font-size: 18px;
    }
`
export const News = styled.div` 
    padding: 30px;
    text-align: center; 
    background: rgb(225,249,248);

`
export const Icon = styled(Newsletter)`
    color :rgb(169,142,237);
    width: 80px;
`
export const NewTextOne =styled.div` 
    font-size:30px;
`
export const NewTextTwo =styled.div` 
    font-size:16px;
    color:rgb(132,135,135);
    margin-top: 10px;
`
export const Button = styled.div`
    margin:30px 0;    
    display:flex;
    align-items:center;
    font-size:18px;
    font-weight:500;
    color:rgb(63,213,211);
    cursor: pointer;
    &:hover {
        color:rgb(210,138,229);
    }
`
export const ButtonText = styled.div` 
    font-size: 35px;
    display:flex;
    align-items:center;
    margin-left:15px;
`