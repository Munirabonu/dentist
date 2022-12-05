import React from 'react';
import { Container, Navbar, NavbarTextOne, NavbarText_two, Card, Icon, Text, Texts,Card_item, Button} from './main';
import dentist from '../../../img/Icon/quote-1.png';
import { Link } from 'react-router-dom';

export default function Work() {
    return (
        <div>
            <Container>
                <Navbar>
                    <NavbarTextOne>Top Reviews</NavbarTextOne>
                    <NavbarText_two>More than 250 five-star reviews on Google</NavbarText_two>
                </Navbar>
                <Card>
                    <Card_item>
                        <Icon />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                    </Card_item>
                    <Card_item>
                        <Icon />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        </Card_item>
                    <Card_item>
                        <Icon />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                       </Card_item>
                </Card>
                <Button><Link to='/serives'>Sirvis</Link></Button>
            </Container>
        </div>
    )
}
