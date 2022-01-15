import React from 'react'
import { Button, Card, Container, Img, Item,Item_text,Text, Text_One, Text_Three, Text_Two } from './main'
import general from '../../../img/Icon/home-card-1.jpg'

export default function Cosmetic() {
    return (
        <div>
            <Container>
                <Text_One>Welcome to Dentico Clinic</Text_One>
                <Text_Two>Cosmetic & General Dentistry</Text_Two>
                <Text_Three>Every day, more than 100 patients receive professional assistance in our clinic.</Text_Three>
                <Card>
                    <Item>
                        <Img src={general} />
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                    <Item>
                        <Img src={general} />
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                    <Item>
                        <Img src={general} />
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                </Card>
                    <Button>View our Servise</Button>
            </Container>
        </div>
    )
}
