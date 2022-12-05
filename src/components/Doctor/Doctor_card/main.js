import styled from 'styled-components'
import { CheckLg } from '@styled-icons/bootstrap/CheckLg';

export const Container = styled.div` 
    width: 95%;
    margin: 100px auto;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap: 50px;
    @media(max-width:425px){
    grid-template-columns: 100%;
    }
`
export const Card = styled.div` 
    display: grid;
    grid-template-columns: 50% 50%;    
    border:  1px solid  rgba(121,119,123, 0.3); 
    border-radius: 5px;
    font-family:Arial, Helvetica, sans-serif;
    @media(max-width:768px){
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
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:20px;
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
`