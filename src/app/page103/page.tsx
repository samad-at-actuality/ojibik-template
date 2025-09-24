// src/app/page103/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page103: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        <div className="relative w-[8.5in] h-[11in]">

          {/* Background Image Timeline */}
            <Image
              src="/images/page103/asset_p103_1_20250921_201316.png"
              alt="Fabric Design"
              width={1}
              height={1}
              sizes={`${6.6 * 96}px`}
              className="absolute top-[0.4337in] left-0 w-[4.48in] h-[4.326in]"
            />



          {/* 16 weeks Stroke/curve Line */}
          <Image
            src="/images/page103/stroke-line.svg"
            alt="Stroke Line"
            width={4 * 96}
            height={3 * 96}
            className="absolute top-[1.1875in] left-[4.87in] z-10 w-[2.5301in] h-[2.638in]"
          />


          {/* 16 Weeks stacked */}
          <div className="absolute top-[1.6in] left-[4.2292in] w-[3.5in] text-[#4b5746] flex flex-col items-center text-center">
            <span className="font-[Diagramm-Light] text-[136.4pt] leading-[0.6]">16</span>
            <span className="font-[LarkenDEMO-Italic] text-[43.923pt] tracking-[0.01em]">Weeks</span>
          </div>

          <div className="absolute top-[2.25in] left-[3.92in] rotate-[-90deg] text-[#4b5746] font-[LarkenDEMO-Regular] text-[1rem] tracking-[0.03em]">
              Furniture Order and Install
          </div>

          <div className="absolute top-[4.0786in] left-[4.9in] font-[LarkenDEMO-Regular] text-[#4b5746] text-[0.8rem] tracking-[0.03em]">
              From Submission to Final Installation
          </div>


          {/* TimeLine Images */}
          <Image
            src="/images/page103/timeline.svg"
            alt="Circle Design"
            width={1}
            height={1}
            className="absolute left-[-0.10in] top-[6.4408in] w-[6.7499in] h-[2.2483in] z-0 select-none"
          />

          {/* Timeline Block 5 (below timeline) */}
          <div className="absolute top-[8.7in] left-[3.7in] w-[3.5in] text-[#4b5746]">
            <div className="font-[Diagramm-Bold] text-[25pt]">5</div>
            <div className="font-[Diagramm-Bold] text-[18pt] -mt-2">07/25/2025</div>
            <div className="font-[LarkenDEMO-Regular] text-[1.1rem] mt-1">
              Furniture Installation
            </div>
          </div>

          {/* Timeline Block 6 (above timeline) */}
          <div className="absolute top-[4.95in] left-[5.3in] w-[3.5in] text-[#4b5746]">
            <div className="font-[Diagramm-Bold] text-[18pt]">08/08/2025</div>
            <div className="font-[LarkenDEMO-Regular] text-[1.1rem] leading-tight mt-1">
              Furniture Installation <br /> Completion
            </div>
            <div className="font-[Diagramm-Bold] text-[25pt]">6</div>
          </div>

          {/* Timeline Block 7 (below timeline) */}
          <div className="absolute top-[8.7in] left-[6.18in] w-[3.5in] text-[#4b5746]">
            <div className="font-[Diagramm-Bold] text-[25pt]">7</div>
            <div className="font-[Diagramm-Bold] text-[18pt] -mt-2">08/15/2025</div>
            <div className="font-[LarkenDEMO-Regular] text-[1.1rem] leading-tight mt-1">
              Furniture Deficiency <br /> Review Complete
            </div>
          </div>

          {/* Months Labels */}
          <div className="absolute top-[6.75in] left-[-0.1in] rotate-[-90deg] font-[Diagramm-Bold] text-[11pt] text-[#4b5746]">
            2 MONTHS
          </div>
          <div className="absolute top-[8.1in] left-[4.4in] rotate-[-90deg] font-[Diagramm-Bold] text-[11pt] text-[#4b5746]">
            2 WEEKS
          </div>
          <div className="absolute top-[6.9in] left-[5.6in] rotate-[-90deg] font-[Diagramm-Bold] text-[11pt] text-[#4b5746]">
            1 WEEK
          </div>

          {/* Page Number */}
          <div className="absolute top-[10.6181in] left-[0.75in] flex items-center gap-3 font-[Diagramm-Light] text-[0.5rem] text-black">
            <span>103 of 134</span>
          </div>
          <div>
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1}
              height={1}
              className="absolute select-none w-[0.2848in] h-[0.2848in] top-[10.4in] left-[7.9826in]"
            />
          </div>
          
          {/*  Horizontal divider (bottom of page) */}
          <div className="absolute left-[0in] top-[10.43in] h-[0.5px] w-[7.75in] bg-[#4b5846]" />
        </div>
      </LetterPage>
    </div>
  );
};

export default Page103;
