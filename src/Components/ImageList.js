import React from 'react';
import { Card, CardImg, Col } from 'reactstrap';

const ImageList = (props) => {

    const images = props.images.map(({description, id, urls}) => {
        return (
            <Col>
                <Card>
                    <CardImg key={id} src={urls.regular} alt={description} />
                </Card>
            </Col>
        );
    })

    return(
            <div>{images}</div>
    )

}

export default ImageList;