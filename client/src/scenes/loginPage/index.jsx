import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
    <Box
        style={{
            backgroundImage:'url("../assets/welcome.jpg")',
            height:"100%",
            backgroundPosition: "center",
            backgroundSize:"100% 100% "
        }}
    >
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
            <Typography 
                fontWeight="bold" 
                fontSize="32px"
                color="primary">
                CS411EDU
            </Typography>
        </Box>
        <Box
            width={isNonMobileScreens ? "42%" : "75%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
        >
            <Form/>
        </Box>
    </Box>
    );
};

export default LoginPage;