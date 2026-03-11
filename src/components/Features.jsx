import { Box, Typography, Grid, Paper } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <ScheduleIcon sx={{ fontSize: 50, color: "#0288d1" }} />,
      title: t("feature_1_title"),
      desc: t("feature_1_desc"),
    },
    {
      icon: <LocalHospitalIcon sx={{ fontSize: 50, color: "#0288d1" }} />,
      title: t("feature_2_title"),
      desc: t("feature_2_desc"),
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 50, color: "#0288d1" }} />,
      title: t("feature_3_title"),
      desc: t("feature_3_desc"),
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        maxWidth: "1200px",
        mx: "auto",
        // background : "blue",
      }}
    >
      {/* العنوان */}
      <Typography variant="h4" sx={{ mb: 6, fontWeight: "bold" }}>
        {t("features")}
      </Typography>

      {/* البطاقات */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((f, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              sx={{
                p: 5,
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ mb: 3 }}>{f.icon}</Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                {f.title}
              </Typography>
              <Typography>{f.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Features;