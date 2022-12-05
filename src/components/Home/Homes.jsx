import React from "react";
import {
  Container,
  Home_page,
  Text_p,
  Smile_text,
  Text,
  Img,
  Img_item,
  Animation_icon,
  Animation_icon2,
  Animation_icon3,
  Icon,
  Icon_text,
  Call,
  Top_animation_icon1,
  Top_animation_icon3,
  Top_animation_icon2,
  Bg_left,
  Bg_right,
} from "./main";
import home_page from "../../img/Icon/home_page.jpg";
import bg_left from '../../img/Icon/bg_left.jpg';
export default function Homes() {
  return (
    <div>
      <Home_page>
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
          <Img_item>
            <Bg_left src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-3.svg'/>
            <Top_animation_icon1 />
            <Top_animation_icon2 />
            <Top_animation_icon3 />
            <Img src={home_page} />
            <Animation_icon />
            <Animation_icon2 />
            <Animation_icon3 />
          <Bg_right  src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2021/06/home-2.svg'/>
          </Img_item>
        </Container>
      </Home_page>
    </div>
  );
}
