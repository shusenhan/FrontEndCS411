import{
    ManageAccountOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserWidget = ({ userId, picturePath }) =>{
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.mideum;
    const main = palette.neutral.main;

    return(
                <Box padding="1rem 0.5rem 1rem 0.5rem">
                    <Typography 
                        fontSize="16px"
                        color={dark}
                        fontWeight="200"
                        textAlign="center"
                    >
                        {"Hi,"} {"Username!"} {"input your info and get a rec!"}
                    </Typography>
                </Box>
    )
};

export default UserWidget;