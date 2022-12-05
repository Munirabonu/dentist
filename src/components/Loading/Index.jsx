import { Spin } from "antd";
import { Animation } from "./main";
import logo from "../../img/Icon/dental/ПЕЧАТЬ.png";

export default function Loading() {
  return (
    <Animation>
      <Spin>
        <img src={logo} width={150} alt="logo" />
      </Spin>
    </Animation>
  );
}
