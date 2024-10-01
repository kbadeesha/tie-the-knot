
import { Button } from '@mui/material';
import React from 'react'

interface CustomButtonProps{
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  className?: string;
}

const baseStyles = `px-4 py-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 transition duration-300 transform`; 
const variants = {
  primary: `bg-black text-white hover:bg-gray-800 hover:scale-105 focus:ring-black`,
  secondary: `bg-white text-black hover:bg-gray-100 hover:scale-105 focus:ring-gray-300 border border-gray-300`,
  danger: `bg-red-500 text-white hover:bg-red-600  hover:scale-105 focus:ring-red-500`,
};
const disabledStyles = `opacity-50 cursor-not-allowed`;

const CustomButton : React.FC<CustomButtonProps> = ({label,onClick,className, disabled = false,variant='primary'}) => {
  return (
    <Button
    onClick={onClick}
    className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? disabledStyles : ''}`}
    disabled={disabled}
  >
    {label}
  </Button>
  )
}

export default CustomButton