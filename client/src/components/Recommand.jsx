import FlexBetween from "./FlexBetween";
import { Typography, useTheme, Box } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Divider from '@mui/material/Divider';

const Recommand  = ({programName, schoolName, admissionRate, location, cost}) => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    return (
    <Box>
        <Divider sx={{margin:"0.5rem 0"}}/>
        <Box gap="0.5rem" pb="0.1rem" mt="0.5rem">
            <Box>
                <Typography
                    fontSize="16px"
                    color={dark}
                    fontWeight="400"
                    textAlign="center"
                >
                    {schoolName}
                </Typography>
            </Box>
            <Box>
                <Typography
                    fontSize="14px"
                    color={dark}
                    fontWeight="300"
                    textAlign="center"
                >
                    {programName}
                </Typography>
            </Box>
            <Box>
                <Typography
                    fontSize="12px"
                    color={medium}
                    fontWeight="200"
                    textAlign="center"
                >
                    Location:{location}
                </Typography>
            </Box>
        </Box>
        <FlexBetween>
            <Typography
                fontSize="12px"
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
                fontSize="12px"
                color={dark}
                fontWeight="200"
                textAlign="center"
            >
                Admission Rate:
            </Typography>
            <Typography>{admissionRate}</Typography>
        </FlexBetween>
    </Box>
    )
}

export default Recommand;