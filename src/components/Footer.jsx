import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        p: 3,
        textAlign: "center",
        backgroundColor: "#035582",
        color: "white",
      }}
    >
      <Typography>
        {t("footer_text")}
      </Typography>
    </Box>
  );
}

export default Footer;
