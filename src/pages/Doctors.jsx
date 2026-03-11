import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Doctors() {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 6 }}>
      <Typography variant="h4">{t("doctors")}</Typography>
      <Typography>{t("doctors_page_desc")}</Typography>
    </Box>
  );
}

export default Doctors;