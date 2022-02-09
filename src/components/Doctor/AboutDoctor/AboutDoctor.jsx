import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../Doctor_card/data";
import doc from "../../../img/Icon/doctor.jpg";
import { Breadcrumb } from 'antd';

import {
  Navbar,
  Navbar_link,
  Card,
  Icon,
  Img,
  List,
  List_text,
  Texts,
  Text_one,
  Text_two,
  Button,
  Button_text,
  Text,
  Facebooks,
  Instagrams,
  Twitters


} from "./main";


const AboutDoctor = () => {
  const params = useParams();


  const doctor = data.find((ele) => ele.id === params.id);

  return (
    <div>
      <Navbar>

      <Breadcrumb>
        <Breadcrumb.Item>
          <Navbar_link style={{ color: 'rgb(63,213,211)' }} to='/'>Home</Navbar_link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Navbar_link to='/doctor'>Doctor</Navbar_link>
        </Breadcrumb.Item>
      </Breadcrumb>
      </Navbar>
      <Card key={doctor.id}>
        <Img src={doc}></Img>
        <Texts>
          <Text_one>{doctor?.name}</Text_one>
          <Text_two>{doctor?.job}</Text_two>
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
          <Button>
            <Facebooks /><Instagrams /><Twitters />
          </Button>
        </Texts>
      </Card>
      <Text>
      <h3>Short Biography</h3>
        {doctor?.about}
      </Text>
    </div>
  );
};

export default AboutDoctor;
