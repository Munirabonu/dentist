import React from 'react';
import { Container, Navbar, NavbarTextOne, NavbarText_two, Card, Icon, Text, List, List_avatar, List_text ,Card_item} from './main';
import dentist from '../../../img/Icon/quote-1.png';

export default function Top() {
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
                            <List_avatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-2.png'></List_avatar>
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
                            <List_avatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-3.png'></List_avatar>
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
                            <List_avatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-4.png'></List_avatar>
                            <List_text>Ava Jarnis</List_text>
                        </List>
                    </Card_item>
                    
                </Card>
            </Container>
        </div>
    )
}
