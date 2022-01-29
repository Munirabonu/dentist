import styled from "styled-components";


export const Container = styled.div` 
    width:90%;
    margin:100px auto;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
`
export const Navbar = styled.div`
    width: 30%;
    margin:auto;
`
export const Navbar_text_one = styled.h3`
    font-size:20px;
    margin:10px 0;
    color: rgb(63,213,211);
`
export const Navbar_text_two = styled.p`
    font-weight: 500;
    font-size:30px;
`

export const Card = styled.div` 
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:30px;
    text-align:center;
    @media (max-width:1024px) {
    grid-template-columns: repeat(2,1fr);
    }
    @media (max-width:520px) {
    grid-template-columns: auto;
    }
    
`
export const Card_item = styled.div` 
    width:90%;
    margin:0 auto;
`
export const Icon = styled.img` 
    width:100%;
`
export const Text = styled.p`
    font-weight: 600;
    font-size:23px;
`
export const Texts = styled.p` 
    font-size: 17px;
    word-spacing: 5px;
    color: rgb(121,119,123);
    text-align:center;
    line-height: 1.7;
`
export const Button = styled.button`
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 17px ;
    font-weight: 700;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(169,142,237);
    }
`