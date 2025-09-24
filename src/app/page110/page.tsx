// src/app/page110/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page110: React.FC = () => {
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
              De Gaspé
            </span>
          </div>

          {/* Warranty Container Box */}
          <div className="absolute top-[1.3291in] left-[0.75in] w-[7in] h-[9.125in] border border-[#4b5746]" />

          {/* Logo */}
          <Image
            src="/icons/degaspe.png"
            alt="De Gaspé Logo"
            width={1}
            height={1}
            sizes={`${6.6 * 96}px`}
            className="absolute left-[6.35in] top-[1.5903in] w-[1.25in] h-[0.25in] z-10"
          />

          {/* Content */}
          <div className="absolute top-[1.75in] left-[0.9325in] w-[5.9774in] text-[#000]">

            {/* Header Title */}
            <div className="font-[Diagramm-Regular] text-[15pt] mb-3">
              Warranty Policy (2025)
            </div>

            <p className="font-[HelveticaNeue] text-[9pt] leading-[12pt] mb-3">
              As all our furniture is designed and manufactured with high quality standards in mind, 
              we offer you a 10-year warranty on all manufacturing defects that may occur over the years.
            </p>

            <p className="font-[HelveticaNeue] text-[9pt] leading-[12pt] mb-3">
              By defects we mean the following situations (but not limited to):
            </p>

            <ul className="list-disc ml-5 font-[HelveticaNeue] text-[9pt] leading-[12pt] mb-3">
              <li>Collage coming apart</li>
              <li>Peeling paint</li>
              <li>Rusting steel</li>
              <li>Drawer or door that opens/closes badly</li>
              <li>Wooden tray that seeks to round off to a significant extent.</li>
            </ul>

            <p className="font-[HelveticaNeue] text-[9pt] leading-[12pt] mb-3">
              Our guarantee also does not cover features that comes from the nature of solid wood, 
              as well as the effects due to the normal use of a piece of furniture. 
              Some cases not covered by our guarantee:
            </p>

            {/* Exclusions list */}
            <ul className="list-disc ml-5 font-[HelveticaNeue] text-[10pt] leading-[13pt] space-y-1">
              <li>Any marks which are part of the character of solid wood and which we cannot remove with standard sanding.  </li>
              <li>Scratches and bumps.</li>
              <li>Knots: less than 3/4” or 2 cm, the equivalent of a 5 cent, always filled with wood filler.</li>
              <li>Micro-cracks: less than 1/16 inch or 1,5 mm wide (about 2 credit cards thickness) and which does not present a risk for the solidity/durability of the furniture. 
                  If a crack is not visible (underneath or inside the furniture) or visible and filled with wood filler, 
                  it is because we have considered that it meets our quality standards. </li>
              <li>Non-visible parts: No aesthetic consideration, 
                only consideration for the durability or solidity of the furniture. 
                For example, we are talking here about the underside or back of furniture, 
                interior of cabinets, for beds : back of headboard or part not visible once the mattress is in place, etc. 
                If you are unsure, feel free to email us photos at robin@degaspe.ca.</li>
              <li>Damage and stains due to liquids.</li>
              <li>Changes in the color or shade.</li>
              <li>Damage due to abusive use.</li>
              <li>Damage due to the use of cleaning products (see maintenance advice).</li>
              <li>Damage due to contact with a heat source (cauldrons, candle, or others).</li>
              <li>Changes due to external factors such as an inadequate temperature or rate of humidity.</li>
              <li>panel. It can take on a pinkish tint with Birch and rather pale with Oak and Walnut which can clash with the rest. 
                  We consider the following percentages of sapwood on a tray to be acceptable: Birch/Oak: 20%and Walnut: 30%.</li>
              <li>Panel with boards that do not have the same aspect: 
                  we make our maximum to make our platforms the most uniform as far as possible, but we cannot guarantee this.</li>
            </ul>

            <p className="mt-4 font-[HelveticaNeue] text-[10pt] leading-[13pt]">
              This list gives an idea of what is not covered, but is not exhaustive. 
              We process warranty requests on a case-by-case basis and we keep the right to refuse 
              a case that is not mentioned in this list.
            </p>
          </div>

          {/* Footer Contact */}
          <div className="absolute left-[5.41in] top-[10.1512in] w-[5.7in] font-[HelveticaNeue] text-[10pt] text-[#000]">
            info@degaspe.ca | +1 (514) 383-4538
          </div>

          {/* Page Number */}
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1} height={1}
              className="select-none w-[0.2848in] h-[0.2848in] absolute left-[0.2326in] top-[10.5169in]"
            />
            <span className=" absolute left-[0.75in] top-[10.5917in] text-[0.5rem] text-[#000] ">110 of 134</span>

        </div>
      </LetterPage>
    </div>
  );
};

export default Page110;
