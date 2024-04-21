import { Box } from "@mui/material";
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";

const SchoolImage = ({image, size="100%"}) =>{
    return(
        <Box width={size} height={size} padding="0.5rem 0.5rem 0.5rem 0.5rem">
            <img
                style={{objectFit: "Cover", borderRadius: "8%"}}
                width="100%"
                height="100%"
                alt="school"
                src={`../assets/${image}.jpg`}
            />
        </Box>
    )
};

export default SchoolImage;