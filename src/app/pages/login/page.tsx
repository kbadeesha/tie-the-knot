"use client";

import React, { useState } from "react";
import {
  Grid,
  Box,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import loginImage from "../../../../public/assets/images/cover5.jpg"; // Replace with your image path
import "../../../styles/pages/register.css"; // Import the CSS module
import TTKCustomButton from "../../components/common/TTKCustomButton";
import { loginUser } from "@/api/authApi";
import { useRouter } from "next/navigation";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import TTKCustomTextField from "@/app/components/common/TTKCustomTextField";
import { useForm } from "react-hook-form";
import { SLoginForm } from "@/app/schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginForm } from "@/app/types/login";

const Page = () => {
  const router = useRouter(); // Initialize router

  const methods = useForm<ILoginForm>({
    resolver: yupResolver(SLoginForm),
  });
  const { handleSubmit, control } = methods;
  const [password, setPassword] = useState<"password" | "text">("password");
  const togglePasswordVisibility = () => {
    setPassword((prev) => (prev === "password" ? "text" : "password"));
  };
  const onSubmit = async (formData: ILoginForm) => {
    // await loginUser(formData);
    console.log("Login Form submitted:", formData);
    router.push("/");
  };

  return (
    <div style={{ height: "100vh" }}>
      <Grid container justifyContent="center" style={{ height: "100%" }}>
        <Grid item xs={5} className="register-imageContainer">
          <Image
            src={loginImage}
            alt="Login"
            fill
            style={{ objectFit: "cover" }}
            className="register-image"
          />
        </Grid>

        <Grid item xs={7} className="register-formContainer">
          <Box className="form-box" style={{ width: "65%" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={
                  // "/assets/logo_lite.svg"
                  "/assets/logo.svg"
                }
                alt="TieTheKnot"
                width={220}
                height={120}
              />
            </Box>
            <Typography className="sologon">
              Where Wedding Dreams Meet the Best Professionals
            </Typography>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: "100%", height: "100%" }}
            >
              <div className="form-div">
                <Grid item xs={12} className="mb-4">
                  <TTKCustomTextField
                    control={control}
                    label="Email"
                    name="email"
                    required
                  />
                </Grid>
                <Grid item xs={12} className="mb-4">
                  <TTKCustomTextField
                    control={control}
                    name="password"
                    label="Password"
                    required
                    type={password === "password" ? "password" : "text"}
                    endAdornment={
                      <span
                        onClick={togglePasswordVisibility}
                        className="show-hide-icon"
                      >
                        {password === "password" ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </span>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TTKCustomButton
                    type="submit"
                    sx={{
                      mt: 3,
                      width: "100%", // Full width
                      alignSelf: "center", // Center the button
                    }}
                  >
                    Login
                  </TTKCustomButton>
                </Grid>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
