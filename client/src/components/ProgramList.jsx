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
                cost,
                programId}) => (
                    <Program
                        schoolName={schoolName}
                        cost={cost}
                        programName={programName}
                        programId={programId}
                    />
                )
        )}
    </Box> 
    )
}

export default ProgramList;