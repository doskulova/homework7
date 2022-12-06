import React from 'react';
import {Col, Card} from "react-bootstrap";

function Posts({objects}) {
    console.log(objects)
    return (
        <Col md={6} lg={4}>
            <Card style={{ width: '100%', height:'250px',marginBottom:"10px", borderColor:'yellow'}}>
                <Card.Body>
                    <Card.Title>{objects.id}</Card.Title>
                    <Card.Text>{objects.title}</Card.Text>
                    <Card.Text>{objects.body}</Card.Text>
                </Card.Body>
            </Card>

        </Col>
    );
}

export default Posts;