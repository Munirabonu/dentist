import styled from "styled-components";
import animation from '../../img/Icon/home-animation.svg';
import {StarBorder} from '@styled-icons/material-rounded/StarBorder'

export const Home_page = styled.div`
    background-color:rgb(221,239,253) ;
`
export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    padding: 100px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    @media(max-width:425px){
        font-size: 30px;
    }
    `
export const Text_three = styled.p`
    font-size: 16px;
    word-spacing: 3px;
    color: rgb(121,119,123);
`
export const Button = styled.button`
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    border-radius: 5px;
    border: none;
    font-size: 12px ;
    font-weight: 700;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(169,142,237);
    }
`
export const Button_footer_text = styled.p`
    margin: 10px;
    font-size: 12px;
    color: grey;
`
export const Img = styled.img`
    width: 100%;
    z-index: 5;
`
export const Img_item = styled.div` 
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    z-index: 3;
        &::after {
            content:'';
            position: absolute;
            width :300px;
            height: 400px;
            left: -40px;
            bottom: -90px;
            background: url(${animation});  
            background-size: cover;
            z-index: 2;
            transform: rotate(250deg);
        }
    @media(max-width:1024px){
        &::after{
            width: 100px;
            height: 200px;
        }
    }

`
export const Animation_icon = styled(StarBorder)` 
    position: absolute;
    left:-40px;
    color:rgb(169,142,237);
    font-weight: 900;
    bottom: 0;
    width: 30px;
    height: 30px;
    z-index: 10;
    animation: example 1s linear 1s infinite alternate;
    @keyframes example {
    from {color:white; display: none;}
    to {color:rgb(169,142,237); display:none;}
    }
`
export const Animation_icon2 = styled(StarBorder)` 
    position: absolute;
    margin-bottom: -20px;
    color:rgb(169,142,237);
    font-weight: 900;
    bottom: 0;
    width: 30px;
    height: 30px;
    z-index: 10;
    animation: example 1s linear 2s infinite alternate;
    @keyframes example {
    from {color:white; display: none;}
    to {color:rgb(169,142,237); display:none;}
    }
`
export const Animation_icon3 = styled(StarBorder)` 
    position: absolute;
    margin: 20px;
    color:rgb(169,142,237);
    font-weight: 900;
    bottom: 0;
    width: 30px;
    height: 30px;
    z-index: 10;
    animation: example 1s linear 3s infinite alternate;
    @keyframes example {
    from {color:white; display: none;}
    to {color:rgb(169,142,237); display:none;}
    }
`

// export const Animation = styled.div` 
            
// `