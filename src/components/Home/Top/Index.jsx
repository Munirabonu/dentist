import React from 'react';
import { Container, Navbar, NavbarTextOne, NavbarTextTwo, Card, Icon, Text, List, ListAvatar, ListText ,CardItem} from './main';
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
                            <ListAvatar src={dentist}></ListAvatar>
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
                            <ListAvatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-2.png'></ListAvatar>
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
                            <ListAvatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-3.png'></ListAvatar>
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
                            <ListAvatar src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/quote-4.png'></ListAvatar>
                            <ListText>Ava Jarnis</ListText>
                        </List>
                    </CardItem>
                    
                </Card>
            </Container>
        </div>
    )
}
