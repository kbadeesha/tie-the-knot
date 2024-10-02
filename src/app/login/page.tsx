// ./src/app/login/page.tsx

"use client";

import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import Image from "next/image"; 
import loginImage from "../../../public/assets/images/cover2.jpg"; // Replace with your image path
import  "../../styles/pages/login.css"; // Import the CSS module

const LoginPage = () => {
  return (
    <Container  className="login-container">
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={5} className="login-imageContainer">
          <Image 
            src={loginImage} 
            alt="Login Image" 

            className="login-image" 
          />
        </Grid>
        <Grid item xs={7} className="login-formContainer">
          <div className="login-form">
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <TextField 
              label="Email" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
            />
            <TextField 
              label="Password" 
              type="password" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
            />
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
