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
export const Navbar_link = styled(Link)` 
    color:rgb(63,213,211);
    font-size: 18px;
    text-decoration: none;
    &:active{
        color: black;
    }
`
export const Navbar_text = styled.h1` 
    font-size: 40px;
    font-weight: 550;
`
export const Grid = styled.div` 
    display: grid;
    grid-template-columns: 60% 30%;
    box-sizing: border-box;
    gap: 100px;
`
export const Cards = styled.div` 

`
export const Card = styled.div` 
  border-bottom: 2px solid rgb(156,145,156,0.2);
  margin-bottom: 50px;
`
export const Card_img = styled.img`
    width: 100%;
`
export const Card_flex = styled.div` 
    display:flex;
    & button {
        padding:10px 20px;
        margin: auto 20px;
        color: rgb(63,213,211);
        border: 2px solid rgb(63,213,211);
        border-radius: 5px;
        &:hover{
            background-color: rgb(63,213,211);
            color: white;
            transition: all .3s;
        }
    }
`
export const Card_text_one = styled.h1` 
 &:hover{
    color: rgb(160,162,164);
    transition: color .5s;
 }

`
export const Card_text_two = styled.p` 
    color: rgb(180,182,184);
`

export const Right = styled.div` 
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
`
export const Text_one = styled.p` 
    color:rgb(63,213,211);
`
export const List_item = styled.div` 
    font-size: 20px;
    border-bottom: ${({end})=>end ? 'none':"1px solid rgb(183,182,182)"};
    padding: 18px 0;
    &:hover {
        color:rgb(182,183,182);
    }
`
export const News = styled.div` 
    /* display: flex;
    align-content: center;
    justify-content: center; */
    padding: 30px;
    text-align: center; 
    background: rgb(225,249,248);

`
export const Icon = styled(Newsletter)`
    color :rgb(169,142,237);
    width: 80px;
`
export const New_text_one =styled.div` 
    font-size:30px;
`
export const New_text_two =styled.div` 
    font-size:16px;
    color:rgb(132,135,135);
    margin-top: 10px;
`