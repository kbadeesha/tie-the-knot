"use client";
import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  Grid,
  InputAdornment,
  SelectChangeEvent,
} from "@mui/material";
import TTKCustomTextField from "../../common/TTKCustomTextFieldOld";
import { usePathname } from "next/navigation";
import { IVendorRegisterFormData } from "@/app/types/Vendor/registerVendorType";
import "../../../../styles/pages/register.css";
import VendorVows from "./VendorVows";
import TTKServiceMultiSelect from "../../common/TTKServiceMultiSelect";
import { VENUE_FILTERS } from "@/app/data/filterData";
import TTKCustomSelect from "../../common/TTKCustomSelect";
import { vendorOptions } from "@/app/data/ListItems";

const steps = [
  "Vendor Vows",
  "Basic Information",
  "Location",
  "Services",
  "Pricing",
  "Summary,",
];

function WizardFormOnboardVendor() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<IVendorRegisterFormData>({});
  const [isPlannerPage, setIsPlannerPage] = useState(false);
  const pathname = usePathname();
  const venueFilters = VENUE_FILTERS;
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
  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleServiceChange = (selectedServices: string[], label: string) => {
    setFormData((prevData) => {
      // 1. Create a copy of the existing services or initialize an empty object
      const updatedServices = prevData.selectedServices ? { ...prevData.selectedServices } : {}; 
  
      // 2. Update services for the specific category (label)
      updatedServices[label] = selectedServices; 
  
      return {
        ...prevData,
        selectedServices: updatedServices, 
      };
    });
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2} alignItems="stretch">
            <VendorVows />
          </Grid>
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
                value={formData.vendorType || (isPlannerPage ? "planner" : "")} // Set "planners" if on the planner page Fallback to empty string
                onChange={handleChangeSelect}
                options={vendorOptions}
                disabled={isPlannerPage}
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
                name="phoneNumber"
                label="Business Phone Number"
                value={formData.phoneNumber || ""}
                onChange={handleChange}
                fullWidth
                required
                placeholder="7XXXXXXX"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">(+94)</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
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
                Where are you based?
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
        );
      case 3:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                className="font-bold mb-4"
              >
                Services Provided
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className="text-gray-500 mb-4"
              >
                What are the services that you provide?
              </Typography>
            </Grid>
            {venueFilters.map((filter, index) => (
              <Grid item xs={12} key={index}>
                <TTKServiceMultiSelect
                  options={filter.data}
                  label={filter.heading}
                  description={filter.description}
                  onChange={(selected) =>
                    handleServiceChange(selected, filter.heading)
                  }
                />
              </Grid>
            ))}
          </Grid>
        );
      case 4:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                className="font-bold mb-4"
              >
                Let's Talk about Pricing
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className="text-gray-500 mb-4"
              >
                Prices to get an idea for the clients.
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        );
      case 5:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                className="font-bold mb-4"
              >
                Summary
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className="text-gray-500 mb-4"
              >
                Here's Your Profile summary! Dont worry you can change this
                later.
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        );
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <div className="container mx-auto p-4">
      <Stepper activeStep={activeStep} alternativeLabel className="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          p: 4,
        }}
        className="border border-gray-200 dark:border-gray-700"
      >
        {getStepContent(activeStep)}

        <div className="mt-6 flex justify-end gap-2">
          {" "}
          {/* Using gap-2 to add space */}
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className="register-button"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            className={`submit-button ${
              activeStep === 0 ? "" : "register-button"
            }`}
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

export default WizardFormOnboardVendor;
