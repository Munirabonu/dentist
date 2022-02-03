import styled from "styled-components";
import animation from '../../img/Icon/home-animation.svg';
import { StarBorder } from '@styled-icons/material-rounded/StarBorder'
import { PhoneCall } from '@styled-icons/feather/PhoneCall';

export const Home_page = styled.div`
    height: 105vh;
    background: linear-gradient(to right, rgb(210,234,255),rgb(218,206,255));
    @media (max-width:1200px){
        height: auto;
    }
    `
export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    @media (max-width:1200px) {
        grid-template-columns: 100%;
        justify-items: center;
        text-align: center;
    }
    @media (max-width:372px) {
        width: 90%;
    }
    `
export const Text = styled.div`
    padding: 150px 0;
    color: rgb(25,49,57);
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width:1200px){
        padding:50px;
    }
    `
export const Text_p = styled.p`
    font-size: 70px;
    line-height: 0.97;
    @media (max-width:1200px){
        font-size: 60px;
    }
    @media (max-width:900px) {
        font-size: 50px;
    }
    @media (max-width:600px) {
        font-size: 40px;
    }
    @media (max-width:500px) {
        font-size: 30px;
    }
    `
export const Smile_text = styled.p`
     font-size: 20px;
    @media (max-width:600px) {
        font-size: 18px;
    }
    @media (max-width:500px) {
        font-size: 15px;
    }
`
export const Img = styled.img`
    z-index: 5;
    width: 100%;
`
export const Img_item = styled.div`
    margin-bottom: -30px;
    margin-top: 70px;
    width: 100%;
    position: relative;
    display: flex;
    z-index: 3;
        
`
export const Animation_icon = styled(StarBorder)` 
    position: absolute;
    right: 0;
    top: 50%;
    color:rgb(169,142,237);
    font-weight: 900;
    bottom: 0;
    width: 30px;
    height: 30px;
    z-index: 10;
    animation: example 1s linear 1s infinite alternate;
    @keyframes example {
    from {color:rgb(63,213,211); display: none;}
    to {color:rgb(169,142,237); display:none;}
    }
    @media(max-width:425px){
        width: 20px;
    }
`
export const Animation_icon2 = styled(StarBorder)` 
    position: absolute;
    color:rgb(169,142,237);
    font-weight: 900;
    right: 10px;
    top: 40%;
    width: 30px;
    height: 30px;
    z-index: 10;
    animation: example 1s linear 2s infinite alternate;
    @keyframes example {
    from {color:rgb(63,213,211); display: none;}
    to {color:rgb(169,142,237); display:none;}
    }
    @media(max-width:425px){
        width: 20px;
    }
`
export const Animation_icon3 = styled(StarBorder)` 
    position: absolute;
    top: 45%;
    right: 0px;
    margin: 20px;
    color:rgb(169,142,237);
    font-weight: 900;
    width: 20px;
    height: 20px;
    z-index: 10;
    animation: example 1s linear 3s infinite alternate;
    @keyframes example {
    from {color:rgb(63,213,211); display: none;}
    to {color:rgb(169,142,237); display:none;}
    }
`

export const Call = styled.a`
    text-decoration: none;
    background:linear-gradient(to right, white 50%,rgb(63,213,211));
    padding: 20px;
    border-radius: 25px;
    @media(max-width:425px){
        padding:10px;
    }
`
export const Icon = styled(PhoneCall)`
    color:blue;
    width: 20px;
    padding:2px;
    border:2px solid rgb(169,142,237);
    border-radius:50%;
    /* display:inline-block; */
`
export const Icon_text = styled.p`
    color:rgb(169,142,237);
    font-size: 15px;
    display:inline;
    font-weight: 800;
`