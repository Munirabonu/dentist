import React from 'react';
import { Container, Navbar, Navbar_text_one, Navbar_text_two, Card, Icon, Text, Texts,Card_item, Button} from './main';
import dentist from '../../../img/Icon/quote-1.png';

export default function Work() {
    return (
        <div>
            <Container>
                <Navbar>
                    <Navbar_text_one>Top Reviews</Navbar_text_one>
                    <Navbar_text_two>More than 250 five-star reviews on Google</Navbar_text_two>
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
                <Button>Sirvis</Button>
            </Container>
        </div>
    )
}
