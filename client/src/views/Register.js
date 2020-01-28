import React from 'react';
import { Button, Form, Container, Grid } from 'semantic-ui-react';
import '../../src/App.css';

const Register = () => (
  <Container text className="horizontalAlign formArea">
    <Grid.Column centered>
      <h1>Register</h1>
      <Form>
        <Form.Input placeholder="First Name" />
        <Form.Input placeholder="Last Name" />
        <Form.Input placeholder="Username" />
        <Form.Input type="email" placeholder="Email" />
        <Form.Input type="password" placeholder="Enter password" />
        <Form.Input type="password" placeholder="Confirm password" />
        <Button type="submit">Register</Button>
      </Form>
    </Grid.Column>
  </Container>
);

export default Register;
