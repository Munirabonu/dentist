import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../Doctor_card/data";

const AboutDoctor = () => {
  const params = useParams();

  console.log("params", params.id);

  const doctor = data.find((ele) => ele.id === params.id);
  console.log(doctor);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Doctor {doctor?.name}</h1>
      <h2>{doctor?.job}</h2>
      <p>{doctor.skill1}</p>
    </div>
  );
};

export default AboutDoctor;
