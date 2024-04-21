import School from "./School";
import { Box } from "@mui/material";

const SchoolList = ({schools}) => {
    console.log("SchoolList's school=", schools);

    return (
    <Box>
        SchoolList
        {schools.map(
            ({
                SchoolId, 
                SchoolName, 
                AdmissionRate, 
                Location, 
                GPA, 
                GRE}) => (
                    <School
                        key={SchoolId}
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