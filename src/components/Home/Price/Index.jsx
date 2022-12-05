import React from "react";
import { Link } from "react-router-dom";
import {
  HomePage,
  Container,
  NavbarTextTwo,
  NavbarText,
  NavbarTextOne,
  Button,
  Navbar,
  FlexPrice,
  Card,
  CardItem,
  Img,
  Text,
  Flex,
  FlexText,
  FlexIcon,
  Footer,
  FooterBotton,
  FooterText,
} from "./main";

export default function Price() {
  return (
    <div>
      <HomePage>
        <Container>
          <Navbar>
            <NavbarText>
              <NavbarTextOne>Price Guide</NavbarTextOne>
              <NavbarTextTwo>
                We treat every patient as an individual and create treatment
                plans to fit your specific needs.
              </NavbarTextTwo>
            </NavbarText>
            <Link style={{ color: "white" }} to="/price" exact>
              <Button>More..</Button>
            </Link>
          </Navbar>
          <Card>
            <CardItem>
              <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2022/08/003-braces.svg'></Img>
              <Text>Dental Essentials</Text>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>New patient dental check-up</FlexText>
                <FlexPrice>$53</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Radiographs (X-Rays)</FlexText>
                <FlexPrice>$10</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Regular dental examination</FlexText>
                <FlexPrice>$230</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Emergency consultation</FlexText>
                <FlexPrice>$540</FlexPrice>
              </Flex>
              <Flex border>
                <FlexIcon></FlexIcon>
                <FlexText>Panoramic X-Ray (OPG)</FlexText>
                <FlexPrice>$120</FlexPrice>
              </Flex>
              <Footer>
                <FooterText>More...</FooterText>
                <FooterBotton></FooterBotton>
              </Footer>
            </CardItem>
            <CardItem>
              <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2022/08/022-implant.svg' />
              <Text>Hygiene Treatments</Text>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Hygiene Treatment- first visit</FlexText>
                <FlexPrice>$30</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Hygiene Treatment (Guided Therapy)</FlexText>
                <FlexPrice>$60</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Hygiene Treatment (under 16 years old)</FlexText>
                <FlexPrice>$120</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Periodontal Care with </FlexText>
                <FlexPrice>$430</FlexPrice>
              </Flex>
              <Flex border>
                <FlexIcon></FlexIcon>
                <FlexText>New patient dental check-up</FlexText>
                <FlexPrice>$230</FlexPrice>
              </Flex>
              <Footer>
                <FooterText>More...</FooterText>
                <FooterBotton></FooterBotton>
              </Footer>
            </CardItem>
            <CardItem>
              <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2022/08/014-dentist-chair-1.svg'/>
              <Text>Cosmetic Treatment</Text>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Laser Gum Sharping</FlexText>
                <FlexPrice>$60</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Composite Veneers</FlexText>
                <FlexPrice>$180</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Teeth Whitening</FlexText>
                <FlexPrice>$320</FlexPrice>
              </Flex>
              <Flex>
                <FlexIcon></FlexIcon>
                <FlexText>Bonding and Contouring</FlexText>
                <FlexPrice>$540</FlexPrice>
              </Flex>
              <Flex border>
                <FlexIcon></FlexIcon>
                <FlexText>New patient check-up</FlexText>
                <FlexPrice>$210</FlexPrice>
              </Flex>
              <Footer>
                <FooterText>More...</FooterText>
                <FooterBotton></FooterBotton>
              </Footer>
            </CardItem>
          </Card>
        </Container>
      </HomePage>
    </div>
  );
}
