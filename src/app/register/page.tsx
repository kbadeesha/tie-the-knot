// ./src/app/register/page.tsx

"use client"; // Add this line at the top

import React, { useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import registerImage from "../../../public/assets/images/cover4.jpg"; // Replace with your image path
import TTKCustomTextField from "../components/TTKCustomTextField";
import TTKCustomButton from "../components/TTKCustomButton";
import "../../styles/pages/register.css"; // Import the CSS file

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add registration logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="register-container">
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={7} className="register-imageContainer">
          <Image
            src={registerImage}
            alt="Register Image"
            className="register-image"
          />
        </Grid>
        <Grid item xs={5} className="register-formContainer">
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ padding: 6 }}
          >
            <Typography variant="h4" gutterBottom>
              Register
            </Typography>
            <TTKCustomTextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TTKCustomTextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TTKCustomTextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TTKCustomButton type="submit" fullWidth sx={{ mt: 2 }}>
              Register
            </TTKCustomButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterPage;
