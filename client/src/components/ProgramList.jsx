import Program from "./Program";
import { Box } from "@mui/material";

const ProgramList = ({programs}) => {
    console.log(programs);
    return (
    <Box>
        {programs.map(
            ({
                SchoolName, 
                Cost}) => (
                    <Program
                        schoolName={SchoolName}
                        cost={Cost}
                    />
                )
        )}
    </Box> 
    )
}

export default ProgramList;