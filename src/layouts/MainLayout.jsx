import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <Box>

      {/* TopHeader: الدعم + اللغة */}
      <TopHeader />

      {/* Navbar */}
      <Navbar />

      {/* محتوى الصفحة */}
      <Box sx={{ minHeight: "80vh", mt: 2 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />

    </Box>
  );
}

export default MainLayout;