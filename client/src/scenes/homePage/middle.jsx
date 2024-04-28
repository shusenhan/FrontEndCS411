import BasicTabs from "components/Tab.tsx";
import WidgetWrapper from "components/WidgetWrapper";
import SchoolSearch from "./schoolSearch";
import ProgramSearch from "./programSearch";

const MiddlePart = () => {

    return(
    <WidgetWrapper>
        <BasicTabs Tab1={SchoolSearch} Tab2={ProgramSearch} Tab1Name="School Search" Tab2Name="Program Search"/>
    </WidgetWrapper>
    )
}

export default MiddlePart;