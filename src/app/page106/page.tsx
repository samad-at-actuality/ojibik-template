"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page106: React.FC = () => {
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
            <div className="absolute left-[0.75in] top-[0.675in]  text-[#4b5846]">
              <div className="flex items-baseline flex-nowrap">
                <span className="mr-2 whitespace-nowrap font-[LarkenDEMO-Regular] text-[26.4pt] leading-[31.68pt]">
                  Teknion
                </span>
              </div>
            </div>

          {/* Warranty Container Box */}
          <div className="absolute top-[1.3291in] left-[0.75in] w-[7in] h-[9.125in] border border-[#4b5746]" />

          <Image
            src="/icons/teknion.png"
            alt="vertical line"
            width={1}
            height={1}
            sizes={`${6.6 * 96}px`}
            className="absolute left-[6.4032in] top-[1.5671in] w-[1.118in] h-[0.2409in] z-10"
          />

            {/* Header Title */}
            <div className="absolute top-[1.875in] left-[0.9325in] w-[6.635in] gap-4 text-[#4b5846]">
              <span className="font-[Diagramm-Regular] text-[15pt]">
                Limited Lifetime Warranty
              </span>
              
              {/* Warranty Paragraph */}
              <p className="absolute  w-[6.0883in] font-[HelveticaNeue] text-[7pt] leading-[7pt] text-[#000]">
                The Teknion Limited Lifetime Warranty is our commitment to the quality and
                craftsmanship of all of our products. Teknion will, at no cost to the
                original purchaser and for as long as the original purchaser owns a Teknion
                product, repair or replace with a comparable product, at Teknion’s option,
                any part or product sold after December 31, 2021, which fails as a result of
                a defect in its design, materials or workmanship. For all purposes of this
                warranty the term “purchaser” is defined as the entity or individual acquiring
                a new Teknion product as the initial purchaser thereof either from Teknion
                or an authorized Teknion Dealer.
              </p>

            </div>

            {/* Warranty Table Section */}
            <div className="absolute top-[2.9671in] left-[0.9325in] w-[6.633in] h-[4.8in] text-[7pt] text-[#000] border-t-1 font-[LarkenDEMO-Regular] leading-[12pt]">

              {/* Outer border */}
             

                {/* Row 1: Systems, Desks, Storage, Screens */}
                <div className="flex mt-1 mb-1 border-b-1">
                  <div className="w-[1in] font-[Diagramm-Bold] leading-[8pt]">
                    Systems, Desks,<br/>Storage, Screens
                  </div>
                  <div className="w-[0.5] ">
                    <div>10 years</div>
                    <div>5 years</div>
                    <div>3 years</div>
                  </div>
                  <div className="flex-1 ">
                    <ul className="list-none ml-4 leading-[10pt]">
                      <li>- Height-adjustable tables with the exception of HiSpace tables</li>
                      <li>- Glass including Tempered, Laminated and Back-painted Glass</li>
                      <li>- All products with fabric</li>
                      <li>- HiSpace Height-adjustable tables</li>
                      <li>- Moving parts, which include glides, slides, casters, and bases</li>
                      <li>- Glass marker boards</li>
                      <li>- PET or Laminate Whiteboards</li>
                    </ul>
                  </div>
                </div>

                {/* Row 2: Wood Casegoods */}
                <div className="flex mt-1 border-b-1">
                  <div className="w-[1in]  font-[Diagramm-Bold] leading-[8pt]">
                    Wood Casegoods,<br/>Casework
                  </div>
                  <div className="w-[0.5] ">
                    <div>10 years</div>
                    <div>5 years</div>
                    <div>1 year</div>
                  </div>
                  <div className="flex-1 ">
                    <ul className="list-none ml-4 leading-[10pt]">
                      <li>- Standard Wood Casegoods and Wood Tables</li>
                      <li>- Modified Standard Wood Casegoods products</li>
                      <li>- Custom Wood Casegoods products</li>
                      <li>- Moving parts, which include glides, slides, casters, user-adjustable work surface mechanisms, and bases</li>
                      <li>- Standard Solid Surface materials</li>
                      <li>- Integrated third party electrical products</li>
                    </ul>
                  </div>
                </div>

                {/* Row 3: Seating */}
                <div className="flex border-b-1 mt-1">
                  <div className="w-[1in]  font-[Diagramm-Bold] leading-[8pt]">
                    Seating
                  </div>
                  <div className="w-[0.5] ">
                    <div>10 years</div>
                    <div>5 years</div>
                  </div>
                  <div className="flex-1 ">
                    <ul className="list-none ml-4 leading-[10pt]">
                      <li>- All seating products, unless otherwise stated</li>
                      <li>- Lounge / Soft Seating products</li>
                      <li>- Fabric</li>
                      <li>- Vinyl</li>
                    </ul>
                  </div>
                </div>

                {/* Row 4: Lighting, Electrical, Ergonomic Accessories */}
                <div className="flex border-b-1 mt-1">
                  <div className="w-[1in]  font-[Diagramm-Bold] leading-[8pt]">
                    Lighting, Electrical<br/>and Ergonomic<br/>Accessories
                  </div>
                  <div className="w-[0.5] ">
                    <div>10 years</div>
                    <div>5 years</div>
                    <div>3 years</div>
                    <div>1 year</div>
                  </div>
                  <div className="flex-1 ">
                    <ul className="list-none ml-4 leading-[10pt]">
                      <li>- Electrical components, excluding power bars with USB receptacles</li>
                      <li>- Monitor arms</li>
                      <li>- Lighting products, excluding TU020 light</li>
                      <li>- Uninterrupted electrical and battery components</li>
                      <li>- Power bars with USB receptacles</li>
                      <li>- TU020 light</li>
                    </ul>
                  </div>
                </div>

                {/* Row 5: Other */}
                <div className="flex mt-1 border-b-1">
                  <div className="w-[1in]  font-[Diagramm-Bold] leading-[8pt] mb-4">
                    Other
                  </div>
                  <div className="w-[0.5] ">
                    <div>5 years</div>
                    <div>2 years</div>
                  </div>
                  <div className="flex-1 ">
                    <ul className="list-none ml-4 leading-[8pt] ">
                      <li>- Complements products (excluding Navigate, QuickShift, Complements and HiSpace Height-Adjustable tables and task lights)</li>
                      <li>- Teknion Bene Box’s fabric seating pads</li>
                      <li>- Teknion Bene Box products (excluding fabric seating pads)</li>
                    </ul>
                  </div>
                </div>

              
            </div>


          {/* Warranty Exclusions Section */}
          <div className="absolute top-[7.0176in] left-[0.9575in] w-[6.4604in] text-[7pt] text-[#000] font-[Diagramm-Regular] leading-[11pt] pt-2">

            {/* Title */}
            <div className="font-[Diagramm-Regular] text-[11pt] mb-2">
              This Warranty Does Not Include:
            </div>

            {/* Two-column grid */}
            <div className="grid grid-cols-2 gap-x-6">

              {/* Left column */}
              <ul className="list-disc leading-[9pt] ml-4">
                <li> Customer’s Own Material or finishes applied to Teknion products (which include graded-in fabrics, 
                      which are treated by Teknion as a Customer’s Own Material);
                </li>
                <li> Natural Wood Veneer which is a natural material and will have shade differences between veneer sheets,
                      which will be more apparent between differing lots and fading on wood veneers that can be caused by exposure to U.V. rays/sunlight;                </li>
                <li> Wood color, grain, and stain acceptance which may occur due to natural elements</li>
                <li> Marble, Stone, Quartz and Non-Standard Solid Surface which are natural products. 
                      The nature of these natural materials make them more vulnerable to damage and chipping;  </li>
                <li> Horizontal glass surfaces with bowing and dimensional variation within tolerances cited in the ASTM C1048 Standard Specification;</li>
                <li> Ballast and light bulbs</li>
              </ul>

              {/* Right column */}
              <ul className="list-disc leading-[9pt] w-[2.8927in]">
                <li> Digital locks are not manufactured by Teknion and therefore are not covered by the Teknion Warranty. 
                     Refer to the original manufacturer’s warranty for the digital lock products;</li>
                <li> Products which have been modified or which have not been installed or used 
                     according to Teknion’s application and installation guidelines or warnings; </li>
                <li>Products that have been damaged due to storage in unsuitable environments or exposure to extreme environmental conditions;</li>
                <li> Products that must be replaced due to normal wear and tear, negligence, abuse, accident or shipping damage;
                     Products used for rental purposes;</li>
                <li> Products that have been damaged due to use and/or storage in irregular or extreme environmental conditions. 
                     A typical office environment is limited to 65% relative humidity or less, with temperatures between 64 ̊F (18 ̊C) to 76 ̊F (24 ̊C); </li>
                <li> This Teknion Limited Lifetime Warranty excludes residential applications</li>
              </ul>
            </div>
          </div>

             {/*  Disclaimer text */}
            <div className="absolute top-[9.5758in] left-[0.9325in] w-[6.635in] font-[Diagramm-Regular] text-[7pt] leading-[9pt] text-[#000] mt-4">
              In no event shall Teknion be liable in either tort or contract for any loss
              or indirect, special, incidental, consequential or exemplary damages. 
              <p className="mt-2">This warranty is the Customer’s sole remedy for product defects. Teknion makes
              no warranties, including express or implied warranties of merchantability and
              fitness for a particular purpose, other than those contained herein.
              </p>
            </div>

            {/* Footer */}
          <div className="absolute left-[0.2326in] top-[10.5169in] flex items-center gap-[1rem] text-black text-[0.5rem] w-[3.5in]">
            <Image
              src="/icons/footer.svg"
              alt="Page Number"
              width={1} height={1}
              className="select-none w-[0.2848in] h-[0.2848in]"
            />
            <span>106 of 134</span>
          </div>
         
        </div>
      </LetterPage>
    </div>
  );
};

export default Page106;
