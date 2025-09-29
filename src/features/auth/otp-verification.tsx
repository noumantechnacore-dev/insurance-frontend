"use client";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

export default function OtpVerification() {
  const insuranceData = useSelector((state: RootState) => state.insurance);

  const [phoneNumber, setPhoneNumber] = useState(insuranceData?.phoneNumber || "");
  const route = useRouter();
  
  const handleContinue = () => {
    console.log("Verifying phone number:", phoneNumber);
    route.push("./OtpCode");
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-88px)] px-4 py-12 bg-white">
      <Card className="w-full max-w-md h-[300px] border-0 bg-[#F5F5F573]">
        <CardHeader className="text-center space-y-4 pb-6">
          <CardTitle className="text-2xl font-semibold text-[#1C1C1C]">
            Enter Your Number For{" "}
            <span className="text-[#008EB1]">Verification</span>
          </CardTitle>
          <CardDescription className="text-[#1C1C1C] text-base">
            After Verification Generate OTP
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="tel"
                value={phoneNumber}      
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg
                           focus:outline-none focus:ring-0 focus:border-gray-200
                           transition-all duration-200"
                placeholder="+1 232 4567 8901"
              />
            </div>

            <Button
              onClick={handleContinue}
              className="w-full bg-[#03A765] hover:bg-emerald-600 text-white py-3 rounded-lg
                         font-medium text-base transition-colors duration-200
                         disabled:opacity-50 cursor-allowed"
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
