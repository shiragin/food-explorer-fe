import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function BasicSearch({ name, setName }) {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Search by name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Type dish name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
