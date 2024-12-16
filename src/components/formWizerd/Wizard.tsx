import * as React from "react";
import { WizardNav } from "./WizardNav";

export default function Wizard() {
  const [currentStep, setCurrentStep] = React.useState("basics");

  const steps = [
    { id: "basics", label: "Basics", isCompleted: true },
    { id: "destinations", label: "Destinations" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "top3", label: "My top 3's" },
    { id: "talking-points", label: "Talking Points" },
  ];

  return (
    <div className="flex items-start w-full h-full mt-36">
      <div className="w-full max-w-[400px]">
        <WizardNav 
          steps={steps} 
          currentStep={currentStep} 
          onChange={setCurrentStep}
        />
      </div>
    </div>
  );
}
