import styled from "styled-components";
import animation3 from '../../../img/Icon/dentist-chair-1.svg';
export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
    margin: 200px  auto;
`
export const TextOne = styled.p`
    color: rgb(63,215,223);
    font-size: 18px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
`
export const TextTwo = styled.p`
    color: rgb(25,49,57);
    font-size: 38px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    @media (max-width:425px){
        font-size:30px;
    }
`
export const TextThree = styled.p`
    color: #838383;
    font-size: 18px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
`
export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 50px;
    justify-content:space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media (max-width:780px) {
        grid-template-columns: 80%;
        justify-content: center;
    }
    @media (max-width:320px) {
        grid-template-columns: 100%;
        justify-content: center;
    }
`
export const Item = styled.div`
`
export const ImgItem = styled.div ` 
    position: relative;
    display: flex;
    justify-content: center;
    &::after {
        content:'';
            position: absolute;
            width :100px;
            height: 100px;
            bottom: -50px;            
            background:url(${animation3}) ;  
            background-color: white;

            background-size: cover;
            z-index: 2;
            border: 20px solid white;
            border-radius: 40%;
        }
`
export const Img = styled.img`
width: 100%;
`

export const Text = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin-top: 50PX;
`
export const ItemText = styled.p`
    font-size: 17px;
    color: grey;
    line-height: 25px;
`
export const Button = styled.button`
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    margin-top: 50px;
    border-radius: 5px;
    font-size: 15px ;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
        background: rgb(169,142,237);
    }
`