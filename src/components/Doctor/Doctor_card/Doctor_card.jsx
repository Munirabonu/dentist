import React from "react";
import {
  Calls,
  Card,
  Container,
  Icon,
  Icon_text,
  Img,
  List,
  List_text,
  Texts,
  Text_one,
  Text_two,
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
              <Text_one>{doctor.name}</Text_one>
              <Text_two>{doctor.job}</Text_two>
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
            </Texts>
            <div style={{ display: "flex", fontSize: "20px" }}>
              <span>Learn More</span>

              <div>
                <RightCircleOutlined
                  onClick={() => {
                    history.push(`/doctors/${doctor.id}`);
                  }}
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    color: "#08c",
                    margin: "10px",
                  }}
                />
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </div>
  );
}
