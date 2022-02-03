import React from 'react'
import { Container, Home_page, Text,Img,  Text_one, Text_two, Text_three, Button, Button_footer_text } from './main'
import home_page from '../../../img/Icon/home-8.jpg';
import { Link } from 'react-router-dom';

export default function Implantat() {
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
                    <Link style={{color:'white'}} to='/doctors' exact><Button>Batafsil..</Button></Link>
                         <Button_footer_text>
                    *The offer expires on August 30, 2021
                    </Button_footer_text>
                    </Text>
                    <Img src={home_page} />
                    {/* <After src={home_animation} /> */}
                </Container>
            </Home_page>
        </div>
    )
}
