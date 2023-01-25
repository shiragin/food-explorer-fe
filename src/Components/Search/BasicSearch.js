import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function BasicSearch () {
    const [name, setName] = useState("");
    return(
        <Form>
                 <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Label></Form.Label>
                 <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
             </Form.Group>
        </Form>
    )
}