import styled from 'styled-components'
import {Facebook} from '@styled-icons/boxicons-logos/Facebook';
import  {Twitter }from '@styled-icons/boxicons-logos/Twitter';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';

export const Container = styled.div`
    width: 95%;
    margin: 100px auto;
`
export const Text = styled.h1` 
    font-size: 30px;
    text-align: center;
    padding: 30px 0;
`
export const Grid = styled.div` 
    display: grid;
    grid-template-columns: 50% 50%;
    border: 1px solid rgba(123,123,132,.2);
    border-radius: 5px;
`
export const Grid_text = styled.div` 
    padding: 50px;
    & YMaps {
        width: 100px;
    }
    `
export const Item = styled.p` 
    font-size: 20px;
    font-weight: ${({ green }) => green ? "600" : '500'};
    color: ${({ green }) => green ? "rgb(63,213,219)" : 'rgb(120,128,120)'};
    & a {
        text-decoration: none;
        color: rgb(120,128,120);
    }
`
export const Facebooks = styled(Facebook) ` 
    color: rgb(63,213,211);
    width: 25px;
    /* margin-left: 10px; */
`
export const Instagrams = styled(Instagram) ` 
    color: rgb(63,213,211);
    width: 25px;
    margin-left: 10px;
`
export const Twitters = styled(Twitter) ` 
    color: rgb(63,213,211);
    width: 25px;
    margin-left: 10px;
`