import React from "react";
import {
  Container,
  HomePage,
  TextP,
  SmileText,
  Text,
  Img,
  ImgItem,
  AnimationIcon,
  AnimationIcon2,
  AnimationIcon3,
  Icon,
  IconText,
  Call,
  TopAnimationIcon1,
  TopAnimationIcon3,
  TopAnimationIcon2,
  BgLeft,
  BgRight,
} from "./main";
import homePage from "../../img/Icon/home_page.jpg";

export default function Homes() {
  return (
    <div>
      <HomePage>
        <Container>
          <Text>
            <TextP>A first class dentistry experience</TextP>
            <SmileText>
              Because your smile is the beauty of your soul.
            </SmileText>
            <Call href="tel">
              <Icon></Icon>
              <IconText> 1-33-1212-121</IconText>
            </Call>
          </Text>
          <ImgItem>
            <BgLeft src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-3.svg'/>
            <TopAnimationIcon1 />
            <TopAnimationIcon2 />
            <TopAnimationIcon3 />
            <Img src={homePage} />
            <AnimationIcon />
            <AnimationIcon2 />
            <AnimationIcon3 />
          <BgRight  src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-2.svg'/>
          </ImgItem>
        </Container>
      </HomePage>
    </div>
  );
}
