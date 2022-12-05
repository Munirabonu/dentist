import React from "react";
import {
  Card,
  Container,
  Icon,
  Img,
  List,
  List_text,
  Texts,
  TextOne,
  TextTwo,
  Button,
  ButtonText
} from "./main";
import doc from "../../../img/Icon/doctor.jpg";
import { RightCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { data } from "./data";

export default function Doctor_card() {
  const history = useHistory();

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <Container>
        {data.map((doctor, index) => (
          <Card key={index}>
            <Img src={doc}></Img>
            <Texts>
              <TextOne>{doctor.name}</TextOne>
              <TextTwo>{doctor.job}</TextTwo>
              <List>
                <Icon></Icon>
                <List_text>{doctor.skill1}</List_text>
              </List>
              <List>
                <Icon></Icon>
                <List_text>{doctor.skill2}</List_text>
              </List>
              <List>
                <Icon></Icon>
                <List_text>{doctor.skill3}</List_text>
              </List>
              <Button onClick={() => {
                      history.push(`/doctors/${doctor.id}`);
                    }}>
                <span>Learn More</span>
                <ButtonText>
                  <RightCircleOutlined/>
                </ButtonText>
              </Button>
            </Texts>
          </Card>
        ))}
      </Container>
    </div>
  );
}
