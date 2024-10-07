"use client"
import React, { useState } from 'react';
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
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';   

import { Visibility, VisibilityOff } from '@mui/icons-material';   


const steps = ['Status', 'Basic Information', 'Account Details'];

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

  const   
 handleNext = () => {
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

  const handleDateChange   
 = (date: string | null) => {
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

  const handleMouseDownPassword   
 = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();   

  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="status-radio-buttons-group-label">
              Welcome! Where are you in the planning process?
            </FormLabel>
            <RadioGroup
              aria-labelledby="status-radio-buttons-group-label"
              name="status"
              value={formData.status || ''}
              onChange={handleChange}
            >
              <FormControlLabel
                value="not_engaged"
                control={<Radio />}
                label="Not yet engaged"
              />
              <FormControlLabel
                value="newly_engaged"
                control={<Radio />}
                label="Newly engaged and exploring"
              />
              <FormControlLabel
                value="planning_no_venue"
                control={<Radio />}
                label="Planning mode but haven't booked a venue yet"
              />
              {/* Add more options as needed */}
            </RadioGroup>
          </FormControl>
        );
      case 1:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="First name"
                name="firstName"
                value={formData.firstName || ''}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Last name"
                name="lastName"
                value={formData.lastName || ''}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                required
              />
              <TextField
                label="Partner's first name"
                name="partnerFirstName"
                value={formData.partnerFirstName || ''}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                required
              />
              <TextField
                label="Partner's last name"
                name="partnerLastName"
                value={formData.partnerLastName || ''}
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
      case 2:
        return (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Password"
              type={showPassword   
 ? 'text' : 'password'}
              name="password"
              value={formData.password || ''}
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
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword || ''}
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
                      {showConfirmPassword ? (
                        <VisibilityOff   
 />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>   

        );
      default:
        throw new Error('Unknown step');
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
          boxShadow: 'md',
          bgcolor: 'background.paper',
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
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default WizardForm;