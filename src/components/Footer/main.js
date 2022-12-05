import styled from 'styled-components'
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import  {Twitter }from '@styled-icons/boxicons-logos/Twitter';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import { NavLink } from 'react-router-dom';
export const Container = styled.div` 
    width:90%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap:50px;
    font-size: 20px;
    box-sizing: border-box;
    @media (max-width:1024px){
    grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:768px){
    grid-template-columns: 100%;
    }
    `
export const Recurs = styled.div` 
`
export const Contact = styled.div` 
`
export const Location = styled.div` 
    width: 100%;
`
export const Opens = styled.div`  
`
export const Items = styled.div` 
    display: grid;
    grid-template-columns: repeat(2,1fr); 
    a {
        color: black;
    }   
`
export const Item = styled.div` 
    font-size: 18px;
    margin-top: 15px;
    text-decoration: non;
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
export const activeStyle = {
    color: 'rgb(12, 14, 16)',
    fontWeight:800

};
export const Flex = styled.div` 
    display: flex;
    justify-content: space-between;
`
export const FlexItem = styled.p` 
    font-size: 18px;
    margin-top: 15px;
    color:${(props) => props.active ? "rgb(120,128,120)" : "rgb(132, 138, 143)"} ;
`

export const FooterBottom = styled.div`
    width: 90%;
    margin: 0px auto;
    padding: 10px 0;
    border-top: 2px solid rgba(160,168,160,0.5);
    display: flex;
    justify-content: space-between;
    color: rgb(120,128,120);
    @media(max-width:425px){
        flex-direction: column-reverse;
        text-align: center;
    }
`
export const Icons = styled.div ` 
    
`
export const Facebooks = styled(Facebook) ` 
    color: rgb(63,213,211);
    width: 25px;
    margin-left: 10px;
`
export const Instagrams = styled(Instagram) ` 
    color: rgb(63,213,211);
    width: 25px;
    margin-left: 10px;
`
export const Twitters = styled(Twitter) ` 
    color: rgb(63,213,211);
    width: 25px;
    margin-left: 10px;
`