import SchoolList from "components/School";
import { useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import { useTheme, Typography, Box } from "@mui/material";

const ResultPage = ({Return}) => {
    const schools = useSelector((state) => state.schools);
    const { palette } = useTheme();

    return(
    <Box>
        <FlexBetween>
            <Typography
                onClick={() => {
                    Return("input");
                }}
                sx={{
                    color:palette.primary.main,
                    "&:hover": {
                        cursor: "pointer",
                        color: palette.primary.light
                    }
                }}
            >
                Back
            </Typography>
        </FlexBetween>
        Result
        <SchoolList schools={schools}/>
    </Box>   
    )
}

export default ResultPage;