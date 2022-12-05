import React from "react";
import {
  Container,
  HomePage,
  Text_p,
  Smile_text,
  Text,
  Img,
  ImgItem,
  AnimationIcon,
  AnimationIcon2,
  AnimationIcon3,
  Icon,
  Icon_text,
  Call,
  Top_animation_icon1,
  Top_animation_icon3,
  Top_animation_icon2,
  Bg_left,
  Bg_right,
} from "./main";
import homePage from "../../img/Icon/home_page.jpg";

export default function Homes() {
  return (
    <div>
      <HomePage>
        <Container>
          <Text>
            <Text_p>A first class dentistry experience</Text_p>
            <Smile_text>
              Because your smile is the beauty of your soul.
            </Smile_text>
            <Call href="tel">
              <Icon></Icon>
              <Icon_text> 1-33-1212-121</Icon_text>
            </Call>
          </Text>
          <ImgItem>
            <Bg_left src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-3.svg'/>
            <Top_animation_icon1 />
            <Top_animation_icon2 />
            <Top_animation_icon3 />
            <Img src={homePage} />
            <AnimationIcon />
            <AnimationIcon2 />
            <AnimationIcon3 />
          <Bg_right  src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-2.svg'/>
          </ImgItem>
        </Container>
      </HomePage>
    </div>
  );
}
