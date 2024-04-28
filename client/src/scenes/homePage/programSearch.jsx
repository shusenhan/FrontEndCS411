import FlexBetween from "components/FlexBetween";
import ProgramList from "components/ProgramList";
import {
    Box,
    IconButton,
    InputBase,
    useTheme
} from "@mui/material";
import{ Search } from "@mui/icons-material";
import { useState } from "react";

const ProgramSearch = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [program, setProgram] = useState({});
    const [inputValue, setInputValue] = useState("");
    const theme = useTheme();
    const background = theme.palette.background.default; 
    const [key, setKey] = useState(0);

    const getSchool = async (programName) =>{
        const url = `http://localhost:3001/search/program?programName=${encodeURIComponent(programName)}`;
        const response = await fetch(url, {
            method: "GET"
        });

        const data = await response.json();
        setProgram(data);
    };

    const handleSearch = async() => {
        await getSchool(inputValue);
        setIsSearching(true);
        setKey(prevKey => prevKey + 1); 
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return(
    <Box>
        <Box  
            width="100%"
            borderRadius="1.5rem" 
            gap="1.5rem" 
            padding="0.2rem 0.2rem"
            backgroundColor={background}
        >
            <FlexBetween>
                <IconButton onClick={handleSearch}>
                    <Search/>
                </IconButton>
                <InputBase 
                    fullWidth
                    placeholder="Search Program"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                        
            </FlexBetween>
        </Box>

        {isSearching && (
            <ProgramList
                key={key}
                programs={program}
                
            />
        )}
    </Box>
    )
}

export default ProgramSearch;