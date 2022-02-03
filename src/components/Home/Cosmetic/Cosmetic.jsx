import React from 'react'
import { Button, Card, Container, Img, Img_item, Item,Item_text,Text, Text_One, Text_Three, Text_Two } from './main'
import general from '../../../img/Icon/home-card-1.jpg'
import { Link } from 'react-router-dom'

export default function Cosmetic() {
    return (
        <div>
            <Container>
                <Text_One>Welcome to Dentico Clinic</Text_One>
                <Text_Two>Cosmetic & General Dentistry</Text_Two>
                <Text_Three>Every day, more than 100 patients receive professional assistance in our clinic.</Text_Three>
                <Card>
                    <Item>
                        <Img_item>
                            <Img src={general} />
                        </Img_item>
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                    <Item> 
                        <Img_item>
                            <Img src={general} />
                        </Img_item>
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                    <Item>
                    <Img_item>
                            <Img src={general} />
                        </Img_item>
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                </Card>
                    <Link style={{color:'white'}} to='/servies' exact><Button>View our Servise</Button></Link>
            </Container>
        </div>
    )
}
