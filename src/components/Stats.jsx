import { Box, Typography, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

function Stats() {
  const { t } = useTranslation();

  const stats = [
    { label: t("internal_medicine"), value: 120 },
    { label: t("ob_gyn"), value: 95 },
    { label: t("urology"), value: 80 },
    { label: t("pediatrics"), value: 150 },
  ];

  return (
    <Box sx={{ p: 6 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
        {t("stats_title")}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((s, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>{s.value}</Typography>
              <Typography>{s.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Stats;