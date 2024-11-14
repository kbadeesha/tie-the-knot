"use client";
// import { googleLogin } from "@/api/authApi";
import TTKCustomButton from "@/app/components/common/TTKCustomButton";
import Link from "next/link";
import React from "react";

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
    <div>
      <Link
        href="https://tietheknot-api.onrender.com/v1/auth/google-login?redirectUrl=http://localhost:3000/"
        passHref
      >
        <TTKCustomButton type="button">
          Signup using Google
        </TTKCustomButton>
      </Link>
      <Link href="/pages/register" passHref>
        <TTKCustomButton type="button">Signup using Email</TTKCustomButton>
      </Link>
    </div>
  );
};

export default page;
