import React from 'react';
import { Container ,Icons,Icon_text , Icon , Grid , Grid_item , Text_one , Text_two,Flex,Flex_icon,Flex_text} from './main';

export default function Practic() {
    return (
        <div>
            <Container>
                <Icons>
                    <Icon></Icon>
                    <Icon_text>Covid Secure</Icon_text>
                </Icons>
                <Grid>
                    <Grid_item>
                        <Text_one>
                            Our practice remains open and welcoming patients
                        </Text_one>
                        <Text_two>
                            There are no restrictions with regards to medical treatments and you are actively encouraged to keep your appointments.
                        </Text_two>
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
