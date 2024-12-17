"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { CheckboxField } from "../form/CheckboxField";
import { Plus, Trash2 } from 'lucide-react';
import { TextareaField } from "../form/TextAreaField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveStep3Data } from "@/redux/formSlice";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  maximum_monthly_rent: z.string().min(1, "Maximum monthly rent is required"),
  marital_status: z.string().min(1, "Marital status is required"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  religion: z.string().min(1, "Religion is required"),
  children: z.string().min(1, "Please select an option"),
  pets: z.string().min(1, "Please select an option"),
  education: z.string().min(1, "Education is required"),
  employment_status: z.string().min(1, "Employment status is required"),
  has_business: z.boolean().default(false),
  industry: z.string().optional(),
  company_name: z.string().optional(),
  description_of_services: z.string().optional(),
  facebook: z.string().optional().or(z.literal("")),
  instagram: z.string().optional().or(z.literal("")),
  youtube: z.string().optional().or(z.literal("")),
  website: z.string().optional().or(z.literal("")),
  linkedin: z.string().optional().or(z.literal("")),
});


export default function LifeStyle(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      has_business: false,
    }
  });
  const router = useRouter();

  const dispatch=useDispatch()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(saveStep3Data({ ...values, completed: true })); 
       router.push("/mytop"); 

  };
  const [socialLinks, setSocialLinks] = useState<{
    facebook: boolean;
    instagram: boolean;
    website: boolean;
    linkedin: boolean;
    youtube: boolean;
  }>({
    facebook: false,
    instagram: false,
    website: false,
    linkedin: false,
    youtube: false,
  });
 
  const toggleLinkVisibility = (link: keyof typeof socialLinks) => {
    setSocialLinks(prev => ({ ...prev, [link]: !prev[link] }));
  };

  const hasBusiness = form.watch("has_business");
  const renderSocialLink = (label: string, name: keyof typeof socialLinks) => {
    return (
      <div className="relative">
        <div className="flex items-center gap-2">
          <Plus
            className="text-[#000000] border-2 rounded border-black cursor-pointer"
            onClick={() => toggleLinkVisibility(name)}
          />
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
            <div className="col-span-6 flex justify-start items-center">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => toggleLinkVisibility(name)}
                className="border-2 "
              >
                <Trash2 className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto p-4 lg:p-8 font-sans ">
      <div className="border-b-2 pb-4 mb-6">
        <h2 className="text-[#1D2939] text-2xl lg:text-[48px] font-semibold">Lifestyle</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information */}
          <InputField
            name="maximum_monthly_rent"
            label="Maximum monthly rent"
            placeholder="Enter your monthly budget"
            form={form}
          />

          <SelectField
            name="marital_status"
            label="Marital Status"
            placeholder="Select"
            form={form}
            options={["Unmarried", "Married", "Divorced"]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SelectField
              name="ethnicity"
              label="Ethnicity"
              placeholder="Chinese"
              form={form}
              options={["Chinese", "Bangladesh", "Pakistan"]}
            />
            <SelectField
              name="religion"
              label="Religion/Spirituality"
              placeholder="Select"
              form={form}
              options={["Christianity", "Islam", "Buddhism", "Hinduism"]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SelectField
              name="children"
              label="Children"
              placeholder="Select"
              form={form}
              options={["No", "Yes"]}
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[#263238] font-semibold">Pets</span>
                <span className="text-blue-600 cursor-help" title="Information about pets">ⓘ</span>
              </div>
              <SelectField
                name="pets"
                label=""
                placeholder="Select"
                form={form}
                options={["No", "Yes"]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SelectField
              name="education"
              label="Education"
              placeholder="Some high school"
              form={form}
              options={["Some high school", "High school", "College", "University"]}
            />
            <SelectField
              name="employment_status"
              label="Employment Status"
              placeholder="Full time"
              form={form}
              options={["Full time", "Part time", "Self-employed", "Unemployed"]}
            />
          </div>

          <CheckboxField
            name="has_business"
            label="Do you own or operate a business?"
            form={form}
          />

          {/* Business Details */}
          {hasBusiness && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <SelectField
                  name="industry"
                  label="Industry"
                  placeholder="IT"
                  form={form}
                  options={["IT", "Healthcare", "Education", "Other"]}
                />
                <div>
                  <InputField
                    name="company_name"
                    label="Company Name"
                    placeholder="IT Meta Solution"
                    form={form}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    <a href="mailto:admin@example.com" className="text-blue-600">Email Admin</a> to request an unlisted industry
                  </p>
                </div>
              </div>

              <TextareaField
                name="description_of_services"
                label="Description of Services"
                placeholder="Describe your services..."
                form={form}
              />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  <span className="text-[#263238] font-semibold">Visit Us Online</span>
                  <span className="text-blue-600 cursor-help" title="Your online presence">ⓘ</span>
                </div>

                {/* Facebook Section */}
             
                {/* Render social media link sections */}
                {renderSocialLink("Facebook", "facebook")}
                {renderSocialLink("Instagram", "instagram")}
                {renderSocialLink("Website", "website")}
                {renderSocialLink("LinkedIn", "linkedin")}
                {renderSocialLink("YouTube", "youtube")}

              

             

               
              </div>

            </div>
          )}

          {/* Submit Button */}
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
