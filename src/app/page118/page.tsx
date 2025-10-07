"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";


const Page118: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LetterPage backgroundColor="white">
        <div className="relative w-[8.5in] h-[11in] ">
          {/* Icon + header */}
          <Image
            src="/icons/headline_icon_4.svg"
            alt="Production Summary"
            width={1}
            height={1}
            className="absolute left-[0.2842in] top-[0.338in] w-[0.1815in] h-[0.199in]"
          />
          <Image
            src="/icons/header-vert-line.png"
            alt="vertical line"
            width={1}
            height={1}
            className="absolute left-[0.6071in] top-[0.2951in] w-[0.01in] h-[0.3in] z-[1]"
          />
          <div className="absolute left-[0.75in] top-[0.3323in] flex items-center whitespace-nowrap">
            <span className="font-[Diagramm-Bold] text-[15pt] leading-[17.5pt] text-[#4b5846]">
              Corporate Info »
            </span>
            <span className="ml-1 font-[LarkenDEMO-Medium] text-[15pt] leading-[17.5pt] text-[#4b5846]">
              Exclusive Insight
            </span>
          </div>

          {/* Main Title */}
          <div className="absolute left-[0.75in] top-[0.675in]  text-[#4b5846] z-1">
            <div className="flex items-baseline flex-nowrap">
              <span className="mr-2 whitespace-nowrap font-[LarkenDEMO-Regular] text-[26.4pt] leading-[31.68pt]">
                Teknion at a Glance
              </span>
            </div>
          </div>
 {/*---------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* MAP SECTION */}
            {/* Map background */}
         <div className="absolute left-[0in] top-[0.8238in] z-0">
            <Image
              src="/images/page118/map.png"
              alt="blue backdrop"
              width={1} height={1}
              className=" w-[8.5in] h-[5.2829in]"
              sizes={`${6.6 * 96}px`}
              priority
            />
         </div>


            {/* Cities */}
            {/* calgary */}
            <div className="absolute left-[0.6789in] top-[2.4871in] w-[0.6973in] h-[0.6973in] z-0">
              <Image
                src="/images/page118/green.png"
                alt="calgary"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>Calgary</span>
                  <span>Alberta</span>
                </span>
              </div>
            </div>

            
            {/* Toronto */}
            <div className="absolute left-[1.606in] top-[1.9707in] z-0">
              <Image
                src="/images/page118/yellow.png"
                alt="Toronto Ontario"
                width={1} height={1}
                className=" w-[0.6973in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>Toronto</span>
                  <span>Ontario</span>
                </span>
              </div>              
            </div>

            {/* Mount Laurel */}
            <div className="absolute left-[1.396in] top-[3.1078in] z-0">
              <Image
                src="/images/page118/yellow.png"
                alt="Mount Laurel"
                width={1} height={1}
                className=" w-[0.6973in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>Mount Laurel</span>
                  <span>USA</span>
                </span>
              </div>              
            </div>

            {/* clayton */}
            <div className="absolute left-[2.4583in] top-[3.1337in] z-0">
              <Image
                src="/images/page118/green.png"
                alt="clayton"
                width={1} height={1}
                className=" w-[0.6973in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>Clayton</span>
                  <span>NC,USA</span>
                </span>
              </div>              
            </div>

            {/* Levis Quebec */}
            <div className="absolute left-[2.5314in] top-[1.9488in] z-0">
              <Image
                src="/images/page118/green.png"
                alt="Levis"
                width={1} height={1}
                className=" w-[0.6973in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>Levis</span>
                  <span>Quebec</span>
                </span>
              </div>              
            </div>

            {/* Darwen */}
            <div className="absolute left-[4.17in] top-[1.6688in] z-0">
              <Image
                src="/images/page118/red.png"
                alt="Darwen"
                width={1} height={1}
                className=" w-[0.6973in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>Darwen</span>
                  <span>UK</span>
                </span>
              </div>              
            </div>
            {/* London */}
            <div className="absolute left-[4.4407in] top-[2.5697in] z-0">
              <Image
                src="/images/page118/green.png"
                alt="London"
                width={1} height={1}
                className=" w-[0.6973in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>London</span>
                  <span>UK</span>
                </span>
              </div>              
            </div> 

            {/* Klang Malaysia */}
            <div className="absolute left-[6.9873in] top-[3.4688in] z-0">
              <Image
                src="/images/page118/green.png"
                alt="Klang Malaysia"
                width={1} height={1}
                className=" w-[0.6973in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Diagramm-Bold] text-[6pt] text-white text-center leading-tight flex flex-col items-center">
                  <span>Klang</span>
                  <span>Malaysia</span>
                </span>
              </div>              
            </div>       
            
            {/* legend */}
            <div className="absolute left-[6.8715in] top-[1.7894in] z-0">
              <Image
                src="/images/page118/legend.png"
                alt="legend"
                width={1} height={1}
                className=" w-[0.7683in] h-[0.6973in]"
                sizes={`${6.6 * 96}px`}
                priority
              />            
              </div>   
 {/*---------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* Vertical dividers*/}
            <div className="absolute left-[3.0387in] top-[4.2661in] z-1">
              <Image
                src="/images/page118/verticallong.png"
                alt="verticallong"
                width={1} height={1}
                className="  h-[0.9806in]"
                sizes={`${6.6 * 96}px`}
                priority
              /> 
            </div>

            <div className="absolute left-[0.9321in] top-[4.2116in] w-[1.7281in] flex flex-col z-10 leading-[10pt]">
              {/* Big number */}
                <span className="font-[Diagramm-Regular] text-[42pt] text-[#4b5846] leading-none mb-[-6pt]">
                  7
                </span>
                {/* First line */}
                <span className="font-[Diagramm-Medium] text-[10pt] text-[#4b5846] leading-[13pt] block">
                  Showrooms in Canada
                  <span className="font-[Diagramm-Bold] text-[10pt] text-[#4b5846] leading-[13pt] block mb-4">
                    (Global headquarters located in Toronto)
                  </span>
                </span>

                {/* Second block - Independent dealerships */}
                <span className="font-[Diagramm-Bold] text-[14pt] text-[#4b5846] leading-none">
                  32
                </span>
                <span className="font-[Diagramm-Medium] text-[10pt] text-[#4b5846] leading-[13pt] block">
                  Independent dealerships nationwide, including 4 Indigenous owned
                </span>
            </div>


            {/* Vertical dividers*/}
            <div className="absolute left-[3.0387in] top-[5.41641in] z-0">
              <Image
                src="/images/page118/verticalshort.png"
                alt="verticalshort"
                width={1} height={1}
                className="  h-[0.7303in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
            </div>

            <div className="absolute left-[3.3117in] top-[4.2116in] w-[1.7281in] flex flex-col z-10">
              {/* Big number */}
              <span className="font-[Diagramm-Regular] text-[42pt] text-[#4b5846] leading-none mb-[-6pt]">
                3000+
              </span>

              {/* First line */}
              <span className="font-[Diagramm-Medium] text-[10pt] text-[#4b5846] leading-snug block mb-12">
                Employees in Canada
              </span>


                {/* Second block - Independent dealerships */}
                <span className="font-[Diagramm-Bold] text-[14pt] text-[#4b5846] leading-none">
                  2,700+
                </span>
                <span className="font-[Diagramm-Medium] text-[10pt] text-[#4b5846] leading-snug block">
                  Canadian companies whose services and products Teknion uses
                </span>
            </div>

            {/* Vertical dividers*/}
            <div className="absolute left-[5.3636in] top-[4.2261in] z-1">
              <Image
                src="/images/page118/verticallong.png"
                alt="verticallong"
                width={1} height={1}
                className="  h-[0.9806in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
            </div>

            {/* Vertical dividers*/}
            <div className="absolute left-[5.3636in] top-[5.41641in] z-0">
              <Image
                src="/images/page118/verticalshort.png"
                alt="verticalshort"
                width={1} height={1}
                className="  h-[0.7303in]"
                sizes={`${6.6 * 96}px`}
                priority
              />
            </div>

            <div className="absolute left-[5.625in] top-[4.2116in] w-[1.9in] flex flex-col z-10">
              {/* Big number */}
              <span className="font-[Diagramm-Regular] text-[42pt] text-[#4b5846] leading-none mb-[-6pt]">
                14
              </span>

              {/* First line */}
              <span className="font-[Diagramm-Medium] text-[10pt] text-[#4b5846] leading-[13pt] block mb-4">
                Manufacturing facilities 
                + 2 distribution centres and 
                2 raw material warehouses
              </span>

                {/* Second block - Independent dealerships */}
                <span className="font-[Diagramm-Bold] text-[14pt] text-[#4b5846] leading-none">
                  300+
                </span>
                <span className="font-[Diagramm-Medium] text-[10pt] text-[#4b5846] leading-snug block">
                  Canadian companies that supply Teknion with local materials and raw resources
                </span>
            </div>

 {/*---------------------------------------------------------------------------------------------------------------------------------------------------- */}
  
            {/* curvy line background */}
         <div className="absolute left-[0.7711in] top-[6.4298in] z-1">
            <Image
              src="/images/page118/underline.png"
              alt="curvy underline"
              width={1} height={1}
              className=" w-[6.9907in] "
              sizes={`${6.6 * 96}px`}
              priority
            />
         </div>
 {/*---------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* MANUFACTURING SECTION */}

        <div className=" absolute left-[0.7711in] top-[6.6746in] font-[Diagramm-Bold] text-[#4b5846] text-[15pt] ">
          <span>
            Manufacturing
          </span>
        </div>

        {/* 1ST design */}
        <div className="absolute left-[0.7711in] top-[7.0764in] flex flex-row z-1">
            <Image
              src="/images/page118/asset_p118_1_20250923_101237.png"
              alt="2+ million"
              width={1} height={1}
              className=" w-[0.6875in] h-[0.6875in] mr-5 shrink-0 "
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt] ">
                <span className=" font-[Diagramm-Bold] text-[10pt]  text-[#4b5846]">
                  <span className="text-[15pt]">2+</span> million
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  Square feet of 
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  manufacturing in 
                </span>    
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                Canada
                </span>              
            </div>
         </div>


        {/* 2nd design */}
         <div className="absolute left-[3.1151in] top-[7.0764in] flex flex-row z-1">
            <Image
              src="/images/page118/asset_p118_1_20250923_101249.png"
              alt="curvy underline"
              width={1} height={1}
              className=" w-[0.6875in] h-[0.6875in] mr-5 shrink-0 "
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt] ">
                <span className=" font-[Diagramm-Bold] text-[10pt]  text-[#4b5846]">
                 95%
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  Finished products 
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  are created 
                </span>    
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  in-house
                </span>              
            </div>            
         </div>

        
        {/* 3rd design */}
         <div className="absolute left-[5.4592in] top-[7.0764in] flex flex-row z-1">
            <Image
              src="/images/page118/asset_p118_1_20250923_101253.png"
              alt="curvy underline"
              width={1} height={1}
              className=" w-[0.6875in] h-[0.6875in] mr-5 shrink-0 "
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt] ">
                <span className=" font-[Diagramm-Bold] text-[10pt]  text-[#4b5846]">
                 ISO 14001 & ISO 9001
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  Certification for  
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  all our factories in 
                </span>    
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  Canada 
                </span>              
            </div>            
         </div>
        




{/*---------------------------------------------------------------------------------------------------------------------------------------------------- */}
 {/* Global Sustainability SECTION */}   

        {/* Horinzontal Line */}
        <div className="absolute left-[0.7711in] top-[7.9516in] z-1">
            <Image
              src="/images/page118/horizontalline.png"
              alt="Horinzontal Line "
              width={1} height={1}
              className=" w-[6.9414in] "
              sizes={`${6.6 * 96}px`}
              priority
            />
         </div>   

        <div className=" absolute left-[0.7711in] top-[8.1003in] font-[Diagramm-Bold] text-[#4b5846] text-[15pt] ">
          <span>
            Global Sustainability
          </span>
        </div>

        
        {/* 1 text */}
        <div className="absolute left-[0.7711in] top-[8.4464in]  h-[0.6825in] flex flex-row z-1">
            <Image
              src="/images/page118/asset_p118_1_20250923_101049.png"
              alt="well ap"
              width={1} height={1}
              className="w-[0.6875in] h-[0.6875in] mr-5 shrink-0"
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt]">
              <span className=" font-[Diagramm-Bold] text-[15pt]  text-[#4b5846]">
                20+
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt]  text-[#4b5846]">
                WELL AP on staff
              </span>
            </div>
         </div>

                {/* 2nd text */}
        <div className="absolute left-[3.115in] top-[8.4464in] flex flex-row z-1">
            <Image
              src="/images/page118/asset_p118_1_20250923_101320.png"
              alt="2nd"
              width={1} height={1}
              className="w-[0.6875in] h-[0.6875in] mr-5 shrink-0"
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt]">
              <span className=" font-[Diagramm-Bold] text-[15pt]  text-[#4b5846]">
                70+
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
              Products are Red 
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
              List Free 
              </span>
            </div>
         </div>

           {/* 3rd text */}
        <div className="absolute left-[5.4952in] top-[8.4464in] z-1 flex flex-row">
            <Image
              src="/images/page118/asset_p118_1_20250923_101333.png"
              alt="3rd"
              width={1} height={1}
              className="w-[0.6875in] h-[0.6875in] mr-5 shrink-0"
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt]">
              <span className=" font-[Diagramm-Bold] text-[15pt]  text-[#4b5846]">
                58+
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                Declared certified
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                products 
              </span>
            </div>            
         </div>
          
          {/* 4th text */}
        <div className="absolute left-[0.7711in] top-[9.4306in] z-1 flex flex-row ">
            <Image
              src="/images/page118/asset_p118_1_20250923_101305.png"
              alt="4th"
              width={1} height={1}
              className="w-[0.6875in] h-[0.6875in] mr-5 shrink-0"
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt]">
              <span className=" font-[Diagramm-Bold] text-[10pt]  text-[#4b5846]">
                <span className="text-[15pt] font-[Diagramm-Bold]">8</span> showrooms
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846] ">
                WELL certified
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846] mt-2">
              <span className="text-[15pt] font-[Diagramm-Bold]">10</span> showrooms
              </span>
              <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                LEED certified 
              </span>              
            </div> 
         </div>

           {/* 5th text */}
           <div className="absolute left-[3.1151in] top-[9.4306in] z-1 flex flex-row">
            <Image
              src="/images/page118/asset_p118_1_20250923_101326.png"
              alt="5th"
              width={1} height={1}
              className="w-[0.6875in] h-[0.6875in] mr-5 shrink-0"
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt]">
              <span className=" font-[Diagramm-Bold] text-[15pt]  text-[#4b5846]">
                  1,325
                </span>
                <span className=" font-[Diagramm-Bold] text-[10pt] text-[#4b5846]">
                  tonnes CO2e
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  Reduction in scope
                </span>    
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  1 and 2 emissions
                </span>   
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  over the past year
                </span>          
            </div>            
         </div>

        {/* 6th text */}
        <div className="absolute left-[5.4952in] top-[9.4306in] z-1 flex flex-row">
            <Image
              src="/images/page118/asset_p118_1_20250923_101337.png"
              alt="6th"
              width={1} height={1}
              className="w-[0.6875in] h-[0.6875in] mr-5 shrink-0"
              sizes={`${6.6 * 96}px`}
              priority
            />
            <div className="flex flex-col leading-[13pt]">
                <span className=" font-[Diagramm-Bold] text-[15pt]  text-[#4b5846]">
                  190+
                </span>
                <span className=" font-[Diagramm-Bold] text-[10pt] text-[#4b5846]">
                  Products and textiles
                </span>
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  included in the 
                </span>    
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  Mindful Materials
                </span>   
                <span className=" font-[Diagramm-Medium] text-[10pt] text-[#4b5846]">
                  database
                </span>            
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
            <span>118 of 134</span>
          </div>

        </div>
      </LetterPage>
    </div>
  );
};

export default Page118;