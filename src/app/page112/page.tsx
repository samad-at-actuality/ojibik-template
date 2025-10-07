// src/app/page112/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page112: React.FC = () => {
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
              Letters of Recommendation
            </span>
          </div>

          {/* Main Title */}
          <div className="absolute left-[0.75in] top-[0.675in] text-[#4b5846]">
            <span className="font-[LarkenDEMO-Regular] text-[26.4pt] leading-[31.68pt]">
                Financial Letter of Good Standing
            </span>
          </div>


        {/* Financial letter  */}
        <div className="absolute left-[0.75in] top-[1.3125in] w-[7in] h-[9.125in] z-0">
            <Image
              src="/images/page112/asset_p112_1_20250922_112617.png"
              alt="table"
              fill
              className="object-contain"
              sizes={`${6.6 * 96}px`}
              priority
            />
        </div>

                  {/* Footer */}
        <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1} height={1}
              className="select-none w-[0.2848in] h-[0.2848in]"
            />
            <span>112 of 134</span>
        </div>
        </div>
      </LetterPage>
    </div>
  );
};

export default Page112;
