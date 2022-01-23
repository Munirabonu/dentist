import styled from "styled-components"

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
    margin: 200px  auto;
`
export const Text_One = styled.p`
    color: rgb(63,215,223);
    font-size: 18px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
`
export const Text_Two = styled.p`
    color: rgb(25,49,57);
    font-size: 38px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
`
export const Text_Three = styled.p`
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
        grid-template-columns: 70%;
        justify-content: center;
    }
`
export const Item = styled.div`

`
export const Img = styled.img`
position: relative;
width: 100%;
/* &::before{
    content: 'asaasASA';
    position: absolute;
    bottom:0;
    width: 150px;
    height: 150px;
    background: blueviolet;
    
    &:hover{
        cursor: pointer;
    }
    
} */
`

export const Text = styled.p`
    font-size: 25px;
    font-weight: 500;
`
export const Item_text = styled.p`
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