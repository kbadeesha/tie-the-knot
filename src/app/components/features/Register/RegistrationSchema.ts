import * as yup from 'yup';

const RegistrationSchema = yup.object({
  status: yup.string().required('Please select your status'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  partnerFirstName: yup.string().required("Partner's first name is required"),
  partnerLastName: yup.string().required("Partner's last name is required"),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  isDateDecided: yup.boolean().required('This field is required'), // Add validation for isDateDecided
  // Conditional validation for weddingDate
  weddingDate: yup.string().when('isDateDecided', {
    is: (isDateDecided) => !isDateDecided,
    then: yup.string().required('Wedding date is required'),
    otherwise: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value
      ),
  }),
});

export default RegistrationSchema;