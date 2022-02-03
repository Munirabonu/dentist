import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import { Container, Facebooks, Grid, Grid_text, Instagrams, Item, Text, Twitters } from './main';

function Map_page() {
    return (
        <div>
            <Container>
                <Text>Contact Information</Text>
                <Grid>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <YMaps>
                            <Map width='100%' height='100%' defaultState={{ center: [41.317315, 69.163040], zoom: 9, controls: ['zoomControl', 'fullscreenControl'], }}
                                modules={['control.ZoomControl', 'control.FullscreenControl']}>
                                        <Placemark defaultGeometry={[41.317315, 69.163040]} />
                            </Map>
                        </YMaps>
                    </div>
                    <Grid_text>
                        <h3 >Icon </h3>
                        <Item green>Visit us</Item>
                        <Item> Lorem ipsum dolor sit.</Item>
                        <Item green> Get in touch</Item>
                        <Item><a href="tel:+99899890899">+889 (99) 121-12-12</a></Item>

                        <Item green>Email</Item>
                        <Item><a href="mailto:webmaster@example.com">email@gmail.com</a></Item>
                        <Facebooks /><Instagrams /><Twitters />
                    </Grid_text>
                </Grid>
            </Container>
        </div>
    )
}

export default Map_page;
