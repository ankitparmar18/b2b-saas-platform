import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [tenantName, setTenantName] = useState('Acme Logistics');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light'
        }
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {authenticated ? (
        <DashboardPage tenantName={tenantName} onSignOut={() => setAuthenticated(false)} />
      ) : (
        <LoginPage
          onLogin={(selectedTenant) => {
            setTenantName(selectedTenant);
            setAuthenticated(true);
          }}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
