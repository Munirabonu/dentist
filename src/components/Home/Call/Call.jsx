import React from 'react';
import {Container, Text,TextOne,TextTwo,Button, Input } from './main';

export default function Call() {
    return (
        <div>
            <Container>
                <Text>
                    <TextOne>Stay in touch</TextOne>
                    <TextTwo>Subscribe for access to exclusive events and all the latest news</TextTwo>
                </Text>
                <Input type="email" name ="email" placeholder='Manzil' />
                <Button>Jonatish</Button>
            </Container>
        </div>
    )

}
