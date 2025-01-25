import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSend: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  message,
  setMessage,
  handleSend,
}) => {
  return (
    <Box sx={{ p: 2, bgcolor: '#f0f2f5' }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              bgcolor: 'white',
            },
          }}
        />
        <IconButton
          onClick={handleSend}
          color="primary"
          sx={{
            bgcolor: '#128C7E',
            color: 'white',
            '&:hover': { bgcolor: '#0e7163' },
            borderRadius: 2,
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MessageInput;
