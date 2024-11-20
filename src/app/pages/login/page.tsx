"use client";

import React, { useState } from "react";
import { Grid, Box, InputAdornment, IconButton } from "@mui/material";
import Image from "next/image";
import loginImage from "../../../../public/assets/images/cover5.jpg"; // Replace with your image path
import "../../../styles/pages/register.css"; // Import the CSS module
import TTKCustomTextField from "../../components/common/TTKCustomTextField";
import TTKCustomButton from "../../components/common/TTKCustomButton";
import { loginUser } from "@/api/authApi";
import { useRouter } from "next/navigation";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import TTKCustomTextField2 from "@/app/components/common/TTKCustomTextField2";
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
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
  });
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
            layout="fill"
            objectFit="cover"
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
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: "100%", height: "100%" }}
            >
              <Grid item xs={12}>
                <TTKCustomTextField2
                  control={control}
                  label="Email"
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField2
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
                    maxWidth: "200px", // Max width
                    alignSelf: "center", // Center the button
                  }}
                >
                  Login
                </TTKCustomButton>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
