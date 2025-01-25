import React, { useState } from 'react';
import { Box, TextField, Paper, Typography, Link } from '@mui/material';
import { Credentials } from '../../types';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface LoginFormProps {
  onLogin: (credentials: Credentials) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    idInstance: '',
    apiTokenInstance: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

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
          WhatsApp Web Clone
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
            Войти с помощью GREEN-API
          </Typography>
          
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Введите ваши учетные данные из{' '}
            <Link
              href="https://green-api.com/"
              target="_blank"
              rel="noopener"
              sx={{ color: '#128C7E' }}
            >
              GREEN-API
            </Link>
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="idInstance"
              variant="outlined"
              value={credentials.idInstance}
              onChange={(e) =>
                setCredentials({ ...credentials, idInstance: e.target.value })
              }
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="apiTokenInstance"
              variant="outlined"
              value={credentials.apiTokenInstance}
              onChange={(e) =>
                setCredentials({ ...credentials, apiTokenInstance: e.target.value })
              }
              required
              sx={{ mb: 3 }}
            />
            <Button type="submit">
              Войти
            </Button>
          </form>
        </Paper>

        <Typography variant="body2" color="text.secondary" align="center">
          Нет аккаунта?{' '}
          <Link
            href="https://green-api.com/docs/before-start/#get-account"
            target="_blank"
            rel="noopener"
            sx={{ color: '#128C7E' }}
          >
            Зарегистрируйтесь
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginForm;
