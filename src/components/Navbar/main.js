import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar_page = styled.div`
  display: flex;
  align-items:center;
  /* border-bottom: 2px solid rgba(195, 191, 191, 0.685); */
  box-shadow:0px 1px 10px white;
  position:fixed;
  top:0;
  width:100%;
  background: white;
  z-index:999;
`;
export const Drop = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
export const Containers = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;
export const Link = styled(NavLink)`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;
  color: grey;
  text-decoration: none;
  transition: all .5s ;
  position: relative;
  &::before {
          position: absolute;
          content: "";
          height: 3px;
          width: 100%;
          bottom: -10px;
          background: linear-gradient(to right, rgb(210,234,255),rgb(169,142,237));
          transition: transform 0.5s ease-in-out;
          transform: scaleX(0);
          transform-origin: right;
        }
        &:focus::before,
        &:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
        &:hover {
          color: #685ed6;
        }
`;
export const Img = styled.div`
  display: flex;
  overflow: hidden;
  margin-left: 80px;
  background-color: white;
`;
export const Icon = styled.div`
  alt: "asss";
  width: 100px;
  position: relative;
`;
export const Icon_text = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 25px;
  color: black;
`;
export const Text = styled.p`
  text-decoration: none;
  color: grey;
  font-size: 15px;
  margin: 0%;
`;
export const Ul = styled.div`
  display: flex;
  margin: 20px 0;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Item = styled.div`
  padding: 0 20px;
  color: grey;
  font-size: 18px;
`;
export const activeStyle = {
  color: "rgb(92, 94, 96)",
  fontWeight: 700,
};
