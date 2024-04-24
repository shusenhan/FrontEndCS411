import Program from "./Program";
import { Box } from "@mui/material";

const ProgramList = ({programs}) => {
    console.log(programs);
    return (
    <Box>
        {programs.map(
            ({
                programName,
                schoolName, 
                cost}) => (
                    <Program
                        schoolName={schoolName}
                        cost={cost}
                        programName={programName}
                    />
                )
        )}
    </Box> 
    )
}

export default ProgramList;