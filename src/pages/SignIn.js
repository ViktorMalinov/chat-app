import { Icon } from '@rsuite/icons';
import React from 'react';
import firebase from 'firebase/app';
import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
import { auth } from '../misc/firebase';

const SignIn = () => {
  const signInWithProvider = provider => {
    auth.signInWithProvider(provider);
  };

  // const onFacebookSignIn = () => {
  //   signInWithProvider(new firebase());
  // };
  // const onGoogleSignIn = () => {
  //   signInWithProvider();
  // };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                <Button block color="blue" appearance="primary">
                  <Icon /> Continue with Facebook
                </Button>
                <Button block color="green" appearance="primary">
                  <Icon /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
