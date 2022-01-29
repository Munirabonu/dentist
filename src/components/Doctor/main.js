import styled from "styled-components";

export const Home_page = styled.div`
    margin: 0px auto;
    padding: 100px 0;
    background: rgb(238,231,255);
`
export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
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
`
export const Button = styled.button`
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    /* margin-top: 20px; */
    border-radius: 5px;
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
    /* height: 100%; */
`
