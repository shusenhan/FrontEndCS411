import FlexBetween from "./FlexBetween";
import { Typography, useTheme, Box } from "@mui/material";
import { useState } from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Recommand  = ({programName, schoolName, admissionRate, location, cost}) => {
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
                fontWeight="400"
                textAlign="center"
            >
                {schoolName}
            </Typography>
            <Typography
                variant="h5"
                color={medium}
                fontWeight="300"
                textAlign="center"
            >
                {programName}
            </Typography>
            <Typography
                variant="h5"
                color={medium}
                fontWeight="300"
                textAlign="center"
            >
                Location:{location}
            </Typography>
        </Box>
        <FlexBetween>
            <Typography
                variant="h5"
                color={dark}
                fontWeight="200"
                textAlign="center"
            >
                Cost Estimate:
            </Typography>
            <Typography><AttachMoneyIcon margin="auto auto"/>{cost}</Typography>
        </FlexBetween>
        <FlexBetween>
            <Typography
                variant="h5"
                color={dark}
                fontWeight="200"
                textAlign="center"
            >
                Admission Rate:
            </Typography>
            <Typography><AttachMoneyIcon margin="auto auto"/>{admissionRate}</Typography>
        </FlexBetween>
    </Box>
    )
}

export default Recommand;