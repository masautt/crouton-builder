import React, {useState} from 'react';
import ScriptBar from "./ScriptBar";
import ChooseDesktop from "./BuildSteps/ChooseDesktop";
import ChooseDistro from "./BuildSteps/ChooseDistro";
import ChooseTargets from "./BuildSteps/ChooseTargets";


const PresetDisplay = () => {
    const [activeStep, setActiveStep] = useState("desktop");
    
    return (
        <div>
            {activeStep === "desktop" && <ChooseDesktop/>}
            {activeStep === "distro" && <ChooseDistro/>}
            {activeStep === "targets" && <ChooseTargets/>}
            <ScriptBar/>
        </div>
)}

export default PresetDisplay;