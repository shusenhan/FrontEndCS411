import FlexBetween from "components/FlexBetween";
import School from "components/School";
import {
    Box,
    IconButton,
    InputBase,
    useTheme,
} from "@mui/material";
import{ Search } from "@mui/icons-material";
import { useState } from "react";
import ProgramList from "components/ProgramList";

const SchoolSearch = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [school, setSchool] = useState({});
    const [inputValue, setInputValue] = useState("");
    const theme = useTheme();
    const background = theme.palette.background.default; 
    const [key, setKey] = useState(0);

    const getSchool = async (schoolName) =>{
        const url = `http://localhost:3001/search/school?schoolName=${encodeURIComponent(schoolName)}`;
        const response = await fetch(url, {
            method: "GET"
        });

        const data = await response.json();
        setSchool(data);
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
                    placeholder="Search University"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </FlexBetween> 
        </Box>

        {isSearching && (
        <Box>
            <School
                key={key}
                schoolId={school.schoolId}
                schoolName={school.schoolName}
                location={school.location}
                admissionRate={school.admissionRate}
            />
            <ProgramList programs={school.programList}/>
        </Box>
        
        )}
    </Box>
    )
}

export default SchoolSearch;