import React from 'react';
import { Container, Navbar, Navbar_text_one, Navbar_text_two, Card, Icon, Text, List, List_avatar, List_text ,Card_item} from './main';
import dentist from '../../../img/Icon/quote-1.png';

export default function Top() {
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
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List>
                            <List_avatar src={dentist}></List_avatar>
                            <List_text>Ava Jarnis</List_text>
                        </List>
                    </Card_item>
                    <Card_item>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List >
                            <List_avatar src={dentist}></List_avatar>
                            <List_text>Ava Jarnis</List_text>
                        </List>
                    </Card_item>
                    <Card_item>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List>
                            <List_avatar src={dentist}></List_avatar>
                            <List_text>Ava Jarnis</List_text>
                        </List>
                    </Card_item>
                    <Card_item>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List>
                            <List_avatar src={dentist}></List_avatar>
                            <List_text>Ava Jarnis</List_text>
                        </List>
                    </Card_item>
                    
                </Card>
            </Container>
        </div>
    )
}
