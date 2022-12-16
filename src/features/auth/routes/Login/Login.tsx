import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';

const Login = () => {
  return (
    <Container maxWidth={false}>
      <Box height="100vh" textAlign="center" clone>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs="auto">
            <Typography variant="h5" component="h1" gutterBottom>
              Log in via Github
            </Typography>
            <Link
              href={`https://github.com/login/oauth/authorize?client_id=405d9cc44d14925982a5`}
              color="textPrimary"
              data-testid="login-link"
              aria-label="Login Link"
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
