import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../../src/App.css';

const LoginForm = () => (
  <Form>
    <Form.Input type="text" placeholder="Username" />
    <Form.Input type="password" placeholder="Enter password" />
    <Button type="submit">Login</Button>
  </Form>
);

export default LoginForm;
