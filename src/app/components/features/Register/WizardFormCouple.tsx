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
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TTKCustomSelectionList from "../../common/TTKCustomSelectionList";
import TTKCustomTextField from "../../common/TTKCustomTextField";
import { IUserRegisterFormData } from "@/types/User/registerUserType";
import { coupleStatus } from "@/app/data/ListItems";
import { registerUser } from "@/api/authApi";
import { useRouter } from "next/router";

const steps = ["Status", "Basic Information", "Account Details"];

function WizardFormCouple() {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<IUserRegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    status: "",
    partnerFirstName: "",
    partnerLastName: "",
    lastName: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [selectedOptionStatus, setSelectedOptionStatus] = useState<string>("");

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      try {
        console.log("Form submitted with data:", formData);
        const payload = {
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: "user",
          client: {
            planStatus: selectedOptionStatus,
            partnerFirstName: formData.partnerFirstName,
            partnerLastName: formData.partnerLastName,
          },
        };
        console.log("payload", payload);
        console.log("formData", formData);
        await registerUser(payload);

        // Redirect to home page after successful registration
        router.push("/");
      } catch (error) {
        console.error("Registration error:", error);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
                Where are you in the planning process?
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className="text-gray-500 mb-4"
              >
                Whether you're just starting to look around or in the final
                countdown, we've got you.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TTKCustomSelectionList
                options={coupleStatus}
                selectedValue={selectedOptionStatus}
                onChange={setSelectedOptionStatus}
                className="w-full"
              />
            </Grid>
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
                  Tell Us About You and Your Partner
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="text-gray-500 mb-4"
                >
                  Please provide your personal details so we can create a
                  personalized experience tailored to your wedding planning
                  journey. This information helps us understand your unique
                  story.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField
                  name="firstName"
                  label="First Name"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
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
                  name="partnerFirstName"
                  label="Partner's First Name"
                  value={formData.partnerFirstName || ""}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TTKCustomTextField
                  name="partnerLastName"
                  label="Partner's Last Name"
                  value={formData.partnerLastName || ""}
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

export default WizardFormCouple;
