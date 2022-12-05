import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import NavbarRoutes from "../../routes/routes";
import {
  Containers,
  Drop,
  Link,
  Img,
  Navbar_page,
  Ul,
  Item,
  activeStyle,
} from "./main";
import logo from "../../img/Icon/dental/logo.png";

export default function Navbars() {
  return (
    <Navbar_page>
      <Containers>
        <Img>
          <Link to="/">
            <img src={logo} width={80} alt="logo" />
          </Link>
        </Img>
        <Ul>
          {NavbarRoutes.map(({ id, title, path }) => {
            return (
              <Item key={id}>
                <Link activeStyle={activeStyle} to={path} exact>
                  {title}
                </Link>
              </Item>
            );
          })}
        </Ul>
      </Containers>
      <Drop>
        <Navbar width="100%" expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {NavbarRoutes.map(({ id, title, path }) => {
                    return (
                      <Nav.Link key={id}>
                        <Link activeStyle={activeStyle} to={path} exact>
                          {title}
                        </Link>
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Drop>
    </Navbar_page>
  );
}
