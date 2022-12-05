import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../DoctorCard/data";
import doc from "../../../img/Icon/doctor.jpg";
import { Breadcrumb } from 'antd';

import {
  Navbar,
  NavbarLink,
  Card,
  Icon,
  Img,
  List,
  ListText,
  Texts,
  TextOne,
  TextTwo,
  Button,
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
          <NavbarLink style={{ color: 'rgb(63,213,211)' }} to='/'>Home</NavbarLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavbarLink to='/doctor'>Doctor</NavbarLink>
        </Breadcrumb.Item>
      </Breadcrumb>
      </Navbar>
      <Card key={doctor.id}>
        <Img src={doc}></Img>
        <Texts>
          <TextOne>{doctor?.name}</TextOne>
          <TextTwo>{doctor?.job}</TextTwo>
          <List>
            <Icon></Icon>
            <ListText>{doctor.skill1}</ListText>
          </List>
          <List>
            <Icon></Icon>
            <ListText>{doctor.skill2}</ListText>
          </List>
          <List>
            <Icon></Icon>
            <ListText>{doctor.skill3}</ListText>
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
