import RecommandList from "components/RecommandList";
import { useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import { useTheme, Typography, Box } from "@mui/material";

const ResultPage = ({Return, resultType}) => {
    const schools = useSelector((state) => state.schools);
    const { palette } = useTheme();
    const Rank = useSelector((state) => state.rank);
    console.log("schools=", schools);

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
        
        {resultType === "Rank" ? (
            <Typography
                color={palette.primary.dark}
                textAlign="center"
            >
                You have exceeded {100 - Rank}% applicants!
            </Typography>) : (<RecommandList schools={schools}/>)}
    </Box>   
    )
}

export default ResultPage;