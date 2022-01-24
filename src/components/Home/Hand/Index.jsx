import React from 'react';
import { Container, Home_page, Text,Img,  Text_one, Text_two, Text_three, Button, Button_footer_text } from './main'
import home_hands from '../../../img/Icon/home-hands.jpg';

export default function Hands() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Text>
                        <Text_one>
                            Includes free consultation*
                        </Text_one>
                        <Text_two>
                            Get Complete Dental Implant: Save 15%
                        </Text_two>
                        <Text_three>
                            Dr. Simmons and her team of Oral Surgeons and Periodontists are committed to providing you with the highest quality of implants and crowns.
                        </Text_three>
                        <Button>
                            Button text
                        </Button>
                        <Button_footer_text>
                            *The offer expires on August 30, 2021
                        </Button_footer_text>
                    </Text>
                    <Img src={home_hands} />
                </Container>
            </Home_page>

        </div>
    )
}
