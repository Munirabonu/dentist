import React from 'react';
import { Container, Navbar, NavbarTextOne, NavbarTextTwo, Card, Icon, Text, Texts, CardItem, Button } from './main';
import dentist from '../../../img/Icon/servies.jpg';
import { Link } from 'react-router-dom';

export default function Check() {
    return (
        <div>
            <Container>
                <Navbar>
                    <NavbarTextOne>Top Reviews</NavbarTextOne>
                    <NavbarTextTwo>More than 250 five-star reviews on Google</NavbarTextTwo>
                </Navbar>
                <Card>
                    <CardItem>
                        <Icon src={dentist} />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        <Link to='/price'><Button>Price Guide</Button></Link>
                    </CardItem>
                    <CardItem>
                        <Icon src={dentist} />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        <Link to='/price'><Button>Price Guide</Button></Link>

                    </CardItem>
                    <CardItem>
                        <Icon src={dentist} />
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        <Link to='/price'><Button>Price Guide</Button></Link>
                    </CardItem>
                </Card>
            </Container>
        </div>
    )
}
