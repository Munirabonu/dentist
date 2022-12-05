import React from 'react';
import { Container, Navbar, NavbarTextOne, NavbarText_two, Card, Icon, Text, Texts, Card_item, Button } from './main';
import dentist from '../../../img/Icon/servies.jpg';
import { Link } from 'react-router-dom';

export default function Check() {
    return (
        <div>
            <Container>
                <Navbar>
                    <NavbarTextOne>Top Reviews</NavbarTextOne>
                    <NavbarText_two>More than 250 five-star reviews on Google</NavbarText_two>
                </Navbar>
                <Card>
                    <Card_item>
                        <Icon src={dentist} />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        <Link to='/price'><Button>Price Guide</Button></Link>
                    </Card_item>
                    <Card_item>
                        <Icon src={dentist} />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        <Link to='/price'><Button>Price Guide</Button></Link>

                    </Card_item>
                    <Card_item>
                        <Icon src={dentist} />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        <Link to='/price'><Button>Price Guide</Button></Link>
                    </Card_item>
                </Card>
            </Container>
        </div>
    )
}
