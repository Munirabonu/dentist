import React from "react";
import {
  Container,
  Navbar,
  NavbarTextOne,
  NavbarTextTwo,
  Card,
  Icon,
  Text,
  Texts,
  CardItem,
  Button,
} from "./main";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div>
      <Container>
        <Navbar>
          <NavbarTextOne>Top Reviews</NavbarTextOne>
          <NavbarTextTwo>
            More than 250 five-star reviews on Google
          </NavbarTextTwo>
        </Navbar>
        <Card>
          <CardItem>
            <Icon />
            <Text>Excellence in Basic Dental Care</Text>
            <Texts>
              The best dental care I have ever experienced! Professional and
              friendly staff made me feel like family… would highly recommend to
              anyone!!!
            </Texts>
          </CardItem>
          <CardItem>
            <Icon />
            <Text>Excellence in Basic Dental Care</Text>
            <Texts>
              The best dental care I have ever experienced! Professional and
              friendly staff made me feel like family… would highly recommend to
              anyone!!!
            </Texts>
          </CardItem>
          <CardItem>
            <Icon />
            <Text>Excellence in Basic Dental Care</Text>
            <Texts>
              The best dental care I have ever experienced! Professional and
              friendly staff made me feel like family… would highly recommend to
              anyone!!!
            </Texts>
          </CardItem>
        </Card>
        <Button>
          <Link to="/serives">Sirvis</Link>
        </Button>
      </Container>
    </div>
  );
}
