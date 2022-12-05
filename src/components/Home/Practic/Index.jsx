import React from 'react';
import { Container ,Icons,IconText , Icon , Grid , GridItem , TextOne , TextTwo,Flex,FlexIcon,FlexText} from './main';

export default function Practic() {
    return (
        <div>
            <Container>
                <Icons>
                    <Icon></Icon>
                    <IconText>Covid Secure</IconText>
                </Icons>
                <Grid>
                    <GridItem>
                        <TextOne>
                            Our practice remains open and welcoming patients
                        </TextOne>
                        <TextTwo>
                            There are no restrictions with regards to medical treatments and you are actively encouraged to keep your appointments.
                        </TextTwo>
                    </GridItem>
                    <GridItem>
                        <Flex>
                            <FlexIcon></FlexIcon>
                            <FlexText>Medically sterilized equ ipment;</FlexText>
                        </Flex>
                        <Flex>
                            <FlexIcon></FlexIcon>
                            <FlexText>Medically sterilized e quipm ent;</FlexText>
                        </Flex>

                        <Flex>
                            <FlexIcon></FlexIcon>
                            <FlexText>Medically equipment;</FlexText>
                        </Flex>

                        <Flex>
                            <FlexIcon></FlexIcon>
                            <FlexText>Medically ipment;</FlexText>
                        </Flex>

                    </GridItem>
                </Grid>
            </Container>
        </div>
    )
}
