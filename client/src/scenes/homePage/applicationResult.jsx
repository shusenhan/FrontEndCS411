import {
    Box,
    Button,
    TextField,
    useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";

const formSchema = yup.object().shape({
    SchoolId:yup.string().required("required"),
    ProgramId:yup.string().required("required"),
    GPA: yup.number().required("required"),
    GRE: yup.number().required("required"),
    TOEFL: yup.number().required("required"),
    Age: yup.number().required("required"),
    Gender: yup.number().required("required"),
    Semester:yup.string().required("required"),
    Approval:yup.number().required("required"),
});

const initialValueRegister = {
    SchoolId:"",
    ProgramId:"",
    GPA:0,
    GRE:0,
    TOEFL:0,
    Age:0,
    Gender:0,
    Semester:"",
    Approval:0
};

const AppResult = () => {
    const { palette } = useTheme();
    const [buttonType, setButtonType] = useState("submit");

    const AppResultSubmit = async(values, onSubmitProps) => {
        const response = await fetch(
            "http://localhost:3001/userinput",
            {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(values)
            }
        );
        onSubmitProps.resetForm();       
    };

    const Delete = async(values, onSubmitProps) => {
        const response = await fetch(
            "http://localhost:3001/userinput",
            {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(values)
            }
        );
        onSubmitProps.resetForm();       
    };

    const handleFormSubmit = async(values, onSubmitProps) => {
        if(buttonType === 'submit'){
            console.log("submit!!!");
            await AppResultSubmit(values, onSubmitProps);
        }
        else{
            console.log("delete!!!");
            await Delete(values, onSubmitProps);
        }
    };

    return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValueRegister}
        validationSchema={formSchema}
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
                        label="SchoolId"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.SchoolId}
                        name="SchoolId"
                        error={Boolean(touched.SchoolId) && Boolean(errors.SchoolId)}
                        helperText={touched.SchoolId && errors.SchoolId}
                        sx={{gridColumn: "span 4"}}
                        size="small"
                    />
                    <TextField
                        label="ProgramId"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.ProgramId}
                        name="ProgramId"
                        error={Boolean(touched.ProgramId) && Boolean(errors.ProgramId)}
                        helperText={touched.ProgramId && errors.ProgramId}
                        sx={{gridColumn: "span 4"}}
                        size="small"
                    />
                    <TextField
                        label="GPA"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.GPA}
                        name="GPA"
                        error={Boolean(touched.GPA) && Boolean(errors.GPA)}
                        helperText={touched.GPA && errors.GPA}
                        sx={{gridColumn: "span 4"}}
                        size="small"
                    />
                    <TextField
                        label="GRE"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.GRE}
                        name="GRE"
                        error={Boolean(touched.GRE) && Boolean(errors.GRE)}
                        helperText={touched.GRE && errors.GRE}
                        sx={{gridColumn: "span 4"}}
                        size="small"
                    />
                    <TextField
                        label="TOEFL"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.TOEFL}
                        name="TOEFL"
                        error={Boolean(touched.TOEFL) && Boolean(errors.TOEFL)}
                        helperText={touched.TOEFL && errors.TOEFL}
                        sx={{gridColumn: "span 4"}}
                        size="small"
                    />
                    <TextField
                        label="Age"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.Age}
                        name="Age"
                        error={Boolean(touched.Age) && Boolean(errors.Age)}
                        helperText={touched.Age && errors.Age}
                        sx={{gridColumn: "span 4"}}
                        size="small"
                    />
                    <FormControl fullWidth sx={{gridColumn: "span 4"}}>
                        <InputLabel id="Gender">Gender</InputLabel>
                        <Select
                            labelId="Gender"
                            label="Gender"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.gender}
                            name="Gender"
                            error={Boolean(touched.Gender) && Boolean(errors.Gender)}
                            helperText={touched.Gender && errors.Gender}
                            size="small"
                        >
                            <MenuItem value={0}>Male</MenuItem>
                            <MenuItem value={1}>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Semester"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.Semester}
                        name="Semester"
                        error={Boolean(touched.Semester) && Boolean(errors.Semester)}
                        helperText={touched.Semester && errors.Semester}
                        sx={{gridColumn: "span 4"}}
                        size="small"
                    />
                    <FormControl fullWidth sx={{gridColumn: "span 4"}}>
                        <InputLabel id="Approval">Approval</InputLabel>
                        <Select
                            labelId="Approval"
                            label="Approval"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Approval}
                            name="Approval"
                            error={Boolean(touched.Approval) && Boolean(errors.Approval)}
                            helperText={touched.Approval && errors.Approval}
                            size="small"
                        >
                            <MenuItem value={0}>Approval</MenuItem>
                            <MenuItem value={1}>Reject</MenuItem>
                        </Select>
                    </FormControl>

                </Box>

                <Box>
                    <Button
                        fullWidth
                        type="submit"
                        onClick={() => setButtonType("submit")}
                        sx={{
                            m:"1.5rem 0",
                            p:"0.5rem",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": {color: palette.primary.main}
                        }}
                        size="small"  
                    >
                        Submit
                    </Button>
                    <Button
                        fullWidth
                        type="submit"
                        onClick={() => setButtonType("delete")}
                        sx={{
                            m:"0 0 1rem 0",
                            p:"0.5rem",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": {color: palette.primary.main},
                            backgroundColor:"red"
                        }}
                        size="small"  
                    >
                        Delete
                    </Button>
                </Box>
            </form>
        )}
    </Formik>
    );
}

export default AppResult;