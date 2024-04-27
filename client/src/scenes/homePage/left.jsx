import Form from "./form";
import WidgetWrapper from "components/WidgetWrapper";
import UserWidget from "scenes/widgets/UserWidget";
import { useState } from "react";
import ResultPage from "./result";

const LeftPart = () => {
    const [ pageType, setPageType ] = useState("input");
    const [ resultType, setResultType ] = useState("");

    return(
    <WidgetWrapper>
        <UserWidget/>

        {pageType === "input" ? (
            <Form ChangeState={setPageType} ChangeResultType={setResultType}/>) : (
            <ResultPage Return={setPageType} resultType={resultType}/>)}
    </WidgetWrapper>
    )
}

export default LeftPart;