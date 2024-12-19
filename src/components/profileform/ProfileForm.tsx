"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { CheckboxField } from "../form/CheckboxField";
import avatarPlaceholder from "@/assets/form/prof.png";
import { useEffect, useState } from "react";
import { FileUploadField } from "../form/FileUploadField";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useUpdateByUserMutation } from "@/redux/Api/userApi";
import { toast } from "sonner";
import jsPDF from "jspdf";
import { userUpd } from "@/redux/allSlice/formslice";
import Loader from "../Loader";


const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  summitMember: z.string().min(2, "Summit Member is required."),
  month: z.string().min(1, "Month is required."),
  day: z.string().min(1, "Day is required."),
  year: z.string().min(1, "Year is required."),
  zodiac: z.string(),
  country: z.string(),
  province: z.string(),
  city: z.string().min(2, "City must be at least 2 characters."),

  haveRoom: z.boolean().default(false),
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size <= 256000, {
      message: "File must be less than 256 KB.",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "File must be JPEG or PNG format.",
    })
    .optional(),
});

export default function ProfileForm() {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const firstLastName = useSelector((state: RootState) => state.register);
  const [profileUpUser, { isLoading }] = useUpdateByUserMutation();
  const router = useRouter();
  const dispatch=useDispatch()

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: firstLastName?.firstName || "",
      lastName: firstLastName?.lastName || "",
      summitMember: "",
      month: "",
      day: "",
      year: "",
      zodiac: "",
      country: "UAE", // Default country
      province: "Dubai", // Default province
      city: "",
      haveRoom: false,
      profileImage: undefined,
    },
  });

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    try {
      // Construct dob from day, month, and year
      const { day, month, year, ...restValues } = values;
  
      // Construct dob as a string
      const dob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  
      // Create a new object with dob and without day, month, and year
      const updatedValues = {
        ...restValues,
        dob, // Add the dob field
      };
  
      // Create FormData and append updated values
      const formData = new FormData();
      formData.append("data", JSON.stringify(updatedValues));
  
      // Call the mutation
      const res = await profileUpUser(formData).unwrap();
      dispatch(userUpd(true));
  
      // Redirect after success
      router.push("/destination");
      console.log(res);
  
    } catch (error: any) {
      console.log(error);
    }
  };
  



  return (
    <>
       <Loader isOpen={isLoading} message="Saving destinations..." />

<div className="mx-auto p-4 font-sans">
  <div className="grid grid-cols-12">
    <h2 className="lg:text-[48px] text-[24px] font-[600] border-b-2 py-2 col-span-12 text-[#1D2939]">
      My Profile
    </h2>
  </div>

  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
      <div className="flex lg:flex-row gap-4 flex-col items-center">
        <div className="mb-4 h-[68px] w-[68px] rounded-full">
          <Image
            src={avatarPreview || avatarPlaceholder.src}
            alt="Avatar"
            width={68}
            height={68}
            className="rounded-full object-cover border-2 h-[68px] w-[68px] border-gray-300"
          />
        </div>
        <FileUploadField
          name="profileImage"
          label=""
          setPreview={setAvatarPreview}
          placeholder="You can upload images up to 256×256. Your avatar shows up in your public profile and your team notifications."
          form={form}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          name="firstName"
          label="First Name"
          placeholder="First Name"
          form={form}
        />
        <InputField
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          form={form}
        />
      </div>

      <InputField
        name="summitMember"
        label="Summit Member ID"
        placeholder="If you are an ExodUS Summit member?"
        form={form}
      />

      <p className="text-[#263238] text-[15px] font-[700]">Date of Birth</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SelectField
          name="month"
          label=""
          placeholder="Month"
          form={form}
          options={["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]}
        />
        <InputField name="day" label="" placeholder="Day" form={form} />
        <InputField name="year" label="" placeholder="Year" form={form} />
      </div>

      <SelectField
        name="zodiac"
        label="Zodiac Sign"
        placeholder="Select your zodiac sign"
        form={form}
        options={[
          "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
          "Sagittarius", "Capricorn", "Aquarius", "Pisces",
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField
          name="country"
          label="Country"
          placeholder="Country of citizenship"
          form={form}
          options={["UAE"]}
        />
        <SelectField
          name="province"
          label="Province"
          placeholder="Province/State"
          form={form}
          options={["Dubai"]}
        />
      </div>

      <InputField
        name="city"
        label="City"
        placeholder="What city?"
        form={form}
      />
      <CheckboxField
        name="haveRoom"
        label="I have a room available"
        form={form}
      />

      <Button
        type="submit"
        className="w-full bg-[#0872BA] text-white py-3 rounded-lg hover:bg-[#065a92] transition"
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Continue"}
      </Button>
    </form>
  </Form>
</div>
    </>
 
  );
}
