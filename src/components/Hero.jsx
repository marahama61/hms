import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/hospital.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: "60vh",
        width: "100%",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        color: "white",
        px: 2,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        {t("platform_title")}
      </Typography>
      <Typography sx={{ mb: 3 }}>
        {t("platform_subtitle")}
      </Typography>
      <Button variant="contained" size="large">
        {t("book_now")}
      </Button>
    </Box>
  );
}

export default Hero;