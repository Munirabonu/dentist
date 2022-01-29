import React from 'react'
import { Container, Home_page, Text,Img,  Text_one, Text_two, Text_three, Button, Button_footer_text ,Animation, Img_item, Animation_icon, Animation_icon3, Animation_icon2} from './main'
import home_page from '../../img/Icon/home-8.jpg';

export default function Contact() {
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
                    <Img_item>
                    <Img src={home_page} />
                    <Animation_icon />
                    <Animation_icon2/>
                    <Animation_icon3/>
                    
                    </Img_item>
                </Container>
            </Home_page>
        </div>
    )
}
