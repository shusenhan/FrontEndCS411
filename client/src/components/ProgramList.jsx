import Program from "./Program";
import { Box } from "@mui/material";

const ProgramList = ({programs}) => {
    console.log(programs);
    return (
    <Box>
        {programs.map(
            ({
                progromName,
                schoolName, 
                cost}) => (
                    <Program
                        schoolName={schoolName}
                        cost={cost}
                        programName={progromName}
                    />
                )
        )}
    </Box> 
    )
}

export default ProgramList;