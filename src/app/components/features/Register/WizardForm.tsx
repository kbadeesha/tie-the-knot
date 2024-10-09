"use client";
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TTKCustomRadioGroup from "../../TTKCustomRadioGroup";
const steps = ["User Type", "Status", "Basic Information", "Account Details"];

interface FormData {
  status?: string;
  firstName?: string;
  lastName?: string;
  partnerFirstName?: string;
  partnerLastName?: string;
  weddingDate?: string | null;
  isDateDecided?: boolean;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function WizardForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    // You might want to add validation here before proceeding to the next step
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  const handleDateChange = (date: string | null) => {
    setFormData({
      ...formData,
      weddingDate: date,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      isDateDecided: event.target.checked,
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
  const [selectedOptionStatus, setSelectedOptionStatus] = useState<string>("");
  const [selectedOptionUserType, setSelectedOptionUserType] =
    useState<string>("");
  const handleRadioGroupChangeUserType = (value: string) => {
    setSelectedOptionUserType(value);
  };
  const handleRadioGroupChangeStatus = (value: string) => {
    setSelectedOptionStatus(value);
  };

  const userType = [
    { label: "Bride/Groom", value: "bride_groom" },
    { label: "Vendor", value: "vendor" },
    { label: "Event Planner", value: "planner" },
  ];
  const status = [
    { label: "Not yet engaged", value: "not_engaged" },
    { label: "Newly engaged and exploring", value: "newly_engaged" },
    {
      label: "Planning mode but haven't booked a venue yet",
      value: "planning_no_venue",
    },
  ];
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="status-radio-buttons-group-label">
              Who are you?
            </FormLabel>
            <div>
              <TTKCustomRadioGroup
                options={userType}
                selectedValue={selectedOptionUserType}
                onChange={handleRadioGroupChangeUserType}
              />
              {/* <p>Selected Option: {selectedOption}</p> */}
            </div>
          </FormControl>
        );
      case 1:
        return (
          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="status-radio-buttons-group-label">
              Welcome! Where are you in the planning process?
            </FormLabel>
            <div>
              <TTKCustomRadioGroup
                options={status}
                selectedValue={selectedOptionStatus}
                onChange={handleRadioGroupChangeStatus}
              />
              {/* <p>Selected Option: {selectedOption}</p> */}
            </div>
          </FormControl>
        );
      case 2:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="First name"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Last name"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                required
              />
              <TextField
                label="Partner's first name"
                name="partnerFirstName"
                value={formData.partnerFirstName || ""}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                required
              />
              <TextField
                label="Partner's last name"
                name="partnerLastName"
                value={formData.partnerLastName || ""}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                required
              />
              {/* <DatePicker
                label="Wedding date (Don't worry! You can change this later)"
                value={formData.weddingDate ? dayjs(formData.weddingDate) : null} // Convert to Dayjs
                onChange={(newValue) => handleDateChange(newValue?.format('YYYY-MM-DD'))} // Format the date
                renderInput={(params) => (
                  <TextField {...params} sx={{ mt: 2 }} />
                )}
              /> */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isDateDecided || false}
                    onChange={handleCheckboxChange}
                    name="isDateDecided"
                  />
                }
                label="We're still deciding"
                sx={{ mt: 2 }}
              />
            </Box>
          </LocalizationProvider>
        );
      case 3:
        return (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
              fullWidth
              sx={{ mt: 2 }}
              required
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
            <TextField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              onChange={handleChange}
              fullWidth
              sx={{ mt: 2 }}
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
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
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
            className="mr-2"
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default WizardForm;
