import { Button as MuiButton, ButtonProps } from '@mui/material';
import React from 'react';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton
      variant="contained"
      fullWidth
      size="large"
      sx={{
        bgcolor: '#128C7E',
        '&:hover': { bgcolor: '#0e7163' },
        py: 1.5,
        borderRadius: 2,
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
