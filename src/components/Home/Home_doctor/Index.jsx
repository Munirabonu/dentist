import React from 'react'
import { Container, HomePage, Text, Img, TextOne, Icon, TextTwo, TextThree, Button, ButtonFooterText, Icon_Text } from './main'
import doctor from '../../../img/Icon/home-doctor.jpg';
import { Link } from 'react-router-dom';
export default function Home_doctor() {
    return (
        <div>
            <HomePage>
                <Container>
                    <Img src={doctor} />
                    <Text>
                        <TextOne>
                            Includes free consultation*
                        </TextOne>
                        <TextTwo>
                            Get Complete Dental Implant: Save 15%
                        </TextTwo>
                        <TextThree>
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
                            
                        </TextThree>
                        <Link style={{color:'white'}} to='/doctors' exact><Button>More...</Button></Link>
                        </Text>
                    {/* <After src={home_animation} /> */}
                </Container>
            </HomePage>
        </div>
    )
}
