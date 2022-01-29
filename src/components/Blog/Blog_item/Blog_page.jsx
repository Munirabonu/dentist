import React from 'react';
import { Card, Cards, Card_flex, Card_img, Card_text_one, Card_text_two, Container, Grid, Icon, List, List_item, Navbar, Navbar_link, Navbar_text, News, New_text_one, New_text_two, Right, Text_one, text_one } from './main';
import blog_2 from '../../../img/Icon/blog-2-card.jpg';
export default function Blog_page() {
    return (
        <div>
            <Container>
                <Navbar>
                    <Navbar_link to='/'>Home / </Navbar_link>
                    <Navbar_link to='/blog'>Blog</Navbar_link>
                    <Navbar_text>Blog</Navbar_text>
                </Navbar>
                <Grid>
                    <Cards>
                        <Card>
                            <Card_img src={blog_2}>
                            </Card_img>
                            <Card_flex>
                                <button>Doctors</button>
                                <p>april</p>

                            </Card_flex>
                            <Card_text_one>Is It Better to Use an Electric or a Manual Toothbrush?</Card_text_one>
                            <Card_text_two>According to the American Dental Association (ADA), both electric and manual toothbrushes are effective at removing oral plaque that causes decay and disease.
                            </Card_text_two>
                        </Card>
                        <Card>
                            <Card_img src={blog_2}>
                            </Card_img>
                            <Card_flex>
                                <button>Doctors</button>
                                <p>april</p>

                            </Card_flex>
                            <Card_text_one>Is It Better to Use an Electric or a Manual Toothbrush?</Card_text_one>
                            <Card_text_two>According to the American Dental Association (ADA), both electric and manual toothbrushes are effective at removing oral plaque that causes decay and disease.
                            </Card_text_two>
                        </Card>
                        <Card>
                            <Card_img src={blog_2}>
                            </Card_img>
                            <Card_flex>
                                <button>Doctors</button>
                                <p>april</p>

                            </Card_flex>
                            <Card_text_one>Is It Better to Use an Electric or a Manual Toothbrush?</Card_text_one>
                            <Card_text_two>According to the American Dental Association (ADA), both electric and manual toothbrushes are effective at removing oral plaque that causes decay and disease.
                            </Card_text_two>
                        </Card>
                        <Card>
                            <Card_img src={blog_2}>
                            </Card_img>
                            <Card_flex>
                                <button>Doctors</button>
                                <p>april</p>

                            </Card_flex>
                            <Card_text_one>Is It Better to Use an Electric or a Manual Toothbrush?</Card_text_one>
                            <Card_text_two>According to the American Dental Association (ADA), both electric and manual toothbrushes are effective at removing oral plaque that causes decay and disease.
                            </Card_text_two>
                        </Card>
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
