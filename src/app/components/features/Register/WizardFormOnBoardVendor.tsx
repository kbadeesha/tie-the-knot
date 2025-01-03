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
  IconButton,
} from "@mui/material";
import TTKCustomTextField from "../../common/TTKCustomTextField";
import { usePathname } from "next/navigation";
import { IVendorRegisterFormData } from "@/app/types/Vendor/registerVendorType";
import "../../../../styles/pages/register.css";
import VendorVows from "./VendorVows";
import TTKServiceMultiSelect from "../../common/TTKServiceMultiSelect";
import { VENUE_FILTERS } from "@/app/data/filterData";
import TTKCustomSelect from "../../common/TTKCustomSelect";
import { vendorOptions } from "@/app/data/ListItems";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  step1Schema,
  step2Schema,
  step3Schema,
} from "@/app/schemas/wizardFormVendorOnboardSchema";
import TTKCustomCheckbox from "../../common/TTKCustomCheckbox";

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
  const [schema, setSchema] = useState<any>({});

  const venueFilters = VENUE_FILTERS;
  useEffect(() => {
    if (pathname) {
      setIsPlannerPage(pathname.includes("planner"));
    }
  }, [pathname]);

  const methods = useForm<IVendorRegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
      city: "",
      companyName: "",
      vendorType: "",
      selectedServices: {},
      minPrice: 0,
      maxPrice: 0,
      avgMinPrice: 0,
      avgMaxPrice: 0,
      // vows: false,
    },
  });
  const { handleSubmit, control, reset, setValue, watch, getValues } = methods;

  const handleNext = async (data: any) => {
    if (activeStep === steps.length - 1) {
      console.log("Vendor form submitted with data:", formData);
      console.log("Vendor form Data:", data);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  useEffect(() => {
    if (activeStep === 1) {
      setSchema(step1Schema);
    } else if (activeStep === 2) {
      setSchema(step2Schema);
    } else if (activeStep === 3) {
      setSchema(step3Schema);
    }
  }, [activeStep]);

  useEffect(() => {
    // if (activeStep === 0) {
    //   const { vows } = getValues();
    //   setValue("vows", vows || false);
    // }
    if (activeStep === 1) {
      const { vendorType, companyName, firstName, lastName, phoneNumber } =
        getValues();
      setValue("companyName", companyName || "");
      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("phoneNumber", phoneNumber || "");
    }

    if (activeStep === 2) {
      const { address, city } = getValues();
      setValue("address", address || "");
      setValue("city", city || "");
    }

    if (activeStep === 3) {
      // const { email, password, confirmPassword } = getValues();
      // setValue("email", email || "");
      // setValue("password", password || "");
      // setValue("confirmPassword", confirmPassword || "");
    }
  }, [activeStep, setValue, getValues]);
  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (selectedServices: string[], label: string) => {
    setFormData((prevData) => {
      const updatedServices = { ...prevData.selectedServices };
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
            {/* <TTKCustomCheckbox
              label={"vows"}
              name={"vows"}
              checked={false}
              control={control}
            /> */}
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
                options={vendorOptions}
                fullWidth
                control={control}
              />
            </Grid>

            <Grid item xs={12}>
              <TTKCustomTextField
                name="companyName"
                label="Company Name"
                fullWidth
                required
                control={control}
              />
            </Grid>
            <Grid item xs={6}>
              <TTKCustomTextField
                name="firstName"
                label="First Name"
                fullWidth
                required
                control={control}
              />
            </Grid>

            <Grid item xs={6}>
              <TTKCustomTextField
                name="lastName"
                label="Last Name"
                fullWidth
                required
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="phoneNumber"
                label="Business Phone Number"
                fullWidth
                required
                placeholder="7XXXXXXX"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">(+94)</InputAdornment>
                  ),
                }}
                control={control}
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
                fullWidth
                required
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="city"
                label="City"
                fullWidth
                required
                control={control}
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
                  selectedServices={
                    formData.selectedServices?.[filter.heading] || []
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
              <Typography variant="h4" align="center" className="font-bold">
                Let's Talk about Pricing
              </Typography>
            </Grid>
            <Typography
              variant="body1"
              align="center"
              className="text-gray-500 mb-4"
            >
              What’s the absolute minimum couples can spend with you? The
              maximum, if they choose all your services?
            </Typography>
            <Grid item xs={6}>
              <TTKCustomTextField
                name="minPrice"
                label="From"
                type="number"
                fullWidth
                required
                control={control}
                endAdornment={"LKR"}
              />
            </Grid>
            <Grid item xs={6}>
              <TTKCustomTextField
                name="maxPrice"
                label="To"
                type="number"
                fullWidth
                required
                control={control}
                endAdornment={"LKR"}
              />
            </Grid>
            <Typography
              variant="body1"
              align="center"
              className="text-gray-500 mt-5"
            >
              On average, how much do most couples typically spend with you?
            </Typography>
            <Grid item xs={6}>
              <TTKCustomTextField
                name="avgMinPrice"
                label="From"
                type="number"
                fullWidth
                required
                control={control}
                endAdornment={"LKR"}
              />
            </Grid>
            <Grid item xs={6}>
              <TTKCustomTextField
                name="avgMaxPrice"
                label="To"
                type="number"
                fullWidth
                required
                endAdornment={"LKR"}
                control={control}
              />
            </Grid>
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
        <form noValidate onSubmit={handleSubmit(handleNext)}>
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
              type={activeStep === 0 ? "button" : "submit"}
              onClick={activeStep === 0 ? () => handleNext({}) : undefined}
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
        </form>
      </Box>
    </div>
  );
}

export default WizardFormOnboardVendor;
