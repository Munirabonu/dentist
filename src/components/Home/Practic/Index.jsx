import React from 'react';
import { Container ,Icons,IconText , Icon , Grid , Grid_item , TextOne , TextTwo,Flex,Flex_icon,Flex_text} from './main';

export default function Practic() {
    return (
        <div>
            <Container>
                <Icons>
                    <Icon></Icon>
                    <IconText>Covid Secure</IconText>
                </Icons>
                <Grid>
                    <Grid_item>
                        <TextOne>
                            Our practice remains open and welcoming patients
                        </TextOne>
                        <TextTwo>
                            There are no restrictions with regards to medical treatments and you are actively encouraged to keep your appointments.
                        </TextTwo>
                    </Grid_item>
                    <Grid_item>
                        <Flex>
                            <Flex_icon></Flex_icon>
                            <Flex_text>Medically sterilized equ ipment;</Flex_text>
                        </Flex>
                        <Flex>
                            <Flex_icon></Flex_icon>
                            <Flex_text>Medically sterilized e quipm ent;</Flex_text>
                        </Flex>

                        <Flex>
                            <Flex_icon></Flex_icon>
                            <Flex_text>Medically equipment;</Flex_text>
                        </Flex>

                        <Flex>
                            <Flex_icon></Flex_icon>
                            <Flex_text>Medically ipment;</Flex_text>
                        </Flex>

                    </Grid_item>
                </Grid>
            </Container>
        </div>
    )
}
