import React from 'react';
import { Card, Cards, Card_flex, Card_img, Card_text_one, Card_text_two, Container, Grid, Icon, List, List_item, Navbar, Navbar_link, Navbar_text, News, New_text_one, New_text_two, Right, Text_one, Button, Button_text } from './main';
import blog_2 from '../../../img/Icon/blog-2-card.jpg';
import { RightCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { data } from "./data";
import { useEffect } from "react";
import { Breadcrumb } from 'antd';

export default function Blog_page() {
    const history = useHistory()
    useEffect(() => {
        console.log(data);
    }, []);

    
    return (
        <div>
            <Container>
                <Navbar>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Navbar_link style={{color:'rgb(63,213,211)'}} to='/'>Home</Navbar_link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Navbar_link to='/blog'>Blog</Navbar_link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Navbar_text>Blog</Navbar_text>
                </Navbar>
                <Grid>
                    <Cards>
                        {data.map((card, index) => {
                            return (
                            <Card key={index}>
                                <Card_img src={card.url}>
                                </Card_img>
                                <Card_flex>
                                    <button>Doctors about</button>
                                </Card_flex>
                                <Card_text_one>{card.title}</Card_text_one>
                                <Card_text_two>{card.text}</Card_text_two>
                                <Button onClick={() => {
                                                history.push(`/blog/${card.id}`);
                                                
                                            }}>
                                    <span>Learn More</span>
                                    <Button_text>
                                        <RightCircleOutlined />
                                    </Button_text>
                                </Button>
                            </Card>
                        )})}
                    </Cards>
                    <Right>
                        <Text_one>Koproq malumot</Text_one>
                        <List_item>The brain complications of COVID-19</List_item>
                        <List_item>MIRRORS: robotic surgery for advanced ovarian cancer</List_item>
                        <List_item>lorem  lorem Lorem ipsum dolor sit.</List_item>
                        <List_item end>MIRRORS: robotic surgery for advanced ovarian cancer
                        </List_item>
                        <News>
                            <Icon></Icon>
                            <New_text_one>Newsletter Signup</New_text_one>
                            <New_text_two>Get weekly health information and advice from our experts.</New_text_two>

                        </News>
                    </Right>
                </Grid>
            </Container>
        </div>
    )
}
