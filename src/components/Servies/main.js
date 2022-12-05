import styled from "styled-components";

export const HomePage = styled.div`
    margin: 0px auto;
    padding: 50px 0;
    background: rgb(225,249,248);
`
export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    @media(max-width:900px) {
        grid-template-columns: 100%;
        text-align: center;
    }
`
export const Text = styled.div`
    width: 30vw;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media(max-width:900px) {
       width: 100%;
       margin-bottom: 50px;
    }
`
export const TextOne = styled.p`
    color: rgb(63,213,211);
    font-size: 18px;
    font-weight: 600;

`
export const TextTwo = styled.p`
    font-size: 40px;
    `
export const TextThree = styled.p`
    font-size: 18px;
    word-spacing: 13px;
    color: rgb(121,119,123);
`
export const Button = styled.button`
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 12px ;
    font-weight: 700;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(169,142,237);
    }
`

export const Img = styled.img`
    width: 80%;
    @media(max-width:900px) {
        margin: auto;
     }
`
