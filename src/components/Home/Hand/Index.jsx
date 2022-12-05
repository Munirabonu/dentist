import React from 'react';
import { Container, HomePage, Text,Img,  TextOne, TextTwo, TextThree, Button, ButtonFooterText } from './main'
import home_hands from '../../../img/Icon/home-hands.jpg';

export default function Hands() {
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
                        <Button>
                            Button text
                        </Button>
                        <ButtonFooterText>
                            *The offer expires on August 30, 2021
                        </ButtonFooterText>
                    </Text>
                    <Img src={home_hands} />
                </Container>
            </HomePage>

        </div>
    )
}
