import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import '../../src/App.css';

import LoginForm from '../components/Form';

const Login = () => (
  <Container text className="horizontalAlign formArea">
    <Grid.Column centered>
      <h1>Login</h1>
      <LoginForm />
    </Grid.Column>
  </Container>
);

export default Login;
