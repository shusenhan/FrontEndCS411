import{
    ManageAccountOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/UserImage";
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

    // const getUser = async () =>{
    //     const response = await fetch(`http://localhost:3001/users/${userId}`, {
    //         method: "GET",
    //         headers: { Authorization: `Bearer ${token}`}
    //     });

    //     const data = await response.json();
    //     setUser(data);
    // };

    // // []是依赖项，依赖项改变就是调用一次getUser
    // // 但这里没有依赖项，所以只会在开始时调用一次
    // useEffect(() => {
    //     getUser();
    // }, []);
    // 这段代码的效果是在组件首次渲染到DOM后，调用getUser函数一次，
    // 之后无论组件状态如何变化或组件如何重新渲染，getUser函数都不会再被调用。
    // 这样做可以有效避免不必要的API请求或操作，并且确保了数据获取等异步操作仅在组件装载完成时执行一次。

    // if(!user) {
    //     return null;
    // }

    // const {
    //     firstName,
    //     lastName,
    // } = user;

    return(
        <WidgetWrapper>
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => navigate()}
            >
                <FlexBetween gap="1rem">
                    {/* <UserImage image={picturePath}/> */}
                    <Box>
                        <Typography 
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                    color: palette.primary.light,
                                    cursor: "pointer"
                                }
                            }}
                        >
                            {"firstName"} {"lastName"}
                        </Typography>
                    </Box>
                </FlexBetween>

                <Divider/>

            </FlexBetween>
        </WidgetWrapper>
    )
};

export default UserWidget;