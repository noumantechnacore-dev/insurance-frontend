"use client";

import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RootState } from "../Redux/store";
import { useState } from "react";
import { ThankForPolicy } from "./ThanksForPolicy";

export default function SubmitForm() {
  const insuranceData = useSelector((state: RootState) => state.insurance);
   const [showPopup, setShowPopup] = useState(false); 
   const handleSubmit=()=>{
    setShowPopup(true)
   }
 
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-[#F5F5F573] border border-[#9C9C9CC9] rounded-lg my-[60px] sm:my-[80px]">
      <ThankForPolicy isOpen={showPopup} onClose={() => setShowPopup(false)}/>
      <h1 className="text-2xl sm:text-3xl md:text-[42px] font-bold text-center text-gray-900 mb-4">
        Fill The <span className="text-teal-600">Insurance</span> Request Form
      </h1>

      <form className="space-y-6">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">
              First Name
            </Label>
            <Input
              placeholder="James"
              className="mt-1"
              defaultValue={insuranceData?.firstName || ""}
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">
              Last Name
            </Label>
            <Input
              placeholder="John"
              className="mt-1"
              defaultValue={insuranceData?.lastName || ""}
            />
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">
              Phone Number
            </Label>
            <Input
              placeholder="+1 232 4567 8901"
              className="mt-1"
              defaultValue={insuranceData?.phoneNumber || ""}
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">Email</Label>
            <Input
              placeholder="james123@gmail.com"
              className="mt-1"
              defaultValue={insuranceData?.email || ""}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <Label className="text-sm font-medium text-[#1C1C1CF2]">
            Residence Address
          </Label>
          <Input
            placeholder="City, Country, Code-23423"
            className="mt-1"
            defaultValue={insuranceData?.residenceAddress || ""}
          />
        </div>

        {/* City & Zip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">City</Label>
            <Input
              placeholder="Toronto"
              className="mt-1"
              defaultValue={insuranceData?.city || ""}
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">
              Area Zip Code
            </Label>
            <Input
              placeholder="12345"
              className="mt-1"
              defaultValue={insuranceData?.areaZipCode || ""}
            />
          </div>
        </div>

        {/* State & Age */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">State</Label>
            <Input
              placeholder="Canada"
              className="mt-1"
              defaultValue={insuranceData?.state || ""}
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-[#1C1C1CF2]">Age</Label>
            <Input
              placeholder="39"
              className="mt-1"
              defaultValue={insuranceData?.age?.toString() || ""}
            />
          </div>
        </div>

        {/* Policy Selection */}
        <div>
          <Label className="text-sm font-medium text-[#1C1C1CF2]">
            Select Your Policy:
          </Label>
          <div className="flex flex-wrap justify-between sm:gap-6 mt-3">
            <label className="flex items-center gap-2 text-[#1C1C1CC9] border rounded-md px-4 py-3 cursor-pointer w-[200px] justify-center">
              <input
                type="radio"
                name="policy"
                className="bg-[#008EB1] cursor-pointer"
                defaultChecked
              />
              Finance Insurance
            </label>
            <label className="flex items-center gap-2 text-[#1C1C1CC9] border rounded-md px-4 py-3 cursor-pointer w-[200px] justify-center">
              <input
                type="radio"
                name="policy"
                className="bg-[#008EB1] cursor-pointer"
              />
              Health Insurance
            </label>
            <label className="flex items-center gap-2 text-[#1C1C1CC9] border rounded-md px-4 py-3 cursor-pointer w-[200px] justify-center">
              <input
                type="radio"
                name="policy"
                className="bg-[#008EB1] cursor-pointer"
              />
              Business Insurance
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-4">
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-[#03A765] hover:bg-[#039257] text-white px-8 py-3 rounded-md text-lg font-medium w-full sm:w-auto"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
