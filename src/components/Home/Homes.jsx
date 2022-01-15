import React from 'react'
import { Container, Home_page,Text_p, Smile_text, Text,Img, After } from './main'
import home_page from '../../img/Icon/home_page.jpg';
import home_animation from '../../img/Icon/home-animation.svg'
import Cosmetic from './Cosmetic/Cosmetic';
export default function Homes() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Text>
                        <Text_p>
                        A first class dentistry experience
                        </Text_p>
                        <Smile_text>
                        Because your smile is the beauty of your soul.
                        </Smile_text>
                    </Text>
                    <Img src={home_page} />
                    {/* <After src={home_animation} /> */}
                </Container>
            </Home_page>
        </div>
    )
}
