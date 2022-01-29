import React from 'react'
import { Container, Home_page,Text_p, Smile_text, Text,Img, After, Img_item, Animation_icon, Animation_icon2, Animation_icon3, Icon, Icon_text, Call } from './main'
import home_page from '../../img/Icon/home_page.jpg';

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
                        <Call href='tel'>
                                <Icon></Icon>
                                <Icon_text> 1-33-1212-121</Icon_text>
                        </Call>
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
