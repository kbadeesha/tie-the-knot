import { Grid } from "@mui/material";
import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import loginImage from "../../../../../public/assets/images/cover11.jpg"; // Ensure this is correct
import "../../../../styles/pages/register.css";
import RolePick from "@/app/components/features/Onboard/RolePick";
const RegisterPage = () => {
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
          <RolePick />
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterPage;
