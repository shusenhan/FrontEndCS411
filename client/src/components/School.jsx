import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetWrapper";
import { Typography, useTheme, Box } from "@mui/material";
import SchoolImage from "./SchoolImage";
import { useState } from "react";

const School  = ({schoolId, schoolName, admissionRate, location}) => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    return (
    <Box>
        <Box gap="0.5rem" pb="0.1rem" mt="0.5rem">
            <Typography
                    variant="h4"
                    color={dark}
                    fontWeight="500"
                    textAlign="center"
                >
                    {schoolName}
            </Typography>
        </Box>
        <FlexBetween>  
            <SchoolImage image={schoolId} size="60%"/>
            <Box>
                <Typography color={main} textAlign="center">AdmissionRate:{admissionRate}%</Typography>
                <Typography color={medium} textAlign="center">Location:{location}</Typography>
            </Box>
        </FlexBetween>
    </Box>
    )
}

export default School;