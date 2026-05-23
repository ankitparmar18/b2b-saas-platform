import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';

const tenants = ['Acme Logistics', 'BlueLine Billing', 'LogiCorp'];

interface LoginPageProps {
  onLogin: (tenantName: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [tenant, setTenant] = useState(tenants[0]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTenant(event.target.value as string);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Paper sx={{ p: 4 }} elevation={6}>
        <Typography variant="h4" component="h1" gutterBottom>
          Corporate SaaS Login
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Select your tenant and continue to the analytics dashboard.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="tenant-label">Tenant</InputLabel>
            <Select labelId="tenant-label" value={tenant} label="Tenant" onChange={handleChange}>
              {tenants.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" size="large" onClick={() => onLogin(tenant)}>
            Continue
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
