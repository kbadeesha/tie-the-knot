"use client";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js
import loginImage from "../../../../../public/assets/images/cover11.jpg"; // Ensure this is correct
import "../../../../styles/pages/register.css";
import TTKCustomTextField from "@/app/components/common/TTKCustomTextField";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserRegisterFormData } from "@/app/types/User/registerUserType";
import { userRegisterFormSchema } from "@/app/schemas/userRegisterSchema";
import { useRouter } from "next/navigation";

// import RolePick from "@/app/components/features/Onboard/RolePick"
const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const methods = useForm<IUserRegisterFormData>({
    resolver: yupResolver(userRegisterFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });

  const { handleSubmit, control, reset, setValue, watch, getValues } = methods;

  const handleSubmitButton = async (data: any) => {
    console.log("Form data submitted:", data);
    router.push("/pages/register/register_rolepick");
  };
  return (
    <div className="register-container" style={{ height: "100vh" }}>
      <Grid container style={{ height: "100%" }}>
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
          <Box sx={{ p: 4 }}>
            <form noValidate onSubmit={handleSubmit(handleSubmitButton)}>
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Lets get you registered!
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TTKCustomTextField
                    name="firstName"
                    label="First Name"
                    control={control}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TTKCustomTextField
                    name="lastName"
                    label="Last Name"
                    control={control}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TTKCustomTextField
                    name="email"
                    label="Email"
                    control={control}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TTKCustomTextField
                    name="password"
                    label="Password"
                    control={control}
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    required
                    endAdornment={
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TTKCustomTextField
                    name="confirmPassword"
                    label="Confirm Password"
                    control={control}
                    type={showConfirmPassword ? "text" : "password"}
                    fullWidth
                    required
                    endAdornment={
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    }
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  mt: 4,
                }}
              >
                <Button type="submit" className="register-button">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
