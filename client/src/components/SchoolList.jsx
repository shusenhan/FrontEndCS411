import School from "./School";
import { Box } from "@mui/material";

const SchoolList = ({schools}) => {

    return (
    <Box>
        SchoolList
        {schools.map(
            ({
                SchoolId, 
                SchoolName, 
                AdmissionRate, 
                Location}) => (
                    <School
                        key={SchoolId}
                        schoolId={SchoolId}
                        schoolName={SchoolName}
                        admissionRate={AdmissionRate}
                        location={Location}
                    />
                )
        )}
    </Box> 
    )
}

export default SchoolList;