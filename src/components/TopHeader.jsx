import { Box, Typography, Button, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

function TopHeader() {

  const { i18n} = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        py: 1,
        backgroundColor: "#19648d",
        color: "white",
        fontSize: { xs: "12px", md: "14px" }
      }}
    >
      {/* معلومات الدعم */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3 },
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" }
          }}
        >

        <Typography>
          📞 +966 512345678
        </Typography>

        <Typography>
          ✉️ support@medical.com
        </Typography>

        <Link
          href="https://wa.me/966500000000"
          target="_blank"
          underline="none"
          color="inherit"
        >
          🔗 WhatsApp
        </Link>

      </Box>

      {/* زر تغيير اللغة */}
      <Button
        variant="outlined"
        color="inherit"
        size="medium"
        onClick={changeLanguage}
      >
        {i18n.language === "ar" ? "English" : "العربية"}
      </Button>

    </Box>
  );
}

export default TopHeader;