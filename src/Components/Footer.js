import React from 'react'
import { Card } from "react-bootstrap";

function Footer() {
    return (
        <div>
            <Card style={{ width: '100%', height: '10rem' }}>
                <Card.Footer className="text-muted">
                    <Card.Subtitle className="mb-2 text-muted">Copyright 2021</Card.Subtitle>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Footer
