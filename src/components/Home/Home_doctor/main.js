import styled from "styled-components";
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';

export const Home_page = styled.div`
        width: 98%;
        margin: 0 auto;
        height: 100vh;
        background: rgb(225,249,248);
        @media(max-width:850px){
            height:auto;
        }
    `
export const Container = styled.div`
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-top: 80px;
        justify-content: space-between;
        @media(max-width:1024px) {
            grid-template-columns: 100%;
            text-align: center;
            
        }
    `
export const Text = styled.div`
        width: 30vw;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        @media(max-width:1024px) {
           width: 100%;
        }
    `
export const Text_one = styled.p`
        color: rgb(63,213,211);
        font-size: 14px;
        font-weight: 600;
    
    `
export const Text_two = styled.p`
        font-size: 35px;
        `
export const Text_three = styled.p`
        font-size: 16px;
        word-spacing: 3px;
        color: rgb(121,119,123);
        display: grid;
        grid-template-columns: 10% 50% 10% 50%;
        align-content: center;
        gap:20px 10px;
        text-align:left;
        @media (max-width:850px) {
            grid-template-columns: 10% auto;
        }
        `
export const Icon = styled(PlusCircle)`
            color:rgb(169,142,237);
            width:30px;
        `
export const Icon_Text = styled.p`
            color:rgb(56,13,40);
            font-size: 18px;
            margin:0;
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
