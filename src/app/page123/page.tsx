"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";


const Page123: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        <div className="relative w-[8.5in] h-[11in] ">

        {/* green Background */}
        <div className="absolute left-[0in] top-[0in] z-0">
            <Image
              src="/images/page123/asset_p123_1_20250922_124814.png"
              alt="green backdrop"
              width={1} height={1}
              className="  w-[8.5in] h-[11in]"
              sizes={`${6.6 * 96}px`}
              priority
            />
        </div>

        {/* blue background */}
        <div className="absolute left-[6.1608in] top-[0in] z-1">
            <Image
              src="/images/page123/asset_p123_1_20250922_124805.png"
              alt="blue backdrop"
              width={1} height={1}
              className=" w-[2.3392in] h-[11in]"
              sizes={`${6.6 * 96}px`}
              priority
            />
        </div>




        {/* logo/icon */}
        <div className="absolute left-[7.8628in] top-[0.2102in] z-1">
            <Image
              src="/images/page123/icon.png"
              alt="icon"
              width={1} height={1}
              className=" w-[0.5244in] h-[0.5244in]"
              sizes={`${6.6 * 96}px`}
              priority
            />

        </div>
                 
         {/* horizontal divider for logo */}
        <div className="absolute left-[7.9826in] top-[0.8599in] h-[1px] w-[0.2848in] bg-white z-1" />


        {/* Number */}
        <div className="absolute font-[Diagramm-Medium] text-[57.022pt] text-white left-[7.89in] top-[0.8711in] z-2">
            <span>5</span>
        </div>

        <div className=" absolute rotate-[-90deg] font-[Diagramm-Regular] w-[3.5in] text-[12pt] text-white left-[6.34in] top-[2.4in] z-1 origin-center">
        <span>Environment and Sustainability</span>
        </div>

          {/* Page Number */}
          <div className="absolute top-[10.6181in] left-[0.75in] flex items-center gap-3 font-[Diagramm-Light] text-[0.5rem] text-black">
            <span>123 of 134</span>
          </div>
          <div>
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1}
              height={1}
              className="absolute select-none w-[0.2848in] h-[0.2848in] top-[10.5169in] left-[7.9826in] z-1"
            />
          </div>
      </div>

      </LetterPage>
    </div>
  );
};

export default Page123;
