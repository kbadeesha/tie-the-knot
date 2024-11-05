"use client";

import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import loginImage from "../../../../public/assets/images/cover14.jpg"; // Replace with your image path

import "../../../styles/pages/register.css"; // Import the CSS module
import TTKCustomTextField from "../../components/common/TTKCustomTextField";
import TTKCustomButton from "../../components/common/TTKCustomButton";
import { loginUser } from "@/api/authApi";
import { ILoginUserPayload } from "@/types/User/registerUserType";
import { useRouter } from "next/navigation";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import TTKServiceMultiSelect from "@/app/components/common/TTKServiceMultiSelect";

const Page = () => {
  const router = useRouter(); // Initialize router
  const [formData, setFormData] = useState<ILoginUserPayload>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const services = [
    "Web Development",
    "Mobile App Development",
    "SEO Optimization",
    "Cloud Hosting",
    "UI/UX Design",
    "Digital Marketing",
    "Content Writing",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginUser(formData);
      console.log("Login Form submitted:", formData);
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Grid container justifyContent="center" style={{ height: "100%" }}>
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            className="form-box"
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                mb: 5,
              }}
            >
              <Image
                src={
                  // "/assets/logo_lite.svg"
                  "/assets/logo.svg"
                }
                alt="TieTheKnot"
                width={120}
                height={20}
              />
            </Box>
            <TTKCustomTextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mt: 2, mb: 2 }}
            />
            <TTKServiceMultiSelect options={services} />
            <TTKCustomTextField
              name="password"
              label="Password"
              value={formData.password || ""}
              onChange={handleChange}
              fullWidth
              required
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TTKCustomButton
              type="submit"
              sx={{
                mt: 3,
                width: "100%", // Full width
                maxWidth: "200px", // Max width
                alignSelf: "center", // Center the button
              }}
            >
              Login
            </TTKCustomButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
