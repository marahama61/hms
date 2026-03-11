import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Appointments() {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 6 }}>
      <Typography variant="h4">{t("appointments")}</Typography>
      <Typography>{t("appointments_page_desc")}</Typography>
    </Box>
  );
}

export default Appointments;