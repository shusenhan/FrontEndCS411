import Navbar from "scenes/navbar";
import { Box, useMediaQuery } from "@mui/material";
import LeftPart from "./left";
import MiddlePart from "./middle";
import RightPart from "./right";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    return (
    <Box>
        <Navbar/>
        <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="space-between"
        >
            <Box flexBasis={isNonMobileScreens ? "25%" : undefined}>
                <LeftPart/>
            </Box>

            <Box
                flexBasis={isNonMobileScreens ? "44%" : undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                <MiddlePart/>
            </Box>

            <Box flexBasis="25%">
                <RightPart/>
            </Box>
        </Box>
    </Box>
    );
};

export default HomePage;