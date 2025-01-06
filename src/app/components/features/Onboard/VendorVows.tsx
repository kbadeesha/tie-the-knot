import { vendorVows } from "@/app/data/ListItems";
import { Typography, Tooltip, Grid } from "@mui/material";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const VendorVows = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className="font-bold mb-4">
          Before we start, meet our Vendor Vows
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            className="text-gray-500 mb-4"
            style={{ marginRight: "8px", marginTop: "13px" }} // Space between text and icon
          >
            As a T.T.K vendor, you pledge to uphold these values:
          </Typography>
          <Tooltip
            title="T.T.K is committed to celebrating love in all of its forms every day, and requires vendors to embrace our same core values of tolerance, acceptance, and respect. The best parties are those where everyone feels welcome!"
            arrow
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FaInfoCircle />
            </span>
          </Tooltip>
        </div>
      </Grid>
      {vendorVows.map((vow, index) => (
        <Grid item xs={12} key={index}>
          <Typography variant="body1" align="left" className="font-bold mb-1">
            {vow.heading}
          </Typography>
          <Typography
            variant="body1"
            align="left"
            className="text-gray-500 mb-2"
          >
            {vow.sub}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default VendorVows;
