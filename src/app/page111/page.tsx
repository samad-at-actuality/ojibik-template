// src/app/page111/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";

const Page111: React.FC = () => {
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
              Sleep Nation
            </span>
          </div>

          {/* Warranty Container Box */}
          <div className="absolute top-[1.3291in] left-[0.75in] w-[7in] h-[9.125in] border border-[#4b5746]" />

          {/* Logo */}
          <Image
            src="/icons/sleepinmattress.png"
            alt="Sleep in mattress Logo"
            width={1}
            height={1}
            sizes={`${6.6 * 96}px`}
            className="absolute left-[5.829in] top-[1.5521in] w-[1.7234in] h-[0.2592in] z-10"
          />

          {/* Content */}
          <div className="absolute top-[1.75in] left-[0.9325in] w-[6.67in] text-[#000]">
            {/* Header Title */}
            <div className="font-[Diagramm-Regular] text-[15pt] ">
              Warranty
            </div>
            <div className="font-[HelveticaNeue] text-[9pt] leading-[12pt] mb-3">
              Information & Product Care
            </div>

            {/* Addresses */}
            <div className="flex justify-between font-[HelveticaNeue] text-[8pt] gap-x-6 leading-[12pt] mb-4">
              <div>
                44 Woodbine Downs Blvd Etobicoke, ON M9W 5R2 <br />
                Phone: 647.430.9721 <br />
                Fax: 647.430.9753 <br />
                Email: info@sleepinmattress.ca
              </div>
              <div className="text-right">
                #117-18 Highland Parkway NE Airdrie, Alberta T4A 0R1 <br />
                Toll: 1.855.561.960 <br />
                Fax: 647.430.9753 <br />
                Email: calgary@sleepinmattress.ca
              </div>
            </div>

            {/* Sections */}
            <div className="grid grid-cols-2 gap-x-2 text-[9pt] leading-[12pt] divide-x-1 divide-[#5f5d5d] font-[HelveticaNeue]">

              {/* Left column */}
              <div className="pr-4">
                <div className="font-[Diagramm-Bold] text-[11pt] mb-1">
                  Bedding Care Do’s & Don’ts of Bedding
                </div>
                <ul className="list-disc text-[7pt] ml-5 leading-[10pt]">
                  <li>DO follow the mattress rotation and turning guidelines</li>
                  <li>DO carry your mattress flat, it’s easier to handle and you’ll be less likely to damage the mattress. </li>
                  <li>DO keep your bedding clean. Use a mattress protector. Stains will VOID your warranty</li>
                  <li>DO replace the foundation when purchasing a new mattress. An old foundation may not provide sufficient support. 
                      It may appear that your new mattress is sagging when ii Is really the foundation that has warped. 
                      You may VOID your mattress warranty.</li>
                  <li>DO use on appropriate frame with center support for double, queen and king size sets. 
                      Using the proper frame will ensure that your warranty remains in effect. </li>
                  <li> DO vacuum your mattress frequently.</li>
                  <li> DON’T allow your mattress to get wet Upholstery materials may compress If wet Protect your mattress from liquid I body fluid with a mattress protector. </li>
                  <li>DON’T place a board between your mattress and foundation. 
                      Your sleep set is designed as an integrated system with the foundation to provide you proper support. 
                      The foundation plays an important role.</li>
                  <li>DON’T bend your mattress under any circumstances, this may damage the inner spring unit. 
                      Flex rather than bend the mattress when going through doorways, and don’t bend the comers when putting on fitted sheets</li>
                  <li>DON’T place near open flame or expose to fire. 
                      This mattress is not flame proof or fire proof and will Ignite and or burn if exposed to open flame or fire.
                      When Ignited, some bedding materials can bum rapidly and emit smoke and hazardous gases.</li>
                  <li>DON’T smoke in bed. </li>
                  <li>DON’T let anyone stand or jump on your mattress. It’s not built for that kind of weight concentration or abuse.</li>
                  <li>DON’T remove the law label at the head end of your mattress. This serves as a means of identification to establish your warranty rights.</li>
                  <li>DON’T use cleaning fluid of any type on your mattress. These chemicals will damage materials in your mattress.</li>
                </ul>

                <div className="mt-4 font-[Diagramm-Bold] text-[10pt] mb-1">
                  Items Covered
                </div>
                <ul className="list-disc ml-5 leading-[10pt] text-[7pt]">
                  <li>Coils or wires that are loose or broken.</li>
                  <li>Coils or wires that protrude or rip through the fabric.</li>
                  <li>Surface indentations or 2" or greater.</li>
                  <li>Sagging: Your mattress must be continuously supported by a matching foundation or equivalent with appropriate frame. 
                      The frame should Include a center support with leg, (see Illustration of bed frame).</li>
                </ul>
              </div>

              {/* Right column */}
              <div className="pl-4">
                <div className="font-[Diagramm-Bold] text-[10pt] mb-1">
                  Items Not Covered
                </div>
                <ul className="list-disc ml-5 leading-[10pt] text-[7pt]">
                  <li>Transportation cost.</li>
                  <li>Body silhouettes or Impressions are a natural and expect occurrence In all soft or plush mattresses. 
                      Impressions of less than 2" are within design tolerances. </li>
                  <li>Mattress fabric (include stains, soiling or burns)</li>
                  <li>Border wire (Which run along the perimeter and foundation) that bent due to moving or bending the sleep set.</li>
                  <li>Loose thread in the quilt or edge tape.</li>
                  <li>Structural damage from using an improper bed frame. 
                      This warranty applies to double, queen and king size mattress or foundation only if used on an appropriate frame. 
                      Inappropriate frame will void your warranty</li>
                  <li>Clearance bedding sold “as is” and floor models</li>
                  <li>Mattress damage due to an inappropriate foundation. 
                      Your mattress is designed for full performance only when matched with appropriate foundation as a part of a total sleep set.</li>
                  <li>Sheet fit.</li>
                  <li>The comfort level (hardness/softness) of your mattress is not a warranty issue.</li>
                </ul>

                <div className="mt-4 font-[Diagramm-Bold] text-[10pt] mb-1">
                  Maximize the Comfort Life of Your New Sleep Set
                </div>
                <ul className="list-disc ml-5 leading-[10pt] text-[7pt]">
                  <li>Body Impressions are a normal occurrence in a new mattress and indicate that the comfort layers ani conforming lo your body. </li>
                  <li>A frequent rotation schedule will minimize these Impressions and maximize the comfort life of your mattress. </li>
                  <li>Your mattress will still require position I rotating once a month for tho first 6 months, then every 23 months for oven wear, 
                      two sided mattress require nipping over and rotating on an alternating schedule every month for the first 6 months and then alternating every 23 months.</li>
                  <li>If your mattress is one sided model, It wilt not be necessary to flip Just rotate and change mattress position.</li>
                </ul>

                <div className="mt-4 font-[Diagramm-Bold] text-[10pt] mb-1">
                  Important Safety Message
                </div>
                <ul className="list-disc ml-5 leading-[10pt] text-[7pt]">
                  <li>Fire can occur If the mattress, foundation or bedding comes Into contact with an open flame, such as match, lighter or candle. </li>
                  <li>When ignited some mattress filling materials can burn rapidly and emit hazardous gases.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Website */}
          <div className="absolute left-[6.2in] top-[10.1512in] w-[5.7in] font-[HelveticaNeue] text-[10pt] text-[#000]">
            www.sleepinmattress.ca
          </div>

          {/* Page Number */}
          <div className="absolute top-[10.6181in] left-[0.75in] flex items-center gap-3 font-[Diagramm-Light] text-[0.5rem] text-black">
            <span>111 of 134</span>
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

export default Page111;
