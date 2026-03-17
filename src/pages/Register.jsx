// import { Box, TextField, Button, Typography, Paper } from "@mui/material";
// import { useTranslation } from "react-i18next";

// function Register() {

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
// width: 420,
// borderRadius: 3
// }}
// >

// <Typography
// variant="h5"
// sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
// >
// {t("register")}
// </Typography>

// <TextField
// fullWidth
// label={t("full_name")}
// margin="normal"
// />

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

// <TextField
// fullWidth
// type="password"
// label={t("confirm_password")}
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
// {t("register")}
// </Button>

// </Paper>

// </Box>

// );
// }

// export default Register;

// import { useState } from "react";
// import axios from "axios";
// import { Box, TextField, Button, Typography } from "@mui/material";

// function Register() {

//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     password: "",
//     phone: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         formData
//       );

//       alert("Registration successful");

//       console.log(res.data);

//     } catch (error) {

//       alert("Registration failed");

//       console.log(error);

//     }
//   };

//   return (

//     <Box
//       sx={{
//         width: 400,
//         margin: "auto",
//         mt: 5,
//         p: 3,
//         boxShadow: 3,
//         borderRadius: 2
//       }}
//     >

//       <Typography variant="h5" mb={2}>
//         Register
//       </Typography>

//       <form onSubmit={handleSubmit}>

//         <TextField
//           fullWidth
//           label="Full Name"
//           name="full_name"
//           margin="normal"
//           onChange={handleChange}
//         />

//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           margin="normal"
//           onChange={handleChange}
//         />

//         <TextField
//           fullWidth
//           label="Phone"
//           name="phone"
//           margin="normal"
//           onChange={handleChange}
//         />

//         <TextField
//           fullWidth
//           type="password"
//           label="Password"
//           name="password"
//           margin="normal"
//           onChange={handleChange}
//         />

//         <Button
//           fullWidth
//           type="submit"
//           variant="contained"
//           sx={{ mt: 2 }}
//         >
//           Register
//         </Button>

//       </form>

//     </Box>
//   );
// }

// export default Register;

import { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Register() {

const { t } = useTranslation();

const [formData, setFormData] = useState({
full_name: "",
email: "",
password: "",
phone: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {

const res = await axios.post(
"http://localhost:5000/api/auth/register",
formData
);

alert(t("registration_success"));

console.log(res.data);

} catch (error) {

alert(t("registration_failed"));

console.log(error);

}

};

return (

<Box
sx={{
width: 400,
margin: "auto",
mt: 5,
p: 3,
boxShadow: 3,
borderRadius: 2
}}
>

<Typography variant="h5" mb={2}>
{t("register")}
</Typography>

<form onSubmit={handleSubmit}>

<TextField
fullWidth
label={t("full_name")}
name="full_name"
margin="normal"
onChange={handleChange}
/>

<TextField
fullWidth
label={t("email")}
name="email"
margin="normal"
onChange={handleChange}
/>

<TextField
fullWidth
label={t("phone")}
name="phone"
margin="normal"
onChange={handleChange}
/>

<TextField
fullWidth
type="password"
label={t("password")}
name="password"
margin="normal"
onChange={handleChange}
/>

<Button
fullWidth
type="submit"
variant="contained"
sx={{ mt: 2 }}
>
{t("register")}
</Button>

</form>

</Box>

);

}

export default Register;