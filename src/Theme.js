import { createTheme } from "@mui/material/styles";

export const theme = (direction = "ltr") =>
  createTheme({
    direction, // "ltr" أو "rtl"
    palette: {
      primary: {
        main: "#0056b3", // أزرق طبي داكن
      },
      secondary: {
        main: "#28a745", // أخضر طبي
      },
      background: {
        default: "#f8f9fa", // رمادي فاتح للخلفيات
      },
      text: {
        primary: "#212529",
        secondary: "#495057",
      },
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });