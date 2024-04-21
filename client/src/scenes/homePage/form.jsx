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
import { setRecommandSchools } from "state";
import { useDispatch } from "react-redux";

const formSchema = yup.object().shape({
    GPA: yup.number().required("required"),
    GRE: yup.number().required("required"),
    TOEFL: yup.number().required("required"),
    Age: yup.number().required("required")
});

const initialValueRegister = {
    GPA:0,
    GRE:0,
    TOEFL:0,
    Age:0
};

const Form = ({ChangeState}) => {
    const [ buttonType, setButtonType ] = useState("rank");
    const { palette } = useTheme();
    const isRank = buttonType === "rank";
    const isRecommand = buttonType === "recommand";
    const dispatch = useDispatch();

    const Recommand = async(values, onSubmitProps) => {
        console.log("Recommand");
        const response = await fetch(
            "http://localhost:3001/rec",
            {
                method: "POST",
                header: {"Content-Type" : "application/json"},
                body: JSON.stringify(values)
            }
        );
        const school = await response.json();
        onSubmitProps.resetForm();

        if(school){
            dispatch(
                setRecommandSchools({
                    schools:school
            }));
        }
    };

    const Rank = async(values, onSubmitProps) => {
        console.log("Rank");
        const response = await fetch(
            "http://localhost:3001/rank",
            {
                method: "POST",
                header: {"Content-Type" : "application/json"},
                body: JSON.stringify(values)
            }
        );

        const data = await response.json();
        onSubmitProps.resetForm();
    };

    const handleFormSubmit = async(values, onSubmitProps) => {
        if(isRecommand) await Recommand(values, onSubmitProps);
        if(isRank) await Rank(values, onSubmitProps);
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
                        label="GPA"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.GPA}
                        name="GPA"
                        error={Boolean(touched.GPA) && Boolean(errors.GPA)}
                        helperText={touched.GPA && errors.GPA}
                        sx={{gridColumn: "span 4"}}
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
                    />
                </Box>

                <Box>
                    <Button
                        fullWidth
                        type="submit"
                        onClick={() => {ChangeState("result")}}
                        sx={{
                            m:"2rem 0",
                            p:"1rem",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": {color: palette.primary.main}
                        }}  
                    >
                        {isRank ? "Rank" : "Recommand"}
                    </Button>
                    <Typography
                        onClick={() => {
                            setButtonType(isRecommand ? "rank" : "recommand");
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
                        {isRank ? "Get Your Rocommand Schools!" : "Get Your Rank!"}
                    </Typography>
                </Box>
            </form>
        )}
    </Formik>
    );
}

export default Form;