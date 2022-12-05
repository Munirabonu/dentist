import React from 'react'
import { useParams } from "react-router-dom";
import { data } from "../Blog_item/data";
import { Page, Title, Img ,Text} from './main'

export default function Blog_about() {
    const params = useParams();

    return (
        <Page>
            {data.filter((value) => value.id === params.id).map((value) => {
                return (
                    <div style={{ textAlign: "center" }}>
                        <Title>{value.title}</Title>
                        <Img src={value.url} alt={value.title} />
                        <Text>
                            <h3>{value.text}</h3>
                            <p>{value.text_body}</p>
                        </Text>
                    </div>
                )
            })}
        </Page>
    )
}
