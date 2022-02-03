import React from 'react'
import { Container, Home_page, Text, Img, Text_one, Icon, Text_two, Text_three, Button, Button_footer_text, Icon_Text } from './main'
import doctor from '../../../img/Icon/home-doctor.jpg';
import { Link } from 'react-router-dom';
export default function Home_doctor() {
    return (
        <div>
            <Home_page>
                <Container>
                    <Img src={doctor} />
                    <Text>
                        <Text_one>
                            Includes free consultation*
                        </Text_one>
                        <Text_two>
                            Get Complete Dental Implant: Save 15%
                        </Text_two>
                        <Text_three>
                            <Icon></Icon>
                            <Icon_Text>lorem  dolor sit ametipisicing elit.</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>lorem  dolor sit ametsicing elit.</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>adipisicing elit.</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>ectetur adipisicing elit.</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>lorem elit.</Icon_Text>
                            <Icon></Icon>
                            <Icon_Text>lorem adipisicing elit.</Icon_Text>
                            
                        </Text_three>
                        <Link style={{color:'white'}} to='/doctors' exact><Button>Batafsil..</Button></Link>
                        </Text>
                    {/* <After src={home_animation} /> */}
                </Container>
            </Home_page>
        </div>
    )
}
