import { Container as MuiContainer, ContainerProps } from '@mui/material';
import React from 'react';

interface AppContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<AppContainerProps> = ({ children, ...props }) => {
  return (
    <MuiContainer
      maxWidth="sm"
      sx={{ height: '100vh', p: 0, ...props.sx }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
