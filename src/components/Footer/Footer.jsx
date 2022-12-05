import React from "react";
import {
  Contact,
  Container,
  Location,
  Opens,
  Recurs,
  Item,
  Link,
  Flex,
  FlexItem,
  FooterBottom,
  Icons,
  Facebooks,
  Instagrams,
  Twitters,
  activeStyle,
} from "./main";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import routes from "../../utils/path";

export default function Footer() {
  return (
    <div>
      <Container>
        <Recurs>
          <h3>Resources</h3>
          {routes.map(({ id, title, path }) => {
            return (
              <Item key={id}>
                <Link activeStyle={activeStyle} to={path} exact>
                  {title}
                </Link>
              </Item>
            );
          })}
        </Recurs>
        <Contact>
          <h3>Contact info </h3>
          <Item active>Address</Item>
          <Item> Lorem ipsum dolor sit.</Item>
          <Item active> Phone</Item>
          <Item>
            <a href="tel:+99899890899">+889 (99) 121-12-12</a>
          </Item>

          <Item active>Email</Item>
          <Item>
            <a href="mailto:webmaster@example.com">email</a>
          </Item>
        </Contact>
        <Location>
          <h3>Our Locations</h3>
          <div style={{ width: "100%", position: "relative" }}>
            <YMaps>
              <Map
                width="100%"
                defaultState={{ center: [27.751574, 34.573856], zoom: 4 }}
              >
                <Placemark defaultGeometry={[27.751574, 34.573856]} />
              </Map>
            </YMaps>
          </div>
        </Location>
        <Opens>
          <h3>Open</h3>
          <Flex>
            <FlexItem>Dushanba</FlexItem>
            <FlexItem>8:30 - 17:00</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Dushanba</FlexItem>
            <FlexItem>8:30 - 17:00</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Dushanba</FlexItem>
            <FlexItem>8:30 - 17:00</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Dushanba</FlexItem>
            <FlexItem>8:30 - 17:00</FlexItem>
          </Flex>
          <Flex>
            <FlexItem>Dushanba</FlexItem>
            <FlexItem>8:30 - 17:00</FlexItem>
          </Flex>
        </Opens>
      </Container>
      <FooterBottom>
        <p>
          This is a sample website – cmsmasters © 2022 / All Rights Reserved
        </p>
        <Icons>
          <Facebooks />
          <Instagrams />
          <Twitters />
        </Icons>
      </FooterBottom>
    </div>
  );
}
