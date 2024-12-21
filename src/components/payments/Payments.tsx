"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import VisaCardIcon from "../icon/VisaCardIcon";
import { CreditCard } from "lucide-react";
import BankCardIcon from "../icon/BankCardIcon";
import { useCreatePaymentMethodMutation } from "@/redux/Api/stripeApi";
import {  useSubscriptionPlanMutation } from "@/redux/Api/membershipApi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import logoPayments from '@/assets/stripePayments.png'


const paymentSchema = z.object({
  number: z.string(),
  exp_month: z.string(),
  exp_year: z.string(),
  cvc: z.string(),
  type: z.string(),
});

interface PaymentFormProps {
  amount: number;
  priceId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Payments({ amount, priceId, isOpen, onClose }: PaymentFormProps) {
    const router = useRouter();
  const loginEmail = useSelector((state: RootState) => state.Auth);
  
  const [getPayId, { isLoading }] = useCreatePaymentMethodMutation();
  const [subscription] = useSubscriptionPlanMutation();
  const [paymentMethodId, setPaymentMethodId] = useState<string | null>(null);

  
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: "",
      type: "",
    },
  });
 

  // State for loading and messages
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const onSubmit = async (values: z.infer<typeof paymentSchema>) => {
    const formData = new FormData();
    formData.append("card[number]", values.number);
    formData.append("card[exp_month]", values.exp_month);
    formData.append("card[exp_year]", values.exp_year);
    formData.append("card[cvc]", values.cvc);
    formData.append("type", values.type);
  
    try {
      setLoadingMessage("Processing payment...");
      const response = await getPayId(formData).unwrap();
  
      const methodId = response.id; // Ensure this is the correct IDc
  
      // Check if paymentMethodId is valid
      if (!methodId) {
        setErrorMessage("Payment method ID is missing.");
        setLoadingMessage(null);
        return;
      }
  
      setPaymentMethodId(paymentMethodId); // Store the payment method ID
      console.log(methodId);
  
      // Proceed with subscription
      setLoadingMessage("Processing subscription...");
      const subscriptionResponse = await subscription({
        email: loginEmail.email,
        priceId,
        methodId,
      }).unwrap();
  
      setSuccessMessage("Subscription successful!");
      setLoadingMessage(null);
      router.push("/basic");
    } catch (err) {
      setErrorMessage("Payment failed. Please try again.");
      setLoadingMessage(null);
      console.error("Payment error:", err);
    }
  };
  

 

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="flex justify-center mb-6">
          <Image
            src={logoPayments}
            alt="Expat Global Girls Logo"
            width={150}
            height={60}
            className="h-auto"
          />
        </div>

        {/* Display messages */}
        {loadingMessage && <div className="text-center text-blue-600">{loadingMessage}</div>}
        {successMessage && <div className="text-center text-green-600">{successMessage}</div>}
        {errorMessage && <div className="text-center text-red-600">{errorMessage}</div>}

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-sm font-medium">Card Information</label>
            <div className="relative">
              <Input
                {...form.register("number")}
                placeholder="4242 4242 4242 4242"
                className="pr-12"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                <VisaCardIcon />
                <CreditCard />
                <BankCardIcon />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input {...form.register("exp_month")} placeholder="MM" />
            <Input {...form.register("exp_year")} placeholder="YY" />
            <Input {...form.register("cvc")} placeholder="CVC" />
          </div>
          <div>
            <label className="text-sm font-medium">Type</label>
            <Select
              onValueChange={(value) => form.setValue("type", value)}
              defaultValue={form.getValues("type")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white rounded-[8px]"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
