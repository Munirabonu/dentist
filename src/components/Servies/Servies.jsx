import React from "react";
import {
  Container,
  HomePage,
  Text,
  Img,
  TextOne,
  TextTwo,
  TextThree,
  Button,
} from "./main";
import services from "../../img/Icon/services.jpg";
import { Link } from "react-router-dom";

export default function ServiesPage() {
  return (
    <div>
      <HomePage>
        <Container>
          <Text>
            <TextOne>Includes free consultation*</TextOne>
            <TextTwo>
              Our services will help you forget about dental problems
            </TextTwo>
            <TextThree>
              Dr. Simmons and her team of Oral Surgeons and Periodontists are
              committed to providing you with the highest quality of implants
              and crowns.
            </TextThree>

            <Link to="/contact">
              <Button>Contact</Button>
            </Link>
          </Text>
          <Img src={services} />
        </Container>
      </HomePage>
    </div>
  );
}
