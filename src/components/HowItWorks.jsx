import { Box, Typography, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

function HowItWorks() {

  const { t } = useTranslation();

  const steps = [
    {
      title: t("step1_title"),
      desc: t("step1_desc"),
      number: "1"
    },
    {
      title: t("step2_title"),
      desc: t("step2_desc"),
      number: "2"
    },
    {
      title: t("step3_title"),
      desc: t("step3_desc"),
      number: "3"
    },
    {
      title: t("step4_title"),
      desc: t("step4_desc"),
      number: "4"
    }
  ];

  return (
    <Box sx={{ p: 6, backgroundColor: "#dbdfea" }}>

      <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
        {t("how_it_works")}
      </Typography>

      <Grid container spacing={4} justifyContent="center">

        {steps.map((step, index) => (

          <Grid item xs={12} md={3} key={index}>

            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%"
              }}
            >

              <Typography
                variant="h3"
                sx={{
                  color: "#0288d1",
                  fontWeight: "bold",
                  mb: 2
                }}
              >
                {step.number}
              </Typography>

              <Typography variant="h6" sx={{ mb: 1 }}>
                {step.title}
              </Typography>

              <Typography>
                {step.desc}
              </Typography>

            </Paper>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
}

export default HowItWorks;

