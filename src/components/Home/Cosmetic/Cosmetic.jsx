import React from 'react'
import { Button, Card, Container, Img, ImgItem, Item,Item_text,Text, TextOne, TextThree, TextTwo } from './main'
import general from '../../../img/Icon/home-card-1.jpg'

import { Link } from 'react-router-dom'

export default function Cosmetic() {
    return (
        <div>
            <Container>
                <TextOne>Welcome to Dentico Clinic</TextOne>
                <TextTwo>Cosmetic & General Dentistry</TextTwo>
                <TextThree>Every day, more than 100 patients receive professional assistance in our clinic.</TextThree>
                <Card>
                    <Item>
                        <ImgItem one>
                            <Img src={general} />
                        </ImgItem>
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                    <Item> 
                        <ImgItem>
                            <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/05/home-20.jpg' />
                        </ImgItem>
                        <Text>General Dentistry</Text>
                        <Item_text>
                        General dentistry incorporates a broad range of diseases and disorders of the oral and maxillofacial region.
                        </Item_text>
                    </Item>
                    <Item>
                    <ImgItem>
                            <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/05/home-19.jpg' />
                        </ImgItem>
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
