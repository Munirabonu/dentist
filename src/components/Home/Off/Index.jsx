import React from "react";
import {
  Container,
  HomePage,
  Text,
  Img,
  TextOne,
  Icon,
  TextTwo,
  TextThree,
  Button,
  Icon_text,
  Call,
  Right,
  Border,
} from "./main";
import home from "../../../img/Icon/home-11.jpg";
import { Link } from "react-router-dom";

export default function Off_page() {
  return (
    <div>
      <HomePage>
        <Border>
          <Right></Right>
          <Container>
            <Img src={home} />
            <Text>
              <TextOne>
                <b>25% OFF</b> Dental Exam & X-Ray*
              </TextOne>
              <TextTwo>*Includes 25% OFF all treatments needed</TextTwo>
              <TextThree>
                If you are looking for a new dental home, let us welcome you to
                our state-of-the-art practice! New patients can now get a
                detailed exam and x-ray for just $129. This will let us get an
                in-depth understanding of your oral health.
              </TextThree>
              <Link style={{ color: "white" }} to="/price" exact>
                <Button>More...</Button>
              </Link>
              <Call href="tel">
                <Icon></Icon>
                <Icon_text>1-33-1212-121</Icon_text>
              </Call>
            </Text>
          </Container>
        </Border>
      </HomePage>
    </div>
  );
}
