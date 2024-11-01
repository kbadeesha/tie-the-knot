// ./src/app/login/page.tsx

"use client";

import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import loginImage from "../../../../public/assets/images/cover14.jpg"; // Replace with your image path

import "../../../styles/pages/register.css"; // Import the CSS module
import TTKCustomTextField from "../../components/common/TTKCustomTextField";
import TTKCustomButton from "../../components/common/TTKCustomButton";
import { loginUser } from "@/api/authApi";
import { ILoginUserPayload } from "@/types/User/registerUserType";

const page = () => {
  const [formData, setFormData] = useState<ILoginUserPayload>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser(formData);
    console.log("Login Form submitted:", formData);
  };
  return (
    <div className="register-container" style={{ height: "100vh" }}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={5} className="register-imageContainer">
          <Image
            src={loginImage}
            alt="Login"
            layout="fill"
            objectFit="cover"
            className="register-image"
          />
        </Grid>
        <Grid item xs={7} className="register-formContainer">
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="h4" gutterBottom>
              Login
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
            <TTKCustomButton type="submit" fullWidth sx={{ mt: 3 }}>
              Login
            </TTKCustomButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
