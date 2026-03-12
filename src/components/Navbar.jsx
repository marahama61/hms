import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const handleOpen = (menu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  const initCap = (str) => str.replace(/\b\w/g, (c) => c.toUpperCase());

  // Arrays of JSON keys for Dropdowns
  const specialtiesKeys = ["internal_medicine", "ob_gyn", "urology", "pediatrics"];
  const servicesKeys = ["consultation","laboratory","radiology","pharmacy"];
  const resourcesKeys = ["faqs","blog","industry_insights"]; // Add more if needed

  return (
    <AppBar position="static" color="white" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* LEFT: Logo + Vertical line + Hospital Name + Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={logo} alt="logo" style={{ height: 65 }} />

         <Typography variant="h6" sx={{ fontWeight: "bold", color: "#092e56" }}>
            {t("hospital_name")}
          </Typography>

          {/* Vertical line between logo and hospital name */}
          <Box sx={{ height: "35px", width: "1px", backgroundColor: "#ddd", mx: 3 }} />

          {/* Main Menu */}
          <Box sx={{ display: "flex", fontSize: "16px", alignItems: "center", gap: 1, ml: 1 }}>
            <Button component={Link} to="/" sx={{ textTransform: "none" }}>{t("home")}</Button>

            <Dropdown
              label={t("specialties")} 
              keys={specialtiesKeys} 
              t={t} 
              initCap={initCap} 
              openMenu={openMenu} 
              handleOpen={handleOpen} 
              handleClose={handleClose} 
            />

            <Dropdown
              label={t("services")} 
              keys={servicesKeys} 
              t={t} 
              initCap={initCap} 
              openMenu={openMenu} 
              handleOpen={handleOpen} 
              handleClose={handleClose} 
            />

            <Button sx={{ textTransform: "none" }}>{t("appointments")}</Button>

            <Dropdown
              label={t("resources")} 
              keys={resourcesKeys} 
              t={t} 
              initCap={initCap} 
              openMenu={openMenu} 
              handleOpen={handleOpen} 
              handleClose={handleClose} 
            />
          </Box>
        </Box>

        {/* RIGHT: Login/Register */}
        <Box sx={{ display: "flex", gap: 2 }}>

          <Button
            component={Link}
            to="/login"
            sx={{
              textTransform: "capitalize",
              border: "1px solid #092e56"
            }}
          >
            {t("log in")}
          </Button>

          <Button
            component={Link}
            to="/register"
            sx={{
              textTransform: "capitalize",
              bgcolor: "#092e56",
              color: "white"
            }}
          >
            {t("register")}
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

// ======= Dropdown Component =======
const Dropdown = ({ label, keys, t, initCap, openMenu, handleOpen, handleClose }) => {
  return (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={() => handleOpen(label)}
      onMouseLeave={handleClose}
    >
      <Button sx={{ textTransform: "none" }} endIcon={<KeyboardArrowDownIcon />}>
        {label}
      </Button>

      {openMenu === label && (
        <Box sx={dropdownStyle} onMouseEnter={() => handleOpen(label)} onMouseLeave={handleClose}>
          {keys.map((key) => (
            <Button key={key} sx={submenuItem}>
              {initCap(t(key))}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

// ======= Styles =======
const dropdownStyle = {
  position: "absolute",
  top: "45px",
  left: 0,
  background: "white",
  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
  borderRadius: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  minWidth: "220px",
  zIndex: 2000
};

const submenuItem = {
  justifyContent: "flex-start",
  color: "#333",
  fontSize: "15px",
  textTransform: "capitalize",
  textAlign: "left",
  "&:hover": { bgcolor: "#f0f0f0" }
};

export default Navbar;
