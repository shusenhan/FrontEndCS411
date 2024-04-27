import { Box, Typography, useTheme } from "@mui/material";

const UserWidget = () =>{
    const { palette } = useTheme();
    const dark = palette.neutral.dark;

    return(
                <Box padding="1rem 0.5rem 1rem 0.5rem">
                    <Typography 
                        fontSize="16px"
                        color={dark}
                        fontWeight="200"
                        textAlign="center"
                    >
                        {"Hi!"} 
                    </Typography>
                </Box>
    )
};

export default UserWidget;