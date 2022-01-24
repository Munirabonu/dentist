import React from 'react';
import {Container, Text,Text_one,Text_two,Button, Input } from './main';

export default function Call() {
    return (
        <div>
            <Container>
                <Text>
                    <Text_one>Stay in touch</Text_one>
                    <Text_two>Subscribe for access to exclusive events and all the latest news</Text_two>
                </Text>
                <Input type="email" name ="email" placeholder='Manzil' />
                <Button>Jonatish</Button>
            </Container>
        </div>
    )

}
