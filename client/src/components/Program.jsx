import FlexBetween from "./FlexBetween";
import { Typography, useTheme, Box } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Program  = ({schoolName, cost, programName}) => {
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
                color={dark}
                fontWeight="300"
                textAlign="center"
            >
                {programName}
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
    </Box>
    )
}

export default Program;