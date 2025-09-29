"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { cn } from "@/utils";
import { ThankYouPopup } from "@/features";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { setInsuranceData } from "../Redux/insuranceSlice";

const insuranceFormSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  residenceAddress: yup
    .string()
    .required("Residence address is required")
    .min(10, "Please provide a complete address"),
  city: yup
    .string()
    .required("City is required"),
  areaZipCode: yup
    .string()
    .required("Area/Zip code is required")
    .matches(/^[0-9]{5,10}$/, "Please enter a valid zip code"),
  state: yup
    .string()
    .required("State is required"),
  age: yup
    .number()
    .required("Age is required")
    .min(18, "You must be at least 18 years old")
    .max(100, "Please enter a valid age"),
  policyType: yup
    .string(),
    // .required("Please select a policy type"),
  termsAccepted: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

type InsuranceFormData = yup.InferType<typeof insuranceFormSchema>;


export default function InsuranceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<InsuranceFormData>({
    resolver: yupResolver(insuranceFormSchema),
    defaultValues: {
      termsAccepted: false,
    },
  });

  const watchedTermsAccepted = watch("termsAccepted");
  const dispatch = useDispatch<AppDispatch>();

 const onSubmit = async (data: InsuranceFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1500)); 
      console.log("Form Data:", data);
      reset();
      dispatch(setInsuranceData(data));
      toast.success("Insurance request submitted successfully!");
      setShowPopup(true); 
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    toast.info("Form has been reset");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-[#F5F5F573] border border-[#9C9C9CC9] rounded-lg  my-[80px]">
       <ThankYouPopup
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)}
        />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[42px] text-gray-900 mb-2">
          Fill The <span className="text-teal-600">Insurance</span> Request Form
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium text-[#1C1C1CF2]">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="First Name"
              {...register("firstName")}
              className={cn(
                "transition-all duration-200 ",
                errors.firstName && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium text-[#1C1C1CF2]">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              {...register("lastName")}
              className={cn(
                "transition-all duration-200",
                errors.lastName && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-sm font-medium text-[#1C1C1CF2]">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter Your Number"
              {...register("phoneNumber")}
              className={cn(
                "transition-all duration-200",
                errors.phoneNumber && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#1C1C1CF2]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className={cn(
                "transition-all duration-200",
                errors.email && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Address Field */}
        <div className="space-y-2">
          <Label htmlFor="residenceAddress" className="text-sm font-medium text-[#1C1C1CF2]">
            Residence Address
          </Label>
          <Textarea
            id="residenceAddress"
            placeholder="Your Location"
            rows={3}
            {...register("residenceAddress")}
            className={cn(
              "transition-all duration-200 resize-none",
              errors.residenceAddress && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.residenceAddress && (
            <p className="text-sm text-red-600">{errors.residenceAddress.message}</p>
          )}
        </div>

        {/* Location Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium text-[#1C1C1CF2]">
              City
            </Label>
            <Input
              id="city"
              placeholder="City"
              {...register("city")}
              className={cn(
                "transition-all duration-200",
                errors.city && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.city && (
              <p className="text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="areaZipCode" className="text-sm font-medium text-[#1C1C1CF2]">
              Area Zip Code
            </Label>
            <Input
              id="areaZipCode"
              placeholder="Code"
              {...register("areaZipCode")}
              className={cn(
                "transition-all duration-200",
                errors.areaZipCode && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.areaZipCode && (
              <p className="text-sm text-red-600">{errors.areaZipCode.message}</p>
            )}
          </div>
        </div>

        {/* State and Age Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="state" className="text-sm font-medium text-[#1C1C1CF2]">
              State
            </Label>
            <Input
              id="state"
              placeholder="State"
              {...register("state")}
              className={cn(
                "transition-all duration-200",
                errors.state && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.state && (
              <p className="text-sm text-red-600">{errors.state.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium text-[#1C1C1CF2]">
              Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter Your Age"
              {...register("age", { valueAsNumber: true })}
              className={cn(
                "transition-all duration-200",
                errors.age && "border-red-500 focus:border-red-500"
              )}
            />
            {errors.age && (
              <p className="text-sm text-red-600">{errors.age.message}</p>
            )}
          </div>
        </div>
        {/* Terms and Conditions */}
        <div className="space-y-4">
          {
            showPopup ? (
                <p className="text-sm text-gray-700 leading-relaxed font-poppins">
      <span className="font-poppins text-[16px] font-[700] text-[#1C1C1C]">
        Thank You To Submitting Form. Please Verify Your Phone Number For Further Procedure
      </span>
    </p>
            ) : (<div className="flex items-start space-x-3">
            <Checkbox
              id="termsAccepted"
              checked={watchedTermsAccepted}
              onCheckedChange={(checked) => setValue("termsAccepted", !!checked)}
              className={cn(
                "mt-1",
                errors.termsAccepted && "border-red-500"
              )}
            />
            <div className="space-y-1">
              <Label
                htmlFor="termsAccepted"
                className="text-sm text-gray-700 leading-relaxed cursor-pointer font-poppins"
              >
                By Clicking Continue, You Agree To Our{" "}
                <span className="text-[#1C1C1C] font-[600] font-poppins ">
                  Terms & Conditions
                </span>{" "}
                with{" "}
                <span className="text-[#1C1C1C] font-[600] font-poppins">
                  Privacy Policy
                </span>
              </Label>
              {errors.termsAccepted && (
                <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>
              )}
            </div>
          </div>)
          }
          
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
  type="button"
  variant="outline"
  onClick={handleReset}
  disabled={isSubmitting}
  className="bg-[#008EB1] w-[222px] cursor-pointer text-white border-teal-500 
             hover:border-teal-600 transition-all duration-200 py-4 px-2"
>
  Reset
</Button>

<Button
  type="submit"
  disabled={isSubmitting}
  className="bg-[#03A765] w-[222px] cursor-pointer text-white 
             transition-all duration-200 py-4 px-2"
>
  {isSubmitting ? "Submitting..." : "Submit"}
</Button>

        </div>
      </form>
    </div>
  );
}