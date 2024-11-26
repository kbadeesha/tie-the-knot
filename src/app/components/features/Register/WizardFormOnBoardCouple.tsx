"use client";
import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import TTKCustomTextField from "../../common/TTKCustomTextField"; // Adjust path if necessary
import {
  step1Schema,
  step2Schema,
  step3Schema,
} from "@/app/schemas/wizardFormCoupleOnboardSchema"; // Adjust path if necessary
import { IUserOnBoardFormData } from "@/app/types/User/onBoardUserTyp"; // Adjust path if necessary
import { coupleStatus } from "@/app/data/ListItems";
import { TTKCustomSelectionListWrapper } from "../../common/TTKCustomSelectionList";
import "../../../../styles/pages/register.css";

const steps = ["Status", "Basic Information", "Account Details"];

function WizardFormOnBoardCouple() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [schema, setSchema] = useState<any>({});

  const methods = useForm<IUserOnBoardFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      // Initialize default values for all fields
      status: "",
      firstName: "",
      lastName: "",
      partnerFirstName: "",
      partnerLastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, control, reset, setValue, watch, getValues } = methods;

  // Handle moving to the next step
  const handleNext = async (data: any) => {
    if (activeStep === steps.length - 1) {
      // Perform the form submission if on the last step
      console.log("Form data submitted:", data);
      router.push("/"); // Navigate to another page after submission
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Set validation schema based on active step
  useEffect(() => {
    if (activeStep === 0) {
      setSchema(step1Schema);
    } else if (activeStep === 1) {
      setSchema(step2Schema);
    } else if (activeStep === 2) {
      setSchema(step3Schema);
    }
  }, [activeStep]);

  // Preserve field values when going back to a previous step
  useEffect(() => {
    if (activeStep === 0) {
      // Ensure the values from previous steps are preserved when navigating back
      const { status } = getValues();
      setValue("status", status || "");
    }

    if (activeStep === 1) {
      // Ensure values for basic information are retained when going back
      const { firstName, lastName, partnerFirstName, partnerLastName } =
        getValues();
      setValue("firstName", firstName || "");
      setValue("lastName", lastName || "");
      setValue("partnerFirstName", partnerFirstName || "");
      setValue("partnerLastName", partnerLastName || "");
    }

    if (activeStep === 2) {
      // Ensure account-related fields are retained when going back
      const { email, password, confirmPassword } = getValues();
      setValue("email", email || "");
      setValue("password", password || "");
      setValue("confirmPassword", confirmPassword || "");
    }
  }, [activeStep, setValue, getValues]);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Where are you in the planning process?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="status"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TTKCustomSelectionListWrapper
                    options={coupleStatus}
                    selectedValue={field.value || ""}
                    name="status"
                    control={control}
                    label={""}
                  />
                )}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Tell Us About You and Your Partner
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="firstName"
                label="First Name"
                control={control}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="lastName"
                label="Last Name"
                control={control}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="partnerFirstName"
                label="Partner's First Name"
                control={control}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="partnerLastName"
                label="Partner's Last Name"
                control={control}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Create Your Account
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="email"
                label="Email"
                control={control}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="password"
                label="Password"
                control={control}
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                endAdornment={
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TTKCustomTextField
                name="confirmPassword"
                label="Confirm Password"
                control={control}
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                required
                endAdornment={
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
            </Grid>
          </Grid>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel className="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ p: 4 }}>
        <form noValidate onSubmit={handleSubmit(handleNext)}>
          {getStepContent(activeStep)}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}
          >
            <Button onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
            <Button type="submit">
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default WizardFormOnBoardCouple;
