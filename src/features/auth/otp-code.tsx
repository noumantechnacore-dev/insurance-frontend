'use client'
import { AlertCircle, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

export const OtpCode = () => {
   const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState({ type: '', text: '' });
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Clear messages when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      setMessage({
        type: 'error',
        text: 'Please enter complete OTP code'
      });
      return;
    }
    
    // Simulate verification
    if (otpString === '123456') {
      setMessage({
        type: 'success',
        text: 'Successfully Enter Right OTP Code'
      });
      router.push('./submitForm')
    } else {
      setMessage({
        type: 'error',
        text: 'This Wrong Code. Please Enter Right OTP Code'
      });
    }
  };

  const handleVerifyPhone = () => {
    // Reset form
    setOtp(['', '', '', '', '', '']);
    setMessage({ type: '', text: '' });
    inputRefs.current[0]?.focus();
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
  <div className="flex items-center bg-white justify-center min-h-[calc(100vh-80px)] p-6">
        <div className="bg-[#F5F5F573] rounded-2xl border border-[#9C9C9CC9] p-8 w-full max-w-md">
          {/* Title */}
          <h1 className="text-2xl font-poppins font-[600] text-gray-800 text-center mb-8 text-[40px] ">
            Enter Your <span className="text-cyan-500">OTP</span>
          </h1>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-[#1C1C1C9C] text-xl font-semibold bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:bg-white focus:outline-none transition-all duration-200"
                placeholder="0"
              />
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-200 mb-4"
          >
            Continue
          </button>

          {/* Success/Error Messages */}
          {message.text && (
            <div className={`flex items-center justify-center gap-2 text-sm font-medium ${
              message.type === 'success' ? 'text-green-600' : 'text-red-500'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span>{message.text}</span>
            </div>
          )}
        </div>
      </div>
  );
};
