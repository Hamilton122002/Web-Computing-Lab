import React, { useState } from "react";
import { Box, Typography, TextField, Button } from
"@mui/material";
import LoginOutlinedIcon from
'@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from
'@mui/icons-material/HowToRegOutlined';
const Auth = () => {
const [isSignup, setSignup] = useState(false);
const [inputs, setInputs] = useState({
name: "",
email:"",
password:"",
})
const handleChange = (e) =>{
setInputs((prevState)=>({
...prevState,
[e.target.name]: e.target.value
}))
}
const handleSubmit = (e) =>{
e.preventDefault();
console.log(inputs);
}
const resetState = () =>{
setSignup(!isSignup)
setInputs({name:"",email:"",password:""})
}
return (
<div>
<form onSubmit={handleSubmit}>
<Box
display="flex"
flexDirection={"column"}
max-width={400}
alignItems={"center"}
justifyContent={"center"}
margin="auto"
marginTop={5}
padding={5}
borderRadius={5}
boxShadow={"5px 5px 10px #ccc"}
sx={{
":hover": {
boxShadow: "10px 10px 20px #ccc",
},
}}
>
<Typography variant="h2" padding={3}
textAlign="center">
{isSignup ? "SignUp" : "Login"}
</Typography>
{isSignup && (
<TextField name="name" value={inputs.name}
onChange={handleChange}
variant=""
placeholder="Name"
type={"text"}
margin="normal"
/>
)}
<TextField name="email" value={inputs.email} onChange={handleChange} variant="outlined" placeholder="Email" type={"email"} margin="normal"/>
<TextField name="password" value={inputs.password} onChange={handleChange} variant="outlined" placeholder="Password" type={"password"} margin="normal"/>
<Button type="submit" variant="outlined" color="secondary" sx={{ marginTop: 2, borderRadius: 2 }} > {isSignup ? "SignUp" : "Login"}</Button>

</Box>
</form>
</div>
);
};
export default Auth;
