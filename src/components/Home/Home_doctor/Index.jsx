import React from 'react'
import { Container, Home_page,Text_p, Smile_text, Text,Img, After } from './main'
import doctor from '../../../img/Icon/home-doctor.jpg';
export default function Home_doctor() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Img  src={doctor}/>
                    <Text>
                        <Text_p>
                        A first class dentistry experience
                        </Text_p>
                        <Smile_text>
                        Because your smile is the beauty of your soul.
                        </Smile_text>
                    </Text>
                    {/* <After src={home_animation} /> */}
                </Container>
            </Home_page>
        </div>
    )
}
        