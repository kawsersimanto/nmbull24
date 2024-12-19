import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Import RootState for type safety
import { WizardNav } from "./WizardNav";
import { useState } from "react";

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState("basics");

  // Access the 'completed' value from the Redux state (formData)
  const formState = useSelector((state: RootState) => state.formData);


  const steps = [
    { id: "basics", label: "Basics", route: "/basic", isCompleted: true },
    { 
      id: "destinations", 
      label: "Destinations", 
      route: "/destination", 
      isCompleted: !!formState.destination  // Set completion based on the 'completed' value from Redux
    },
    { id: "lifestyle", label: "Lifestyle", route: "/lifestyle",  isCompleted: !!formState.lifecicle },
    { id: "mytop3", label: "My top 3’s", route: "/mytop",  isCompleted: !!formState.mytop },
    { id: "talking Points", label: "Talking Points", route: "/talking-points",  isCompleted: !!formState.lifecicle },
    // Add more steps here...
  ];

  return (
    <div className="flex items-start w-full h-full mt-36">
      <div className="w-full max-w-[400px]">
        <WizardNav steps={steps} currentStep={currentStep} />
      </div>
    </div>
  );
}
