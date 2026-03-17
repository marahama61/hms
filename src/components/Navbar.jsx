import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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

  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
  setMobileOpen(!mobileOpen);
};

  return (
    <>
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
          <Box
              sx={{display: { xs: "none", md: "flex" },
                  fontSize: "16px",
                  alignItems: "center",
                  gap: 1,
                  ml: 1
                  }}
            >
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
        <Box
          sx={{
          display: { xs: "none", md: "flex" },
          gap: 2
          }}
          >

          <Button
            component={Link}
            to="/login"
            sx={{
              // textTransform: "capitalize",
              // border: "1px solid #092e56"
              textTransform: "capitalize",
              border: "2px solid #0B5ED7",
              color: "#0B5ED7",
              fontWeight: 600,
              px: 3,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#E7F1FF"
            }}}
          >
            {t("log in")}
          </Button>

          <Button
            component={Link}
            to="/register"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#0B5ED7",
              color: "white",
              fontWeight: 600,
              px: 3,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#084298"
              }
            }}
          >
            {t("register")}
          </Button>

        </Box>
      </Toolbar>
      {isMobile && (
        <IconButton onClick={toggleDrawer}>
        <MenuIcon />
        </IconButton>
      )}
    </AppBar>
    <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        >

        <Box sx={{ width: 250, p: 2 }}>

        <Button fullWidth component={Link} to="/" sx={{ textTransform: "none" }}>
        {t("home")}
        </Button>

        <Button fullWidth>
        {t("specialties")}
        </Button>

        <Button fullWidth>
        {t("services")}
        </Button>

        <Button fullWidth>
        {t("appointments")}
        </Button>

        <Button fullWidth component={Link} to="/login">
        {t("log in")}
        </Button>

        <Button fullWidth component={Link} to="/register">
        {t("register")}
        </Button>

        </Box>

        </Drawer>
          </>
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

