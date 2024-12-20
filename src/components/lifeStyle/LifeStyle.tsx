"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { CheckboxField } from "../form/CheckboxField";
import { TextareaField } from "../form/TextAreaField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import PlusIcon from "../icon/PlusIcon";
import { useLifeCicleAddMutation } from "@/redux/Api/lifeCicleApi";
import { saveLifeCicleData } from "@/redux/allSlice/formslice";

const formSchema = z.object({
  monthlyBudget: z.string().min(1, "Monthly budget is required"),
  maritalStatus: z.string().min(1, "Marital status is required"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  religion: z.string().min(1, "Religion is required"),
  children: z.string().min(1, "Please select an option"),
  pets: z.string().min(1, "Please select an option"),
  education: z.string().min(1, "Education is required"),
  employmentStatus: z.string().min(1, "Employment status is required"),
  haveBusiness: z.boolean().default(false),
  industry: z.string().optional(),
  companyName: z.string().optional(),
  serviceDes: z.string().optional(),
  facebook: z.string().optional().or(z.literal("")),
  instagram: z.string().optional().or(z.literal("")),
  youtube: z.string().optional().or(z.literal("")),
  website: z.string().optional().or(z.literal("")),
});

export default function LifeStyle() {
  const [addLificicle, { isLoading, isError, error }] =
    useLifeCicleAddMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      haveBusiness: false,
    },
  });
  const router = useRouter();
  const dispatch = useDispatch();


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    
     const transformedValues = {
    ...values,
    monthlyBudget: parseFloat(values.monthlyBudget), 
  };

  try {
    console.log("trasformd",transformedValues);
    // Send the transformed values to the API
    await addLificicle(transformedValues).unwrap();

        dispatch(saveLifeCicleData(true));
    router.push("/mytop");
      } catch (err) {
        console.error("Error adding destination:", err);
      }
    };

  const [socialLinks, setSocialLinks] = useState({
    facebook: false,
    instagram: false,
    website: false,
    youtube: false,
  });

  const toggleLinkVisibility = (link: keyof typeof socialLinks) => {
    setSocialLinks((prev) => ({ ...prev, [link]: !prev[link] }));
  };

  const renderSocialLink = (label: string, name: keyof typeof socialLinks) => (
    <div className="relative">
      <div className="flex items-center gap-2 mb-2">
        <span onClick={() => toggleLinkVisibility(name)}>
          <PlusIcon
            className="text-[#0872BA] border-2 border-[#0872BA] rounded-full cursor-pointer"
          />
        </span>
        <div className="text-black">{label}</div>
      </div>

      {socialLinks[name] && (
        <div className="grid grid-cols-12 gap-4 d-flex justify-center">
          <div className="col-span-6">
            <InputField
              name={name}
              label=""
              placeholder={`${label} link`}
              form={form}
            />
          </div>
        </div>
      )}
    </div>
  );

  const hasBusiness = form.watch("haveBusiness");

  return (
    <div className="mx-auto p-4 lg:p-8 font-sans ">
      <div className="border-b-2 pb-4 mb-6">
        <h2 className="text-[#1D2939] text-2xl lg:text-[48px] font-semibold">
          Lifestyle
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            name="monthlyBudget"
            label="Monthly Budget"
            placeholder="Enter your monthly budget"
            form={form}
          />

          <SelectField
            name="maritalStatus"
            label="Marital Status"
            placeholder="Select"
            form={form}
            options={["Single", "Married", "Divorced"]}
          />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          
          <SelectField
            name="ethnicity"
            label="Ethnicity"
            placeholder="Select"
            form={form}
            options={["Asian", "African", "European"]}
          />

          <SelectField
            name="religion"
            label="Religion"
            placeholder="Select"
            form={form}
            options={["None", "Christianity", "Islam", "Hinduism"]}
          />

                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <SelectField
            name="children"
            label="Do you have children?"
            placeholder="Select"
            form={form}
            options={["Yes", "No"]}
          />

          <SelectField
            name="pets"
            label="Do you have pets?"
            placeholder="Select"
            form={form}
            options={["Dog", "Cat", "None"]}
          />
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
                          <SelectField
            name="education"
            label="Education Level"
            placeholder="Select"
            form={form}
            options={[
              "High School",
              "Associate's Degree",
              "Bachelor's Degree",
              "Master's Degree",
              "Ph.D.",
            ]}
          />

          <SelectField
            name="employmentStatus"
            label="Employment Status"
            placeholder="Select"
            form={form}
            options={["Full-time", "Part-time", "Unemployed", "Self-employed"]}
          />
                          </div>



      

          

          <CheckboxField
            name="haveBusiness"
            label="Do you have a business?"
            form={form}
          />

          {hasBusiness && (
            <div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
                                        <SelectField
                name="industry"
                label="Industry"
                placeholder="Select"
                form={form}
                options={["Technology", "Healthcare", "Education"]}
              />
              <InputField
                name="companyName"
                label="Company Name"
                placeholder="Enter company name"
                form={form}
              />

                                          </div>

            
              <TextareaField
                name="serviceDes"
                label="Description of Services"
                placeholder="Enter service description"
                form={form}
              />
            </div>
          )}

          {renderSocialLink("Facebook", "facebook")}
          {renderSocialLink("Instagram", "instagram")}
          {renderSocialLink("YouTube", "youtube")}
          {renderSocialLink("Website", "website")}

          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white py-6 rounded-lg hover:bg-[#065a92] transition"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
