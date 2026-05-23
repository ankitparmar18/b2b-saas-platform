import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material';

interface DashboardPageProps {
  tenantName: string;
  onSignOut: () => void;
}

function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage({ tenantName, onSignOut }: DashboardPageProps) {
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <div>
          <Typography variant="h4" component="h1">
            {tenantName} Dashboard
          </Typography>
          <Typography color="text.secondary">Overview of shipments, invoices, and tenant usage.</Typography>
        </div>
        <Button variant="outlined" onClick={onSignOut}>
          Sign out
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <MetricCard title="Active Shipments" value="128" />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard title="Open Invoices" value="34" />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard title="Monthly Revenue" value="$98.7K" />
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ minHeight: 320 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Operational insights
              </Typography>
              <Typography color="text.secondary">
                A future chart area for route performance, utilization patterns, and billing trends.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minHeight: 320 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent activity
              </Typography>
              <Typography color="text.secondary">
                Placeholder for alerts, tenant notifications, and billing reminders.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
