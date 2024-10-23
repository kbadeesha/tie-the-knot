"use client";
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TTKCustomTextField from "../../TTKCustomTextField";
import TTKCustomSelect from "../../TTKCustomSelect";

const steps = ["Basic Information", "Account Details"];

interface VendorFormData {
  name?: string;
  companyName?: string;
  designation?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  vendorType?: string;
}

const vendorOptions = [
  { label: "Venue", value: "venue" },
  { label: "Photographers", value: "photographers" },
  { label: "Videographer", value: "videographer" },
  { label: "Florists", value: "florists" },
  { label: "Catering", value: "catering" },
  { label: "Cakes", value: "cakes" },
  { label: "Bands/DJs", value: "bands_djs" },
  { label: "Beauty", value: "beauty" },
  { label: "Planners", value: "planners" },
  { label: "Religious", value: "religious" },
  { label: "Furniture/Rentals", value: "furniture_rentals" },
  { label: "Luxury Cars", value: "luxury_cars" },
  { label: "Other", value: "other" },
];

function WizardFormVendor() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<VendorFormData>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log("Vendor form submitted with data:", formData);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  align="center"
                  className="font-bold mb-4"
                >
                  Tell Us About Yourself
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="text-gray-500 mb-4"
                >
                  Please provide your personal details so we can create a
                  personalized experience tailored to your wedding vendor.
                  journey. Your insights will help us understand your unique
                  offerings and how we can best support your business.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TTKCustomSelect
                  name="vendorType"
                  label="Vendor Type"
                  value={formData.vendorType || ""} // Fallback to empty string
                  onChange={handleChangeSelect}
                  options={vendorOptions}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField
                  name="companyName"
                  label="Company Name"
                  value={formData.companyName || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField
                  name="name"
                  label="Full Name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField
                  name="designation"
                  label="Designation"
                  value={formData.designation || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                className="font-bold mb-4"
              >
                Create Your Account
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className="text-gray-500 mb-4"
              >
                Set up your account to stay connected with us throughout your
                planning process. Your email and password will ensure you can
                access your information anytime. We value your privacy and will
                keep your details safe.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="email"
                label="Email"
                value={formData.email || ""}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
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
                        aria-label="toggle password visibility"
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
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword || ""}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber || ""}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        );
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <div className="container mx-auto p-4">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          p: 4,
          mt: 4,
          borderRadius: 2,
          boxShadow: "md",
          bgcolor: "background.paper",
        }}
        className="border border-gray-200 dark:border-gray-700"
      >
        {getStepContent(activeStep)}

        <div className="mt-6 flex justify-end">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className="mt-6 py-3"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className="bg-black text-white mt-6 py-3"
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default WizardFormVendor;
