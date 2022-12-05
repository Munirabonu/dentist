import React from 'react';
import { Container, Navbar, NavbarTextOne, NavbarTextTwo, Card, Icon, Text, List, List_avatar, ListText ,CardItem} from './main';
import dentist from '../../../img/Icon/quote-1.png';

export default function Top() {
    return (
        <div>
            <Container>
                <Navbar>
                    <NavbarTextOne>Top Reviews</NavbarTextOne>
                    <NavbarTextTwo>More than 250 five-star reviews on Google</NavbarTextTwo>
                </Navbar>
                <Card>
                    <CardItem>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List>
                            <List_avatar src={dentist}></List_avatar>
                            <ListText>Ava Jarnis</ListText>
                        </List>
                    </CardItem>
                    <CardItem>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List >
                            <List_avatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-2.png'></List_avatar>
                            <ListText>Ava Jarnis</ListText>
                        </List>
                    </CardItem>
                    <CardItem>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List>
                            <List_avatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-3.png'></List_avatar>
                            <ListText>Ava Jarnis</ListText>
                        </List>
                    </CardItem>
                    <CardItem>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Text>The best dental care I have ever experienced! Professional and friendly staff made me feel like family… would highly recommend to anyone!!!
                        </Text>
                        <List>
                            <List_avatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-4.png'></List_avatar>
                            <ListText>Ava Jarnis</ListText>
                        </List>
                    </CardItem>
                    
                </Card>
            </Container>
        </div>
    )
}
