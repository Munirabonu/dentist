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
  IconText,
} from "./main";
import doctor from "../../../img/Icon/home-doctor.jpg";
import { Link } from "react-router-dom";
export default function HomeDoctor() {
  return (
    <div>
      <HomePage>
        <Container>
          <Img src={doctor} />
          <Text>
            <TextOne>Includes free consultation*</TextOne>
            <TextTwo>Get Complete Dental Implant: Save 15%</TextTwo>
            <TextThree>
              <Icon></Icon>
              <IconText>lorem dolor sit ametipisicing elit.</IconText>
              <Icon></Icon>
              <IconText>lorem dolor sit ametsicing elit.</IconText>
              <Icon></Icon>
              <IconText>adipisicing elit.</IconText>
              <Icon></Icon>
              <IconText>ectetur adipisicing elit.</IconText>
              <Icon></Icon>
              <IconText>lorem elit.</IconText>
              <Icon></Icon>
              <IconText>lorem adipisicing elit.</IconText>
            </TextThree>
            <Link style={{ color: "white" }} to="/doctors" exact>
              <Button>More...</Button>
            </Link>
          </Text>
          {/* <After src={home_animation} /> */}
        </Container>
      </HomePage>
    </div>
  );
}
