import FlexBetween from "./FlexBetween";
import { Typography, useTheme, Box } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Program  = ({schoolName, cost, programName, programId}) => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;

    return (
    <Box sx={{
        padding: "0.75rem 0rem 0.75rem 0rem",
        backgroundColor: palette.background.alt,
        borderRadius: "0.75rem"}}
    >
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
                ProgramID:{programId}
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