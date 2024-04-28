import WidgetWrapper from "components/WidgetWrapper";
import AppResult from "./applicationResult";
import { Box, Typography } from "@mui/material";

const RightPart = () => {

    return(
    <WidgetWrapper>
        <Box padding="1rem 0.5rem 1rem 0.5rem">
            <Typography 
                fontSize="16px"
                fontWeight="200"
                textAlign="center"
            >
                Submit Your App Result! 
            </Typography>
        </Box>
        <AppResult/>
    </WidgetWrapper>
    )
}

export default RightPart;