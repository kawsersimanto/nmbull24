import * as React from "react";
import { cn } from "@/lib/utils";

interface WizardStep {
  id: string;
  label: string;
  isCompleted?: boolean;
}

interface WizardNavProps {
  steps?: WizardStep[];
  currentStep: string;
  onChange?: (stepId: string) => void;
  className?: string;
}

export function WizardNav({ steps = [], currentStep, onChange, className }: WizardNavProps) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <nav className={cn("relative flex flex-col items-center text-center gap-4", className)}>
      {/* Vertical dotted line running through the steps */}
     

      {steps.map((step, index) => (
        <div
          key={step.id}
          onClick={() => onChange?.(step.id)}
          className={cn(
            "group flex flex-col items-center text-center w-full gap-6 text-sm font-medium",
            "relative hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            currentStep === step.id ? "text-primary font-semibold" : "text-muted-foreground"
          )}
        >
          
          <span
            className={cn(
              "relative w-full", // Increased padding for step text
              currentStep === step.id && "font-semibold"
            )}
          >
            {step.label}
          </span>

          {/* Indicator dot for current step */}
         

          {/* Divider line between steps */}
          {index !== steps.length - 1 && (
             <div className="h-[100px] w-[2px] border-l-2 border-dotted border-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
}
