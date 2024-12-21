"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SelectField } from "../form/SelectField";
import { InfoIcon } from 'lucide-react';

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useMytopAddMutation } from "@/redux/Api/myTopApi";
import { mytopData } from "@/redux/allSlice/formslice";
import Loader from "../Loader";

const formSchema = z.object({
  personality: z.array(z.string().min(1, "Please select a personality trait")),
  philosophies: z.array(z.string().min(1, "Please select a philosophy")),
  goals: z.array(z.string().min(1, "Please select a goal")),
  hobbies: z.array(z.string().min(1, "Please select a hobby")),
  socialGroups: z.array(z.string().min(1, "Please select a social group")),
  foodieFan: z.array(z.string().min(1, "Please select a food preference")),
  musicTastes: z.array(z.string().min(1, "Please select a music taste")),
});

export default function MyTop3() {
   const [addMyTop, { isLoading, isError, error }] =
      useMytopAddMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personality: ["", "", ""],
      philosophies: ["", "", ""],
      goals: ["", "", ""],
      hobbies: ["", "", ""],
      socialGroups: ["", "", ""],
      foodieFan: ["", "", ""],
      musicTastes: ["", "", ""],
    },
  });

 

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
     try {
        // Send the transformed values to the API
        await addMyTop(values).unwrap();
    
            // Dispatching the completed flag as part of the payload
            dispatch(mytopData(true));
            console.log(values);
            router.push("/talking-points");          
          } catch (err) {
            console.error("Error adding destination:", err);
          }
   

  };

  const renderSelectFields = (name: string, options: string[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((num) => (
        <SelectField
          key={`${name}_${num}`}
          name={`${name}.${num - 1}`}
          label=""
          placeholder={options[num - 1]}
          form={form}
          options={options}
        />
      ))}
    </div>
  );

  return (
  <>
    <Loader isOpen={isLoading} message="Saving destinations..." />

<div className="mx-auto p-4 lg:p-8 font-sans">
  <div className="border-b-2 pb-4 mb-6">
    <h2 className="text-[#1D2939] text-2xl lg:text-[48px] font-semibold">My Top 3&apos;s</h2>
  </div>

  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {[
        { name: "personality", label: "Personality", options: ["Adventurous", "Easygoing", "Humorous"] },
        { name: "philosophies", label: "Philosophies", options: ["Ambitious", "Idealistic", "Impulsive"] },
        { name: "goals", label: "Goals", options: ["Career", "Community Building", "Community Service"] },
        { name: "hobbies", label: "Hobbies", options: ["Animals", "Art", "Automobiles"] },
        { name: "socialGroups", label: "Social Groups", options: ["Average", "Country folks", "Creative folks"] },
        { name: "foodieFan", label: "Foodie Fan", options: ["Asian Cuisine", "BBQ", "Caribbean Cuisine"] },
        { name: "musicTastes", label: "Music Tastes", options: ["Alternative", "Classical", "Blues"] },
      ].map(({ name, label, options }) => (
        <div key={name} className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-[#263238] text-[15px] font-bold">{label}</h3>
            <InfoIcon className="w-4 h-4 text-blue-500" />
          </div>
          {renderSelectFields(name, options)}
        </div>
      ))}

      <Button
        type="submit"
        className="w-full bg-[#0872BA] text-white py-3 rounded-lg hover:bg-[#065a92] transition"
      >
        Continue
      </Button>
    </form>
  </Form>

  <div className="mt-4 text-start">
    <a href="#" className="text-[#0872BA] hover:underline text-sm">
      Need help? Click Help & Support
    </a>
  </div>
</div>
  </>
  );
}
