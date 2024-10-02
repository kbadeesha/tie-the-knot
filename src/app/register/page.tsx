"use client"; // Add this line at the top

import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import TTKCustomTextField from "../components/inputs/TTKCustomTextField";
import TTKCustomButton from "../components/inputs/TTKCustomButton";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
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
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
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
    </Container>
  );
};

export default RegisterPage;
