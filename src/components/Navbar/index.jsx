import React from 'react'
// import { Link } from 'react-router-dom'
import { NavbarPath } from '../../utils/path'
// import dentist from '../../img/Icon/dentist.png';
import { Container, Icon, Link , Icon_text, Img, Navbar_page, Text, Ul, Item, activeStyle } from './main'
export default function Navbar() {
    return (
        <div>
            <Navbar_page>
                <Container>
                    <Img>
                        <Link to='/'>
                            <Icon>
                            </Icon>
                            <Icon_text left>
                                Healty
                                <Text>
                                    Smiels
                                    something updated
                                </Text>
                            </Icon_text>
                        </Link>
                    </Img>
                    <Ul>
                    {NavbarPath.map(({id,title,path})=>{
                        return (
                            <Item key={id}>
                                <Link activeStyle={activeStyle} to={path} exact>
                                {title}
                                </Link>
                            </Item>
                        )
                    })}

                    {/* <Ul>
                        <Item>Home</Item>
                        <Item>Blog</Item>
                        <Item>Doctors</Item>
                        <Item>Servies</Item>
                        <Item> Price G</Item>
                        <Item>Contacts</Item> */}

                    </Ul>
                </Container>
            </Navbar_page>
        </div>
    )
}
