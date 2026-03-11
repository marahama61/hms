import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

function Register() {

const { t } = useTranslation();

return (

<Box
sx={{
minHeight: "80vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
backgroundColor: "#f5f7fb"
}}
>

<Paper
elevation={3}
sx={{
padding: 4,
width: 420,
borderRadius: 3
}}
>

<Typography
variant="h5"
sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
>
{t("register")}
</Typography>

<TextField
fullWidth
label={t("full_name")}
margin="normal"
/>

<TextField
fullWidth
label={t("email")}
margin="normal"
/>

<TextField
fullWidth
type="password"
label={t("password")}
margin="normal"
/>

<TextField
fullWidth
type="password"
label={t("confirm_password")}
margin="normal"
/>

<Button
fullWidth
variant="contained"
sx={{
mt: 3,
backgroundColor: "#092e56"
}}
>
{t("register")}
</Button>

</Paper>

</Box>

);
}

export default Register;