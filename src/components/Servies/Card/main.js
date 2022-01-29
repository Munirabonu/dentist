import styled from "styled-components";
import doctors from '../../../img/Icon/doctors.jpg'

export const Container = styled.div`
    width: 90%;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 40px;
    align-items: center;
    justify-content: space-between;
    @media(max-width:900px) {
        grid-template-columns: 100%;
        text-align: center;

    }
`
export const Card = styled.div` 
    border: 1px solid rgba(176,175,175,0.4);
    border-radius: 5px;
    ` 
export const Img = styled.div` 
    background: url(${doctors});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 40vh;
    margin: 0;
`
export const Icon =styled.div` 

`
export const Texts = styled.div`
    padding: 35px;
`
export const Text_one=styled.p` 
    font-size: 30px;
`
export const Text_two  =styled.p` 
    font-size: 20px;
    color: rgb(165,176,176);
`