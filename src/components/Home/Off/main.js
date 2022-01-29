import styled, { css } from "styled-components";
import { PhoneCall } from '@styled-icons/feather/PhoneCall';

export const Home_page = styled.div`
        margin: 0px auto;
        margin-top: 80px;
        box-sizing: border-box;
        @media(max-width:850px){
            height:auto;
        }
    `
export const Border = styled.div`
    position:relative;  
    width: 80%;
    margin: 0 auto;
    padding:50px;
    border:1px solid rgb(212, 218, 213);    
    box-sizing: border-box;
`
export const Container = styled.div`
    display: grid;
    box-sizing: border-box;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    @media(max-width:1024px) {
        align-items: center;
        text-align: center;
        grid-template-columns: 100%;
    }
        
    `
export const Right = styled.div`
    content:'';
    position: absolute;
    right:0;
    top:0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 120px 120px 0;
    border-color: transparent rgb(169,142,237) transparent transparent;
`
export const Right_text = styled.div `
    position: absolute;
    padding-top:80px;
    transform:rotate(45deg);
    transform-origin: right bottom;
    text-align: center;
    color:white;
`
export const Text = styled.div`
    width: 30vw;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media(max-width:1024px) {
       width: 100%;
    }
`
export const Text_one = styled.b`
font-size: 28px;
`
export const Text_two = styled.p`
    font-size: 15px;
    color:grey;
`
export const Text_three = styled.p`
    font-size: 16px;
    word-spacing: 3px;
    color: rgb(121,119,123);
    gap:20px 10px;
    text-align:left;
    @media (max-width:850px) {
        grid-template-columns: 10% auto;
    }
    `
export const Button = styled.button`
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    margin: 20px;
    border-radius: 5px;
    font-size: 12px ;
    font-weight: 700;
    transition: .3s background-color;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(169,142,237);
        transition: .3s background-color;
    }
`
export const Img = styled.img`
    width: 80%;
    
    @media(max-width:1024px){
        display: none;
    }
`
export const Call = styled.a`
    text-decoration: none;
`
export const Icon = styled(PhoneCall)`
    color:blue;
    width: 15px;
    padding:8px 10px;
    border:2px solid rgb(169,142,237);
    border-radius:50%;
    display:inline-block;
`
export const Icon_text = styled.p`
    color:rgb(169,142,237);
    font-size: 15px;
    display:inline;
    font-weight: 800;
`