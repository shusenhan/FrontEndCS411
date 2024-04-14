import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery,
    Icon
} from "@mui/material";
import{
    Search,
    Message,
    DarkMode,
    LightMode,
    Help,
    Menu,
    Close
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import ScrollDown from "./ScrollDown";

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width:100px)");

    const theme = useTheme();
    // App.js中使用theme.js的参数创建了主题
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const [isSearching, setIsSearching] = useState(false);
    const handleMouseEnter = () => setIsSearching(true);
    const handleMouseLeave = () => setIsSearching(false);

    // const fullName = `${user.firstName} ${user.lastName}`;
    const fullName = "TEST";

    return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
            <Typography 
                fontWeight="bold" 
                fontSize="clamp(1rem, 2rem, 2.25rem)"
                color="primary"
                onClick={() => navigate("/home")}
                sx={{
                    "&:hover":{
                        color: primaryLight,
                        cursor: "pointer"
                    }
                }}>
                Calendar
            </Typography>
            <FlexBetween 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                backgroundColor={neutralLight} 
                borderRadius="1.5rem" 
                gap="1.5rem" 
                padding="0.2rem 0.2rem">
                <IconButton 
                    style={{ position: 'relative' }}
                >
                    <Search/>
                    
                    <div style={{
                        position: 'absolute',
                        top: '100%', // 将容器的顶部定位到触发元素的底部
                        left: 0, // 可以调整这个值来改变容器的水平位置
                        backgroundColor: 'lightblue',
                        padding: '10px',
                        borderRadius: "1.5rem",
                        boxSizing: 'border-box',
                        zIndex: 1000, // 确保容器显示在其他内容之上
                        opacity: isSearching ? 1 : 0, // 控制透明度
                        transition: 'opacity 0.3s ease-in-out', // 添加过渡效果
                        pointerEvents: isSearching ? 'auto' : 'none', // 防止鼠标事件影响隐藏的元素
                    }}>
                        <ScrollDown/>
                    </div>
                </IconButton>
                <InputBase placeholder="Search....."/>
            </FlexBetween>
        </FlexBetween>

        {isNonMobileScreens ? (
            <FlexBetween gap="2rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <DarkMode sx={{fontSize: "25px"}}/>
                    ):(
                        <LightMode sx={{color: dark, fontSize: "25px"}}/>
                    )}
                </IconButton>
                <Message sx={{fontSize: "25px"}}/>
                <Help sx={{fontSize: "25px"}}/>
                <FormControl variant="standard" value={fullName}>
                    <Select
                        value={fullName}
                        sx={{
                            backgroundColor: neutralLight,
                            width: "150px",
                            borderRadius: "0.25rem",
                            p: "0.25rem 1rem",
                            "& .MuiSvgIcon-root": {
                                pr: "0.25rem",
                                width: "3rem"
                            },
                            "& .MuiSelect-select:focus":{
                                backgroundColor: neutralLight
                            }
                        }}
                        input={<InputBase/>}>
                        <MenuItem value={fullName}>
                            <Typography>{fullName}</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => dispatch(setLogout())}>
                                Log Out
                        </MenuItem>
                    </Select>
                    
                </FormControl>
            </FlexBetween>
        ) : (
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                <Menu/>
            </IconButton>
        )}

        {!isNonMobileScreens && isMobileMenuToggled &&(
            <Box
                position="fixed"
                right="0"
                bottom="0"
                height="100%"
                maxWidth="500px"
                minWidth="300px"
                backgroundColor={background}>
                <Box display="flex" justifyContent="flex-end" p="1rem">
                    <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                        <Close/>
                    </IconButton>
                </Box>

                <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkMode sx={{fontSize: "25px"}}/>
                        ):(
                            <LightMode sx={{color: dark, fontSize: "25px"}}/>
                        )}
                    </IconButton>
                    <Message sx={{fontSize: "25px"}}/>
                    <Help sx={{fontSize: "25px"}}/>
                    <FormControl variant="standard" value={fullName}>
                        <Select
                            value={fullName}
                            sx={{
                                backgroundColor: neutralLight,
                                width: "150px",
                                borderRadius: "0.25rem",
                                p: "0.25rem 1rem",
                                "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem"
                                },
                                "& .MuiSelect-select:focus":{
                                    backgroundColor: neutralLight
                                }
                            }}
                            input={<InputBase/>}>
                            <MenuItem value={fullName}>
                                <Typography>{fullName}</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout())}>
                                    Log Out
                            </MenuItem>
                        </Select>
                    </FormControl>
                </FlexBetween>
            </Box>
        )}
            
    </FlexBetween>);
};

export default Navbar;