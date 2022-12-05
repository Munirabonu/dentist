import React from "react";
import { Link } from "react-router-dom";
import {
  HomePage,
  Container,
  NavbarText_two,
  NavbarText,
  NavbarTextOne,
  Button,
  Navbar,
  Flex_price,
  Card,
  Card_item,
  Img,
  Text,
  Flex,
  Flex_text,
  Flex_icon,
  Footer,
  Footer_button,
  Footer_text,
} from "./main";

export default function Price() {
  return (
    <div>
      <HomePage>
        <Container>
          <Navbar>
            <NavbarText>
              <NavbarTextOne>Price Guide</NavbarTextOne>
              <NavbarText_two>
                We treat every patient as an individual and create treatment
                plans to fit your specific needs.
              </NavbarText_two>
            </NavbarText>
            <Link style={{ color: "white" }} to="/price" exact>
              <Button>More..</Button>
            </Link>
          </Navbar>
          <Card>
            <Card_item>
              <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2022/08/003-braces.svg'></Img>
              <Text>Dental Essentials</Text>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>New patient dental check-up</Flex_text>
                <Flex_price>$53</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Radiographs (X-Rays)</Flex_text>
                <Flex_price>$10</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Regular dental examination</Flex_text>
                <Flex_price>$230</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Emergency consultation</Flex_text>
                <Flex_price>$540</Flex_price>
              </Flex>
              <Flex border>
                <Flex_icon></Flex_icon>
                <Flex_text>Panoramic X-Ray (OPG)</Flex_text>
                <Flex_price>$120</Flex_price>
              </Flex>
              <Footer>
                <Footer_text>More...</Footer_text>
                <Footer_button></Footer_button>
              </Footer>
            </Card_item>
            <Card_item>
              <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2022/08/022-implant.svg' />
              <Text>Hygiene Treatments</Text>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Hygiene Treatment- first visit</Flex_text>
                <Flex_price>$30</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Hygiene Treatment (Guided Therapy)</Flex_text>
                <Flex_price>$60</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Hygiene Treatment (under 16 years old)</Flex_text>
                <Flex_price>$120</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Periodontal Care with </Flex_text>
                <Flex_price>$430</Flex_price>
              </Flex>
              <Flex border>
                <Flex_icon></Flex_icon>
                <Flex_text>New patient dental check-up</Flex_text>
                <Flex_price>$230</Flex_price>
              </Flex>
              <Footer>
                <Footer_text>More...</Footer_text>
                <Footer_button></Footer_button>
              </Footer>
            </Card_item>
            <Card_item>
              <Img src='https://healthy-smiles.cmsmasters.net/beta/wp-content/uploads/sites/3/2022/08/014-dentist-chair-1.svg'/>
              <Text>Cosmetic Treatment</Text>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Laser Gum Sharping</Flex_text>
                <Flex_price>$60</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Composite Veneers</Flex_text>
                <Flex_price>$180</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Teeth Whitening</Flex_text>
                <Flex_price>$320</Flex_price>
              </Flex>
              <Flex>
                <Flex_icon></Flex_icon>
                <Flex_text>Bonding and Contouring</Flex_text>
                <Flex_price>$540</Flex_price>
              </Flex>
              <Flex border>
                <Flex_icon></Flex_icon>
                <Flex_text>New patient check-up</Flex_text>
                <Flex_price>$210</Flex_price>
              </Flex>
              <Footer>
                <Footer_text>More...</Footer_text>
                <Footer_button></Footer_button>
              </Footer>
            </Card_item>
          </Card>
        </Container>
      </HomePage>
    </div>
  );
}
