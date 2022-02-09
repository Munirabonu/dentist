import styled from 'styled-components'

export const Page = styled.div` 
    width:100%;
    height:auto;
    background: rgb(225,249,248);
    padding:100px;
    color:rgb(25,49,57);
    @media(max-width:768px){
        padding:50px;
    }
    @media(max-width:320px){
        padding:20px;
    }

`
export const Title =styled.div` 
    font-size:40px;
    font-weight:500;
    margin:20px 0;
    @media(max-width:768px){
        font-size:35px;
    }
    @media(max-width:425px){
        font-size:30px;
    }
    @media(max-width:375px){
        font-size:23px;
    }
`
export const Img =styled.img `
    width:70%;
    margin:50px auto;
    @media(max-width:768px){
        margin:30px auto;
    }
    @media(max-width:425px){
        width:100%;
    }
`
export const Text = styled.div` 
    text-align:left;
    width:70%;
    margin:auto;
    @media(max-width:425px){
        width:100%;
    }
    @media(max-width:320px){
        & h3 {
            font-size:17px;
        }
    }    
`
