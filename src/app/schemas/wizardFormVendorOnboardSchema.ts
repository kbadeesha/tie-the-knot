import * as yup from "yup";

// Step 1: Status Selection Validation
export const step1Schema = yup.object({
  vendorType: yup.string().required("Please select your vendor type."),
  companyName: yup.string().required("Please select your company name."),
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  phoneNumber: yup.string().required("Phone Number is required."),
});

// Step 2: Personal Info Validation
export const step2Schema = yup.object({
    address: yup.string().required("Address is required."),
    city: yup.string().required("City is required."),
});

// Step 3: Account Details Validation
export const step3Schema = yup.object({
 
});
