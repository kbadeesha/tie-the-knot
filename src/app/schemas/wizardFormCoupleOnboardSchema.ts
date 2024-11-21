import * as yup from "yup";

// Step 1: Status Selection Validation
export const step1Schema = yup.object({
  status: yup.string().required("Please select your status."),
});

// Step 2: Personal Info Validation
export const step2Schema = yup.object({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  partnerFirstName: yup.string().required("Partner's first name is required."),
  partnerLastName: yup.string().required("Partner's last name is required."),
});

// Step 3: Account Details Validation
export const step3Schema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required."),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required."),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required."),
});
