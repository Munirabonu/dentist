import React from "react";
import {
  Card,
  Cards,
  CardFlex,
  CardImg,
  CardTextOne,
  CardTextTwo,
  Container,
  Grid,
  Icon,
  ListItem,
  Navbar,
  NavbarLink,
  NavbarText,
  News,
  New_TextOne,
  New_text_two,
  Right,
  TextOne,
  Button,
  ButtonText,
} from "./main";
import { RightCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { data } from "./data";
import { useEffect } from "react";
import { Breadcrumb } from "antd";

export default function Blog_page() {
  const history = useHistory();
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <Container>
        <Navbar>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavbarLink style={{ color: "rgb(63,213,211)" }} to="/">
                Home
              </NavbarLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavbarLink to="/blog">Blog</NavbarLink>
            </Breadcrumb.Item>
          </Breadcrumb>
          <NavbarText>Blog</NavbarText>
        </Navbar>
        <Grid>
          <Cards>
            {data.map((card, index) => {
              return (
                <Card key={index}>
                  <CardImg src={card.url}></CardImg>
                  <CardFlex>
                    <button>Doctors about</button>
                  </CardFlex>
                  <CardTextOne>{card.title}</CardTextOne>
                  <CardTextTwo>{card.text}</CardTextTwo>
                  <Button
                    onClick={() => {
                      history.push(`/blog/${card.id}`);
                    }}
                  >
                    <span>Learn More</span>
                    <ButtonText>
                      <RightCircleOutlined />
                    </ButtonText>
                  </Button>
                </Card>
              );
            })}
          </Cards>
          <Right>
            <TextOne>Koproq malumot</TextOne>
            <ListItem>The brain complications of COVID-19</ListItem>
            <ListItem>
              MIRRORS: robotic surgery for advanced ovarian cancer
            </ListItem>
            <ListItem>lorem lorem Lorem ipsum dolor sit.</ListItem>
            <ListItem end>
              MIRRORS: robotic surgery for advanced ovarian cancer
            </ListItem>
            <News>
              <Icon></Icon>
              <New_TextOne>Newsletter Signup</New_TextOne>
              <New_text_two>
                Get weekly health information and advice from our experts.
              </New_text_two>
            </News>
          </Right>
        </Grid>
      </Container>
    </div>
  );
}
