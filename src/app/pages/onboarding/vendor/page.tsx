import { Grid } from "@mui/material";
import Image from "next/image"; // Import the Image component from Next.js
import React from "react";
import loginImage from "../../../../../public/assets/images/cover15.jpg"; // Ensure this is correct
import "../../../../styles/pages/register.css";
import WizardFormOnboardVendor from "@/app/components/features/Register/WizardFormOnBoardVendor";
const page = () => {
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
          {/* <RolePick /> */}
          <WizardFormOnboardVendor />
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
