import Form from "./form";
import WidgetWrapper from "components/WidgetWrapper";
import UserWidget from "scenes/widgets/UserWidget";
import { useState } from "react";
import ResultPage from "./result";

const LeftPart = () => {
    const [ pageType, setPageType ] = useState("input");

    return(
    <WidgetWrapper>
        <UserWidget userId={"123"} picturePath={"123"}/>

        {pageType === "input" ? (<Form ChangeState={setPageType}/>) : (<ResultPage Return={setPageType}/>)}
    </WidgetWrapper>
    )
}

export default LeftPart;