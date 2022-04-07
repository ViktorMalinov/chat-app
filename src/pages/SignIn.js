import { Icon } from '@rsuite/icons';
import React from 'react';
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import { Button, Col, Container, Grid, Panel, Row } from 'rsuite';
import { auth, database } from '../misc/firebase';

// import 'firebase/auth';

const SignIn = () => {
  const signInWithProvider = async provider => {
    try {
      const { providerId } = await signInWithPopup(auth, provider);

      console.log(providerId);

      alert('Signrd in');
    } catch (err) {
      alert(err.message);
    }
  };

  const onFacebookSignIn = () => {
    signInWithProvider(new FacebookAuthProvider());
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new GoogleAuthProvider());
  };

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
                <Button
                  block
                  color="blue"
                  appearance="primary"
                  onClick={onFacebookSignIn}
                >
                  <Icon /> Continue with Facebook
                </Button>
                <Button
                  block
                  color="green"
                  appearance="primary"
                  onClick={onGoogleSignIn}
                >
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
