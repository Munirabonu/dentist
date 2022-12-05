import React from 'react'
import { Container, Home_page, Text, Img, Text_one, Icon, Text_two, Text_three, Button, Button_footer_text, Icon_Text, Icon_text, Call, Right, Border, Right_text } from './main'
import home from '../../../img/Icon/home-11.jpg';
import { Link } from 'react-router-dom';

export default function Off_page() {
    return (
        <div>
            <Home_page>
                <Border>
                    <Right></Right>
                    <Container>
                        <Img src={home} />
                        <Text>
                            <Text_one><b>25% OFF</b>   Dental Exam & X-Ray*</Text_one>
                            <Text_two>
                                *Includes 25% OFF all treatments needed
                            </Text_two>
                            <Text_three>
                                If you are looking for a new dental home, let us welcome you to our state-of-the-art practice! New patients can now get a detailed exam and x-ray for just $129. This will let us get an in-depth understanding of your oral health.

                            </Text_three>
                            <Link style={{color:'white'}} to='/price' exact><Button>More...</Button></Link>
                            <Call href='tel'>
                                <Icon></Icon>
                                <Icon_text>1-33-1212-121</Icon_text>
                            </Call>
                        </Text>
                    </Container>
                </Border>
            </Home_page>
        </div>
    )
}
