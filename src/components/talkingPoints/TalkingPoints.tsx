"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SelectField } from "../form/SelectField";
import { TextareaField } from "../form/TextAreaField";
import talkingPointsSchema from "@/schema/talkingPointsSchema";
import { useRouter } from "next/navigation";
import { useTalkingPointsMutation } from "@/redux/Api/talkingPointsApi";
import { useGetUserQuery } from "@/redux/Api/userApi";

export default function TalkingPoints() {
  const [talkingData, { isLoading, isError }] = useTalkingPointsMutation();
  const { data: userData, isLoading: userLoading, isError: userError } = useGetUserQuery(undefined);

  const form = useForm<z.infer<typeof talkingPointsSchema>>({
    resolver: zodResolver(talkingPointsSchema),
    defaultValues: {
      cleanlinessLevel: "",
      workLevel: "",
      sleepSchedule: "",
    },
  });

  const router = useRouter();

  // Check if userData and userData.data exist before accessing id
  const userId = userData?.data?.id;
  console.log("User ID:", userId);

  const onSubmit = async (values: z.infer<typeof talkingPointsSchema>) => {
    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    try {
      const modifiedValues = {
        ...values,
        cleanlinessLevel: Number(values.cleanlinessLevel),
        workLevel: Number(values.workLevel),
        sleepSchedule: Number(values.sleepSchedule),
        userId: userId.toString(), // Ensure userId is a string
      };

      await talkingData(modifiedValues).unwrap();
      router.push("/user-profile");
    } catch (err) {
      console.error("Error adding talking points:", err);
    }
  };

  if (userLoading) {
    return <div>Loading user data...</div>;
  }

  if (userError) {
    return <div>Error loading user data. Please try again later.</div>;
  }

  if (!userData || !userData.data) {
    return <div>No user data available. Please log in and try again.</div>;
  }

  return (
    <div className="mx-auto p-4 lg:p-8 font-sans">
      <div className="border-b-2 pb-4 mb-6">
        <h2 className="text-[#1D2939] text-2xl lg:text-[48px] font-semibold">Talking Points</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {[
            { name: "cleanlinessLevel", question: "How would you rate your cleanliness level?", type: "select" },
            { name: "workLevel", question: "How would you rate your work intensity?", type: "select" },
            { name: "sleepSchedule", question: "How consistent is your sleep schedule?", type: "select" },
            { name: "cleaningHabit", question: "What are your cleaning habits?", type: "select" },
            { name: "financialHabit", question: "How do you manage your finances?", type: "select" },
            { name: "cookingHabit", question: "What are your cooking habits?", type: "select" },
            { name: "decorationStyle", question: "What is your decoration style?", type: "select" },
            { name: "communicationStyle", question: "How would you describe your communication style?", type: "select" },
            { name: "mediaType", question: "What media type do you prefer?", type: "select" },
            { name: "cleanlinessRate", question: "How would you describe your cleanliness preferences?", type: "select" },
            { name: "cookingDescription", question: "Describe your cooking preferences.", type: "textarea" },
            { name: "houseMateRelation", question: "What is your relationship with housemates?", type: "select" },
            { name: "financialHabitDescription", question: "Describe your financial habits.", type: "textarea" },
            { name: "communicationStyleDescription", question: "Describe your communication style.", type: "textarea" },
            { name: "petFriendlyDescription", question: "Are you pet-friendly?", type: "select" },
            { name: "hostFriend", question: "How often do you host friends?", type: "select" },
            { name: "workRoutine", question: "What does your daily work routine look like?", type: "textarea" },
            { name: "sleepDescription", question: "Describe your sleep habits.", type: "textarea" },
            { name: "vapingProduct", question: "Do you use vaping products?", type: "select" },
            { name: "consumeAlcohol", question: "How often do you consume alcohol?", type: "select" },
            { name: "drugDescription", question: "Describe your stance on drug use.", type: "textarea" },
            { name: "potentialDescription", question: "What motivates you?", type: "textarea" },
            { name: "regardingHealth", question: "How do you maintain your health?", type: "textarea" },
            { name: "relagiouseDescription", question: "What are your religious/spiritual beliefs?", type: "textarea" },
            { name: "haveAllergies", question: "Do you have any allergies?", type: "textarea" },
          ].map((field) => (
            <div key={field.name} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
              <p className="text-[#263238] text-[17px] font-[600]">{field.question}</p>
              {field.type === "textarea" ? (
                <TextareaField
                  name={field.name}
                  label=""
                  placeholder="Please share here..."
                  form={form}
                />
              ) : (
                <SelectField
                  name={field.name}
                  label=""
                  placeholder="Select an option..."
                  form={form}
                  options={["Select an option", "1", "2", "3", "4", "5"]} // Numeric options for rating fields
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white py-3 rounded-lg hover:bg-[#065a92] transition"
          >
            Save my profile
          </Button>
        </form>
      </Form>

      <div className="mt-4 text-left">
        <p className="text-sm text-gray-600">
          Need help? Click{" "}
          <a href="#" className="text-[#0872BA] hover:underline">
            Help & Support
          </a>
        </p>
      </div>
    </div>
  );
}

