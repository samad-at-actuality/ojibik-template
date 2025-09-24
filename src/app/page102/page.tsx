"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page102: React.FC = () => {
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
              Timeline
            </span>
          </div>

          {/* Backdrop */}
          <div className="absolute left-[0.75in] top-[0.787in] h-[9.625in] w-[2.6903in] z-0">
            <Image
              src="/images/page102/asset_p102_1_20250915_111447.png"
              alt="back drop"
              fill
              className="object-contain"
              sizes={`${6.6 * 96}px`}
              priority
            />
          </div>

          {/* Lead Times and Bar */}
          <div className="absolute left-[3.779in] top-[1.2292in] flex flex-col items-start">
            <div className="font-[Diagramm-Bold] text-[18pt] text-[#4b5846]">
              LEAD TIMES
            </div>
            <Image
              src="/images/page102/bar_design.svg"
              alt="bar design"
              width={1}
              height={1}
              className="w-[4.0089in] h-[1.8in]"
            />
          </div>

          {/* Arrow Sign */}
          <div className="absolute left-[3.712in] top-[3.5663in] w-[4.3242in] h-[0.3824in] z-10">
            <Image
              src="/images/page102/asset_p102_1_20250915_111514.png"
              alt="Arrow"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Bars Design Text */}
          <div className="absolute left-[3.85in] top-[1.67in] w-[4.3in] h-[2.7in] pointer-events-none z-20">
            <div className="absolute top-[0in] left-[0.03in] w-[3.5in] font-[LarkenDEMO-Regular] text-[10pt] font-extralight tracking-[0.01em] text-white">
              Order Process:
              <span className="absolute left-[1.37in] font-[Diagramm-Bold] font-normal text-[#4b5746]">
                10 DAYS
              </span>
            </div>
            <div className="absolute top-[0.37in] left-[0.03in] w-[3.5in] font-[LarkenDEMO-Regular] text-[10pt] font-extralight tracking-[0.01em] text-white">
              Installment Start:
              <span className="absolute left-[1.37in] font-[Diagramm-Bold] font-normal text-white">
                13TH WEEK
              </span>
            </div>
            <div className="absolute top-[0.74in] left-[0.03in] w-[3.5in] font-[LarkenDEMO-Regular] text-[10pt] font-extralight tracking-[0.01em] text-white">
              Installment Process:
              <span className="absolute left-[1.37in] font-[Diagramm-Bold] font-normal text-white">
                14TH WEEK
              </span>
            </div>
            <div className="absolute top-[1.11in] left-[0.03in] w-[3.5in] font-[LarkenDEMO-Regular] text-[10pt] font-extralight tracking-[0.01em] text-white">
              Furniture Completion:
              <span className="absolute left-[1.37in] font-[Diagramm-Bold] font-normal text-white">
                15TH WEEK
              </span>
            </div>
            <div className="absolute top-[1.48in] left-[0.03in] w-[3.5in] font-[LarkenDEMO-Regular] text-[10pt] font-extralight tracking-[0.01em] text-white">
              Deficiency Review:
              <span className="absolute left-[1.37in] font-[Diagramm-Bold] font-normal text-white">
                16TH WEEK
              </span>
            </div>
          </div>

          {/* Overlay for Bar Design Dates */}
          

            {/* Block 1 (below timeline) */}
            <div className="absolute top-[8.9in] left-[2.13in] w-[2.5in] font-[Diagramm-Bold] text-[#4b5746] font-extrabold tracking-[0.01em]">
              <div className="text-[25pt] text-left w-[0.5in]">1</div>
              <div className=" text-[18pt] font-[Diagramm-Medium]">
                04/29/2025
                <div className="font-[LarkenDEMO-Light] text-[1rem] font-normal text-[#4b5746] leading-tight ">
                  RFP Submitted to <br/> CBRE
                </div>
              </div>
            </div>


            <div className="absolute top-[5.3in] left-[2.93in] w-[2.5in] font-[Diagramm-Bold]  text-[#4b5746] font-extrabold tracking-[0.01em]">
              <div className=" text-[18pt] font-[Diagramm-Medium]">
                05/06/2025
                <div className="font-[LarkenDEMO-Light] text-[1rem] font-normal text-[#4b5746] leading-tight">
                Notice of Award
                </div>
              </div>
              <div className="text-[25pt] text-left w-[0.5in]">2</div>
            </div>

            {/* Block 3 (below timeline) */}
            <div className="absolute top-[8.9in] left-[4.1in] w-[2.5in] font-[Diagramm-Bold]  text-[#4b5746] font-extrabold tracking-[0.01em]">
              <div className="text-[25pt] text-left w-[0.5in]">3</div>
              <div className=" text-[18pt] font-[Diagramm-Medium]">
                05/16/2025
                <div className="font-[LarkenDEMO-Light] text-[1rem] font-normal text-[#4b5746] leading-tight">
                  Furniture Specification Coordination Finalized
                </div>
              </div>
            </div>

            {/* Block 4 (above timeline) */}
            <div className="absolute top-[5.1in] left-[5.25in] w-[2.5in] font-[Diagramm-Bold]  text-[#4b5746] font-extrabold tracking-[0.01em]">
              <div className=" text-[18pt] font-[Diagramm-Medium]">
                05/26/2025
                <div className="font-[LarkenDEMO-Light] text-[1rem] font-normal text-[#4b5746] leading-tight">
                Purchase Order Needed <br /> From Client
                </div>
              </div>
              <div className="text-[25pt] text-left w-[0.5in]">4</div>
            </div>


          {/* 10 days */}
          <div className="absolute rotate-[-90deg] top-[6.7in] left-[3.05in] w-[3.5in] font-[Diagramm-Bold]  text-[#4b5746] text-[11pt] font-extralight tracking-[0.01em] z-1">
              10 DAYS
          </div>

          {/* Circle Design */}
          <Image
            src="/images/page102/graphic.svg"
            alt="Circle Design"
            width={1}
            height={1}
            className="absolute left-[1.83in] top-[6.4408in] w-[6.7499in] h-[2.2483in] z-0 select-none"
          />

            {/* Rotated Project / Timeline */}
          <div className="absolute left-[-0.3in] top-[1.88in] flex items-center justify-center ">
            <div className="rotate-[-90deg] flex flex-col items-center font-[Diagramm-Light] text-[82pt] text-[#4b5746] leading-[82pt] ">
              <span>Project</span>
              <span>Timeline</span>
            </div>
          </div>


          {/* Footer */}
          <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1} height={1}
              className="select-none w-[0.2848in] h-[0.2848in]"
            />
            <span>102 of 134</span>
          </div>


          {/*  Horizontal divider (bottom of page) */}
          <div className="absolute left-[0.75in] top-[10.43in] h-[0.5px] w-[7.75in] bg-[#4b5846]" />
        </div>
      </LetterPage>
    </div>
  );
};

export default Page102;
