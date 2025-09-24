// src/app/page107/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page107: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        <div className="relative w-[8.5in] h-[11in]">

          {/* Icon + Header */}
          <Image
            src="/icons/headline_icon_3.svg"
            alt="Financial Proposal"
            width={1}
            height={1}
            className="absolute left-[0.2842in] top-[0.338in] w-[0.1815in] h-[0.199in]"
          />
          <Image
            src="/icons/header-vert-line.png"
            alt="vertical line"
            width={1}
            height={1}
            className="absolute left-[0.6071in] top-[0.2951in] w-[0.01in] h-[0.3in] z-10"
          />
          <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap">
            <span className="font-[Diagramm-Bold] text-[15pt] leading-[15pt] text-[#4b5846]">
              Financial Proposal »
            </span>
            <span className="ml-1 font-[LarkenDEMO-Medium] text-[15pt] leading-[15pt] text-[#4b5846]">
              Warranty
            </span>
          </div>

          {/* Main Title */}
          <div className="absolute left-[0.75in] top-[0.675in] text-[#4b5846]">
            <span className="font-[LarkenDEMO-Regular] text-[26.4pt] leading-[31.68pt]">
              Spec
            </span>
          </div>

          {/* Warranty Container Box */}
          <div className="absolute top-[1.3291in] left-[0.75in] w-[7in] h-[9.125in] border border-[#4b5746]" />

          {/* Spec logo */}
          <Image
            src="/icons/spec.png"
            alt="Spec Logo"
            width={1}
            height={1}
            sizes={`${6.6 * 96}px`}
            className="absolute left-[6.45in] top-[1.55in] w-[1.10in] h-[0.2664in] z-10"
          />

          {/* Warranty Content */}
          <div className="absolute top-[1.75in] left-[0.9325in] w-[5.9774in] text-[#000]">
            <div className="font-[Diagramm-Regular] text-[15pt] mb-2">Warranty</div>
              <p className="font-[Diagramm-Regular] text-[10pt] leading-[13pt]">
                We are pleased to provide the initial purchaser with a Lifetime Structural Warranty against defects in design, 
                construction and materials.
              </p>
              <p className="mt-6 font-[Diagramm-Regular] text-[10pt] leading-[13pt]">
                Finishes and cover materials are warranted for two years, subject to normal wear and tear. 
                Electrical and mechanical parts are warranted for two years. 
                Hardi Stacker, and all Hardi Endurance products are warranted for 10 years from the date of purchase.
              </p>
              <p className="mt-6 font-[Diagramm-Regular] text-[10pt] leading-[13pt]">
                Our warranty will not apply where there is evidence of alteration, misuse, negligence or abuse. 
                No warranty shall apply to COM fabrics. During the warranty period, we will repair, or at our option, 
                replace any product where we are satisfied the product is defective. Decisions on warranty rest solely with Spec™. 
                The customer must prepay all freight charges for items being returned for service. 
                If a claim is accepted, we will gladly refund the charges incurred.
              </p>
          </div>


          {/* Website */}
          <div className="absolute left-[6.125in] top-[10.1742in] font-[Diagramm-Regular] text-[10pt] text-[#000]">
            www.specfurniture.com
          </div>

          {/* Page Number */}
          <div className="absolute top-[10.6181in] left-[0.75in] flex items-center gap-3 font-[Diagramm-Light] text-[0.5rem] text-black">
            <span>107 of 134</span>
          </div>
          <div>
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1}
              height={1}
              className="absolute select-none w-[0.2848in] h-[0.2848in] top-[10.5169in] left-[7.9826in]"
            />
          </div>

        </div>
      </LetterPage>
    </div>
  );
};

export default Page107;
