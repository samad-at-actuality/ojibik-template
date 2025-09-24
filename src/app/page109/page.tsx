// src/app/page109/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page109: React.FC = () => {
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
              Groupe Lacasse
            </span>
          </div>

          {/* Warranty Container Box */}
          <div className="absolute top-[1.3291in] left-[0.75in] w-[7in] h-[9.125in] border border-[#4b5746]" />

          {/* Groupe Lacasse Logo */}
          <Image
            src="/icons/groupelacasse.png"
            alt="Groupe Lacasse Logo"
            width={1}
            height={1}
            sizes={`${6.6 * 96}px`}
            className="absolute left-[6.59in] top-[1.489in] w-[0.9111in] h-[0.3971in] z-10"
          />

          {/* Warranty Content */}
          <div className="absolute top-[1.875in] left-[0.925in] w-[5.9774in] text-[#000]">
            <div className="font-[Diagramm-Regular] text-[15pt] ">
              Limited Lifetime Warranty
            </div>
            <div className="font-[Diagramm-Light] text-[8pt] mb-3 ">
              Lacasse products manufactured after September 6<sup>th</sup>, 2012.
            </div>

            <p className="font-[Diagramm-Regular] text-[9pt] leading-[12pt] mb-3">
              Groupe Lacasse Inc. warrants its products, from the date of invoice, to be free from defects
              in material and workmanship for as long as the original purchaser owns it; proof of purchase
              from Groupe Lacasse Inc. being the only official document accepted by Groupe Lacasse Inc. for
              any claim.
            </p>
            <p className="font-[Diagramm-Regular] text-[9pt] leading-[12pt] mb-3">
              Labor, delivery charges and service not covered under warranty. This warranty is subject to
              the limitations*, exclusions and other provisions below:
            </p>

            {/* Warranty Periods */}
            <div className="text-[10pt] mb-3 leading-[13pt] ml-4 w-[5.7396in]">
              {/* Row */}
              <div className="flex">
                <div className="w-[1.2in]">Twenty-Five Years</div>
                <div className="flex-1  ml-4">High-performance thermofused laminate.</div>
              </div>

              <div className="flex">
                <div className="w-[1.2in]">Twenty Years</div>
                <div className="flex-1  ml-4">Drawer slides.</div>
              </div>

              <div className="flex">
                <div className="w-[1.2in]">Ten Years</div>
                <div className="flex-1  ml-4">Standard key locks and electrical systems.</div>
              </div>

              <div className="flex">
                <div className="w-[1.2in]">Five Years</div>
                <div className="flex-1  ml-4">
                  High-pressure laminate, electric height-adjustable mechanisms for work surfaces,
                  casters, fabrics, PVC extrusions, legs and wood components, and other accessories.
                </div>
              </div>

              <div className="flex">
                <div className="w-[1.2in]">One Year</div>
                <div className="flex-1  ml-4">
                  Electronic locks, electrical modules and related components/accessories.
                </div>
              </div>

              <div className="flex">
                <div className="w-[1.2in]">Exclusions</div>
                <div className="flex-1  ml-4">
                  C.O.M./C.O.V. upholstery, light bulbs and ballasts are not covered by this warranty.
                </div>
              </div>
            </div>

    

            {/* Notes */}
            <p className="font-[HelveticaNeue] text-[10pt] leading-[13pt] mb-6">
              *The applicable warranty period assumes that the product is used an average of not more than
              40 hours per week. If a product is used more than this, the applicable warranty period shall
              be reduced in proportion to the increased usage. For example, if casters are used an average
              of 50 hours per week, the applicable warranty period for the casters shall be reduced to
              eight years.
            </p>

            {/* Legal text */}
            <p className="font-[HelveticaNeue] text-[10pt] leading-[13pt] mb-6">
              This warranty is made by Groupe Lacasse Inc. only to purchasers acquiring the product directly
              from Groupe Lacasse Inc., its authorized dealers, or others who are specifically authorized by
              Groupe Lacasse Inc. to sell such products. The purchaser’s remedy is limited to repair or
              replacement, at Groupe Lacasse Inc’s option, of products which when used normally, prove to be
              defective within the period stated. Labor, delivery charges and service not covered under warranty.
            </p>

            <p className="font-[HelveticaNeue] text-[10pt] leading-[13pt] mb-6">
              This warranty does not apply to any product which must be replaced because of normal wear and tear,
              negligence, abuse or accident or which has been modified by someone other than Groupe Lacasse Inc.
              or its authorized dealers. The remedy stated herein are expressly agreed to be exclusive as a
              condition of sale. Groupe Lacasse Inc’s liability with respect to its products or installation
              services should not exceed that expressly set forth above. Under no circumstances shall Groupe
              Lacasse Inc. be liable for accidental or consequential damages. Specials may be subject to a
              limited warranty.
            </p>

            <p className="font-[HelveticaNeue] text-[10pt] leading-[13pt]">
              For more information, please refer to the current Lacasse General Price Book or feel free to contact
              our Customer Service department at customerservice@groupelacasse.com.
            </p>
          </div>

          {/* Footer Contact */}
          <div className="absolute left-[1.9325in] top-[10.1512in] w-[5.7in]  font-[HelveticaNeue] text-[10pt] text-[#000]">
            99 Saint-Pierre Street, Saint-Pie, QC Canada J0H 1W0 | 1 (888) 522-2773 | www.groupelacasse.com
          </div>

          {/* Page Number */}
          <div className="absolute top-[10.6181in] left-[0.75in] flex items-center gap-3 font-[Diagramm-Light] text-[0.5rem] text-black">
            <span>109 of 134</span>
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

export default Page109;
