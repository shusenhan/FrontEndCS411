import School from "./School";
import { Box } from "@mui/material";

const SchoolList = ({schools}) => {

    return (
    <Box>
        {schools.map(
            ({
                SchoolId, 
                SchoolName, 
                AdmissionRate, 
                Location, 
                GPA, 
                GRE}) => (
                    <School
                        schoolId={SchoolId}
                        schoolName={SchoolName}
                        admissionRate={AdmissionRate}
                        location={Location}
                        GPA={GPA}
                        GRE={GRE}
                    />
                )
        )}
    </Box> 
    )
}

export default SchoolList;