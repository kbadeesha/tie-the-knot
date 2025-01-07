import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import loginImage from "../../../../public/assets/images/cover15.jpg";
import "../../../styles/pages/register.css";
import WizardFormOnboardVendor from "@/app/components/features/Onboard/WizardFormOnBoardVendor";
import CoupleProfileComponent from "@/app/components/features/UserProfiles/CoupleProfile/CoupleProfileComponent";
import VendorProfileComponent from "@/app/components/features/UserProfiles/VendorProfile/VendorProfileComponent";
const page = () => {
  return (
    <div className="register-container" style={{ height: "100vh" }}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={3} className="register-imageContainer">
          <Image
            src={loginImage}
            alt="Login"
            fill
            style={{ objectFit: "cover" }}
            className="register-image"
          />
        </Grid>
        <Grid item xs={9} className="register-formContainer">
          {/* TODO: switch between couple and vendor profiles here with stored
          data of logged in user */}
          <CoupleProfileComponent />
          {/* <VendorProfileComponent /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
