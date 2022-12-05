import styled from 'styled-components'

export const Container = styled.div ` 
    width:93%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 50% 30% 20%;
    align-items :center;
    @media (max-width:768px){
    grid-template-columns: 100%;
    gap:20px;
    text-align:center;
    }
`
export const Text = styled.div ` 

`
export const TextOne = styled.div ` 
    font-size:28px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color:rgb(25,49,57);
`
export const TextTwo = styled.div` 
    font-size: 15px;
    margin-top: 20px;
    color:rgb(120,128,120);
`
export const Input = styled.input` 
    border:2px solid rgba(123,122,122,0.2);
    padding:10px 0 10px 10px;
    border-radius: 5px;
    font-size:20px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    &:focus {
        border-color:rgb(169,142,237);
        transition: .3s border-color;
    }
`
export const Button = styled.button `
    padding: 15px 50px;
    background: rgb(63,213,211);
    color: white;
    border: none;
    margin-left: 10px;
    border-radius: 5px;
    font-size: 12px ;
    font-weight: 700;
    transition: .3s background-color;
    font-family:Georgia, 'Times New Roman', Times, serif;
    &:hover {
        background: rgb(169,142,237);
        transition: .3s background-color;
    }      
`