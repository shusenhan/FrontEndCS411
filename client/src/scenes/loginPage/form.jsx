import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import notify from "components/Toast";

const registerSchema = yup.object().shape({
    username: yup.string().required("required"),
    password: yup.string().required("required"),
    gender: yup.number().required("required")
});

const loginSchema = yup.object().shape({
    username: yup.string().required("required"),
    password: yup.string().required("required"),
});

const initialValueRegister = {
    username:"",
    password:"",
    gender:1
};

const initialValueLogin = {
    username:"",
    password:""
};

const Form = () => {
    const [ pageType, setPageTpye ] = useState("login");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const register = async(values, onSubmitProps) => {
        console.log(values);
        const savedUserResponse = await fetch(
            "http://localhost:3001/system/reg",
            {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(values)
            }
        );
        const savedUser = await savedUserResponse.text();
        onSubmitProps.resetForm();

        if(savedUser === "1"){
            setPageTpye("login");
        }
        else{
            // window.alert("Registation Fail!");
            notify("Registation Fail!");
        }
    };

    const login = async(values, onSubmitProps) => {
        console.log("login")
        const loginResponse = await fetch(
            "http://localhost:3001/system/log",
            {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(values)
            }
        );

        const loggedIn = await loginResponse.text();
        onSubmitProps.resetForm();

        if(loggedIn === "1"){
            navigate("/home");
        }
        else{
            // window.alert("Password or Username Wrong!");
            notify("Password or Username Wrong!");
        }
    };

    const handleFormSubmit = async(values, onSubmitProps) => {
        if(isLogin) await login(values, onSubmitProps);
        if(isRegister) await register(values, onSubmitProps);
    };

    return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValueLogin : initialValueRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
    >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm
        }) => (
            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{gridColumn: "span 4"}}
                >

                    <TextField
                        label="Username"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                        name="username"
                        error={Boolean(touched.username) && Boolean(errors.username)}
                        helperText={touched.username && errors.username}
                        sx={{gridColumn: "span 4"}}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={Boolean(touched.password) && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{gridColumn: "span 4"}}
                    />

                    {isRegister && (
                    <> 
                        <FormControl fullWidth sx={{gridColumn: "span 4"}}>
                            <InputLabel id="Gender">Gender</InputLabel>
                            <Select
                                labelId="Gender"
                                label="Gender"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.gender}
                                name="gender"
                                error={Boolean(touched.gender) && Boolean(errors.gender)}
                                helperText={touched.gender && errors.gender}
                            >
                                <MenuItem value={0}>Male</MenuItem>
                                <MenuItem value={1}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </>
                    )}
                </Box>

                <Box>
                    <Button
                        fullWidth
                        type="submit"
                        sx={{
                            m:"2rem 0",
                            p:"1rem",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": {color: palette.primary.main}
                        }}  
                    >
                        {isLogin ? "Login" : "Register"}
                    </Button>
                    <Typography
                        onClick={() => {
                            setPageTpye(isLogin ? "register" : "login");
                            resetForm();
                        }}
                        sx={{
                            textDecoration:"underline",
                            color:palette.primary.main,
                            "&:hover": {
                                cursor: "pointer",
                                color: palette.primary.light
                            }
                        }}
                    >
                        {isLogin ? "Don't have an account? Sign Up here!" : "Already have an account? Login here!"}
                    </Typography>
                </Box>
            </form>
        )}
    </Formik>
    );
}

export default Form;