import Recommand from "./Recommand";
import { Box } from "@mui/material";

const RecommandList = ({schools}) => {

    return (
    <Box>
        {schools.map(
            ({
                programName, 
                schoolName, 
                admissionRate, 
                location,
                cost}) => (
                    <Recommand
                        programName={programName}
                        schoolName={schoolName}
                        admissionRate={admissionRate}
                        location={location}
                        cost={cost}
                    />
                )
        )}
    </Box> 
    )
}

export default RecommandList;