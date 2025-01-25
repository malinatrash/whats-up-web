import React from 'react';
import { Paper, Typography } from '@mui/material';

interface ChatHeaderProps {
  phoneNumber: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ phoneNumber }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        bgcolor: '#128C7E',
        color: 'white',
        borderRadius: 0,
      }}
    >
      <Typography variant="h6">Chat with: {phoneNumber}</Typography>
    </Paper>
  );
};

export default ChatHeader;
