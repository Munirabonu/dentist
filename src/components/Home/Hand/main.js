import styled from "styled-components";

export const HomePage = styled.div`
    margin: 0px auto;
    margin-top: 100px;
    background:rgb(222,240,254);
`
export const Container = styled.div`
    width: 80%;
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
    }
`
export const TextOne = styled.p`
    color: rgb(63,213,211);
    font-size: 14px;
    font-weight: 600;

`
export const TextTwo = styled.p`
    font-size: 35px;
    `
export const TextThree = styled.p`
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
    font-size: 12px ;
    font-weight: 700;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(169,142,237);
    }
`
export const ButtonFooterText = styled.p`
    margin: 10px;
    font-size: 12px;
    color: grey;
`
export const Img = styled.img`
    width: 100%;
    box-shadow:none;
`
