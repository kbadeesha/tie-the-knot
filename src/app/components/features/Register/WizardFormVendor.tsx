"use client";
import React, { useEffect, useState } from "react";
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
  Tooltip,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TTKCustomTextField from "../../common/TTKCustomTextField";
import TTKCustomSelect from "../../common/TTKCustomSelect";
import { FaInfoCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IVendorRegisterFormData } from "@/types/Vendor/registerVendorType";
import { vendorOptions, vendorVows } from "@/app/data/ListItems";

const steps = ["Vendor Vows", "Basic Information", "Account Details"];

function WizardFormVendor() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<IVendorRegisterFormData>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPlannerPage, setIsPlannerPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setIsPlannerPage(pathname.includes("planner"));
    }
  }, [pathname]);

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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                className="font-bold mb-4"
              >
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
                <Typography
                  variant="body1"
                  align="left"
                  className="font-bold mb-1"
                >
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
          </Grid>
        );
      case 1:
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
              {!isPlannerPage && (
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
              )}
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
              <Grid item xs={6}>
                <TTKCustomTextField
                  name="firstName"
                  label="First Name"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TTKCustomTextField
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField
                  name="address"
                  label="Address"
                  value={formData.address || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField
                  name="city"
                  label="City"
                  value={formData.city || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
        );
      case 2:
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
                label="Business Phone Number"
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
            {activeStep === 0
              ? "I do"
              : activeStep === steps.length - 1
              ? "Submit"
              : "Next"}
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default WizardFormVendor;
