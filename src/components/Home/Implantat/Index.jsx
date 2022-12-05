import React from 'react'
import { Container, HomePage, Text,Img,  TextOne, TextTwo, TextThree, Button, ButtonFooterText } from './main'
import home from '../../../img/Icon/home-8.jpg';
import { Link } from 'react-router-dom';

export default function Implantat() {
    return (
        <div>
            <HomePage>
                <Container>
                    <Text>
                    <TextOne>
                    Includes free consultation*
                    </TextOne>
                    <TextTwo>
                    Get Complete Dental Implant: Save 15%
                    </TextTwo>
                    <TextThree>
                    Dr. Simmons and her team of Oral Surgeons and Periodontists are committed to providing you with the highest quality of implants and crowns.
                    </TextThree>
                    <Link style={{color:'white'}} to='/doctors' exact><Button>More...</Button></Link>
                         <ButtonFooterText>
                    *The offer expires on August 30, 2021
                    </ButtonFooterText>
                    </Text>
                    <Img src={home} />
                </Container>
            </HomePage>
        </div>
    )
}
