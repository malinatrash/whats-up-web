import React from 'react';
import { Box, TextField, Paper, Typography } from '@mui/material';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface PhoneNumberInputProps {
  phoneNumber: string;
  setPhoneNumber: (number: string) => void;
  onSubmit: () => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  phoneNumber,
  setPhoneNumber,
  onSubmit,
}) => {
  return (
    <Container>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: '#128C7E', fontWeight: 'bold' }}
        >
          Начать чат
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            borderRadius: 2,
            bgcolor: 'white',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Введите номер телефона
          </Typography>
          
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Формат: 79001234567 (без '+' и других символов)
          </Typography>

          <TextField
            fullWidth
            label="Номер телефона"
            placeholder="79001234567"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ mb: 3 }}
          />
          
          <Button onClick={onSubmit}>
            Начать чат
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default PhoneNumberInput;
