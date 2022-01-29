import React from 'react';
import { Container, Navbar, Navbar_text_one, Navbar_text_two, Card, Icon, Text, Texts,Card_item, Button} from './main';
import dentist from '../../../img/Icon/servies.jpg';

export default function Check() {
    return (
        <div>
            <Container>
                <Navbar>
                    <Navbar_text_one>Top Reviews</Navbar_text_one>
                    <Navbar_text_two>More than 250 five-star reviews on Google</Navbar_text_two>
                </Navbar>
                <Card>
                    <Card_item>
                        <Icon src={dentist}/>
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                        <Button>Sirvis</Button>

                    </Card_item>
                    <Card_item>                        
                        <Icon src={dentist}/>
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                <Button>Sirvis</Button>

                        </Card_item>
                    <Card_item>
                    <Icon src={dentist}/>
                        <Text>Excellence in Basic Dental Care</Text>
                        <Texts>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Texts>
                <Button>Sirvis</Button>
                       </Card_item>
                </Card>
            </Container>
        </div>
    )
}
