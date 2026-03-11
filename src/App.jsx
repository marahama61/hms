import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointments from "./pages/Appointments";
import MainLayout from "./layouts/MainLayout";

function App() {

  const { i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const theme = createTheme({
    direction: direction,
    palette: {
      primary: { main: "#0056b3" },
      secondary: { main: "#28a745" },
    }
  });

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<Appointments />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;