"use client";
// import { googleLogin } from "@/api/authApi";
import TTKCustomButton from "@/app/components/common/TTKCustomButton";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import loginImage from "../../../../../public/assets/images/cover5.jpg";
import "../../../../styles/pages/register.css";

const page = () => {
  // const handleGoogleLogin = async () => {
  //   try {
  //     const response: any = await googleLogin(); // Get the URL from back-end to redirect to Google
  //     if (response?.url) {
  //       console.log(response);
  //       // Redirect the user to the Google OAuth URL
  //       window.location.href = response.url; // This will redirect the user to Google's OAuth page
  //     }
  //   } catch (error) {
  //     console.error("Google login error:", error);
  //     // Show an error message to the user
  //   }
  // };
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
            <Box className="button-container">
              <Link
                href="https://tietheknot-api.onrender.com/v1/auth/google-login?redirectUrl=http://localhost:3000/"
                passHref
              >
                <TTKCustomButton type="button">
                  Signup using Google
                </TTKCustomButton>
              </Link>
              <span className="or-text">Or</span>
              <Link href="/pages/register" passHref>
                <TTKCustomButton type="button">
                  Signup using Email
                </TTKCustomButton>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
