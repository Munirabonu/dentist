import styled from 'styled-components';
import { CheckLg } from '@styled-icons/bootstrap/CheckLg';

export const Container = styled.div` 
    width:80%;
    margin:100px auto;
    box-sizing:border-box;
    border:2px solid rgba(123,122,122,0.2);
    border-radius:5px;
    padding:50px;
    @media(max-width:425px){
        padding: 15px;
        width:90%;
    }
`
export const Icons = styled.div` 
    display:flex;
`
export const Icon = styled.div` 
    width:20px;
    height:20px;
    background: blueviolet;
    align-self:center;
`
export const Icon_text = styled.p` 
    color:rgb(63,213,211);
    font-weight: 700;
`
export const Grid = styled.div` 
    display:grid;
    grid-template-columns: 50% 50%;
    gap:100px;
    @media (max-width:1024px) {
    gap: 50px;
    }
    @media (max-width:910px) {
    grid-template-columns: 100%;
    }
`
export const Grid_item = styled.div` 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color:rgb(25,49,57);
`
export const Text_one = styled.div` 
    font-size:28px;
    @media(max-width:425px){
    font-size:20px;
    }

`
export const Text_two = styled.div` 
    font-size: 13px;
    margin-top: 20px;
    color:rgb(120,128,120);
`
export const Flex = styled.div` 
    display:flex;
    align-items: center;
`
export const Flex_icon = styled(CheckLg)`
    width:25px;
    height:25px;
    color:rgb(169,142,237);
    margin-right: 10px;
    padding:5px;
    box-sizing: border-box;
    border:1px solid rgb(169,142,237);
    border-radius:50%;
`
export const Flex_text = styled.p` 
    color: rgb(128,120,120);
`