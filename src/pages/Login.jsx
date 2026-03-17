// import { Box, TextField, Button, Typography, Paper } from "@mui/material";
// import { useTranslation } from "react-i18next";

// function Login() {

// const { t } = useTranslation();

// return (

// <Box
// sx={{
// minHeight: "80vh",
// display: "flex",
// alignItems: "center",
// justifyContent: "center",
// backgroundColor: "#f5f7fb"
// }}
// >

// <Paper
// elevation={3}
// sx={{
// padding: 4,
// width: 380,
// // borderRadius: 3
// }}
// >

// <Typography
// variant="h5"
// sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
// >
// {t("log in")}
// </Typography>

// <TextField
// fullWidth
// label={t("email")}
// margin="normal"
// />

// <TextField
// fullWidth
// type="password"
// label={t("password")}
// margin="normal"
// />

// <Button
// fullWidth
// variant="contained"
// sx={{
// mt: 3,
// backgroundColor: "#092e56"
// }}
// >
// {t("log in")}
// </Button>

// </Paper>

// </Box>

// );
// }

// export default Login;

import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";

function Login() {

const { t } = useTranslation();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {

try {

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{
email: email,
password: password
}
);

localStorage.setItem("token", res.data.token);

alert("Login successful");

console.log(res.data);

} catch (error) {

alert("Login failed");

console.log(error);

}

};

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
width: 380,
borderRadius: 3
}}
>

<Typography
variant="h5"
sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
>
{t("log in")}
</Typography>

<TextField
fullWidth
label={t("email")}
margin="normal"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<TextField
fullWidth
type="password"
label={t("password")}
margin="normal"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<Button
fullWidth
variant="contained"
sx={{
mt: 3,
backgroundColor: "#092e56"
}}
onClick={handleLogin}
>
{t("log in")}
</Button>

</Paper>

</Box>

);
}

export default Login;
