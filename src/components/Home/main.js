import styled from "styled-components";
import { StarBorder } from '@styled-icons/material-rounded/StarBorder'
import { PhoneCall } from '@styled-icons/feather/PhoneCall';

export const HomePage = styled.div`
    height: 105vh;
    background: linear-gradient(to right, rgb(210,234,255),rgb(218,206,255));
    @media (max-width:1200px){
        height: auto;
    }
    `
export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
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
export const TextP = styled.div`
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
export const SmileText = styled.p`
     font-size: 20px;
     margin:2rem 0;
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
export const ImgItem = styled.div`
    margin-bottom: -30px;
    margin-top: 100px;
    width: 100%;
    position: relative;
    display: flex;
    z-index: 3;
        
`
export const BgLeft=styled.img`
    width:20%;
    height:40%;
    position:absolute;
    bottom:0;
    left:-5em;
    z-index:4;    
    box-shadow:none;
`
export const BgRight=styled(BgLeft)`
    height:100%;
    left:95%;

    @media (max-width:1024px) {
        display:none;
    }
`
const star=styled(StarBorder)`
    font-weight: 900;
    position: absolute;
    color:rgb(169,142,237);
    z-index: 10;
    animation: example 3s ease-in-out  infinite alternate;
    @keyframes example {
    from {color:rgb(63,213,211);transform:scale(0.5)}
    to {color:rgb(169,142,237); transform:scale(1)}
    }
    @media(max-width:425px){
        width: 20px;
    }


`
export const AnimationIcon = styled(star)` 
    right: 0;
    top: 51%;
    bottom: 0;
    width: 45px;
    height: 45px;
    animation-delay: 1s;
`
export const AnimationIcon2 = styled(star)` 
    right: -10px;
    top: 40%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    `
export const AnimationIcon3 = styled(star)` 
    top: 45%;
    right: 30px;
    width: 30px;
    height: 30px;
    animation-delay: 3s;
`
export const TopAnimationIcon1 = styled(star)` 
    top:-50px;
    left: 0;
    width:30px;
    height:30px;
    animation-delay: 1s;

 `


export const TopAnimationIcon2 = styled(star)` 
    top:0px;
    left: -50px;
    width:50px;
    height:50px;
    animation-delay: 2s;

`

export const TopAnimationIcon3 = styled(star)` 
    top:-15px;
    left: 20px;
    width:40px;
    height:40px;
    animation-delay: 3s;

`

export const Call = styled.a`
    text-decoration: none;
    background:rgb(63,213,211);
    color:white;
    padding: 20px;
    border-radius: 25px;
    @media(max-width:425px){
        padding:10px;
    }
`
export const Icon = styled(PhoneCall)`
    color:white;
    width: 30px;
    padding:5px;
    border:2px solid white;
    border-radius:50%;
`
export const IconText = styled.p`
    color:white;
    font-size: 15px;
    display:inline;
    font-weight: 800;
`