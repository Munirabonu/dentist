import styled, { css } from "styled-components";
import { PlusCircle } from '@styled-icons/bootstrap/PlusCircle';
import {PhoneCall} from '@styled-icons/feather/PhoneCall';

export const Home_page = styled.div`
        /* width: 98%; */
        margin: 0px auto;
        margin-top: 80px;
        box-sizing: border-box;
        @media(max-width:850px){
            height:auto;
        }
    `
export const Container = styled.div`
        width: 80%;
        margin: 0 auto;
        border:1px solid rgb(212, 218, 213);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
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
export const Text_one = styled.b`
    font-size: 28px;
    `
// Text_one.b = `
//     color: rgb(63,213,211)
// ` 

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
// export const Icon = styled(PlusCircle)`
//             color:rgb(169,142,237);
//             width:30px;
        // `
export const Icon_Text = styled.p`
            color:rgb(56,13,40);
            // font-size: 18px;
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
export const Call = styled.a `
    display: flex;
    text-decoration: none;
`
export const Icon = styled (PhoneCall) `
    color:blue;
    width: 15px;
    padding:1px 8px;
    border:1px solid blue;
    border-radius:50%;
    display:inline-block;
`
export const Icon_text = styled.p `
    color:blue;
    font-size: 15px;
`