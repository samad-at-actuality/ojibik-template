// src/app/page102/page.tsx
"use client";

import React from "react";
import LetterPage from "../components/LetterPage";
import Image from "next/image";
import localFont from 'next/font/local'; // Import localFont for font loading

// Importing fonts with explicit family names
const diagrammBold = localFont({
  src: "../../../public/fonts/Diagramm-Bold.otf",
  variable: "--font-diagramm-bold",
});

const larkenRegular = localFont({
  src: "../../../public/fonts/LarkenDEMO-Regular.otf",
  variable: "--font-larken-regular",
});

const larkenItalic = localFont({
  src: "../../../public/fonts/LarkenDEMO-Italic.otf",
  variable: "--font-larken-italic",
});

const diagrammLight = localFont({
  src: "../../../public/fonts/Diagramm-Light.otf",
  variable: "--font-diagramm-light",
});

const larkenMedium = localFont({
  src: "../../../public/fonts/LarkenDEMO-Medium.otf",
  variable: "--font-larken-medium",
});

const page102: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div style={{ position: 'relative', width: '8.5in', height: '11in', background: 'white' }}>
        <LetterPage backgroundColor="white">
          {/* Logo, Bar, Financial Proposal, Timeline */}
          <div className="relative w-[8.5in] h-[11in] ">
            {/* Icon + header */}
            <Image
              src="/icons/headline_icon_2.svg"
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
              <span className="font-[Diagramm-Bold] text-[15pt] leading-[15pt] text-[#4b5846]">
                Financial Proposal »
              </span>
              <span className="ml-1 font-[LarkenDEMO-Medium] text-[15pt] leading-[15pt] text-[#4b5846]">
                Timeline
              </span>
            </div>
          </div>

          {/* Backdrop SVG (x: 0in, y: 0in) */}
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

          {/* LEAD TIMES Heading Only */}
          <div className="absolute left-[3.779in] top-[1.2292in] ">          
              <div className=" font-[Diagramm-Bold] text-[18pt] leading-[13pt] text-[#4b5846]">
               LEAD TIMES
              </div>
          </div>

          {/* Bar Design SVG (x: 1in, y: 1in) */}
          <div className="absolute left-[3.779in] top-[1.2292in] w-[7in] h-[6.8111in] z-0">
            <Image
              src="/images/page102/bar_design.svg"
              alt="back drop"
              fill
              className="object-contain"
              sizes={`${6.6 * 96}px`}
              priority
            />
          </div>

          {/* Overlay for Bar Design Text */}
          <div
            className={`absolute select-none ${diagrammBold} `}
            style={{
              left: "3.85in",
              top: "1.62in",
              width: "4.3in",
              height: "2.7in",
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            <div style={{ position: "absolute", top: "0in", left: "-0.23in", width: "3.5in", display: "flex", flexDirection: "row", alignItems: "center", fontFamily: "var(--font-larken-demo-light), sans-serif", fontSize: "0.9rem", color: "white", letterSpacing: "0.01em", fontWeight: 200 }}>
              <span style={{ minWidth: "1.4in", display: "inline-block" }}>Order Process:</span>
              <span className={diagrammBold.className} style={{ fontWeight: 400, color: "#4b5746" }}>10 DAYS</span>
            </div>
            <div style={{ position: "absolute", top: "0.40in", left: "-0.23in", width: "3.5in", display: "flex", flexDirection: "row", alignItems: "center", fontFamily: "var(--font-larken-demo-light), sans-serif", fontSize: "0.9rem", color: "white", letterSpacing: "0.01em", fontWeight: 200 }}>
              <span style={{ minWidth: "1.4in", display: "inline-block" }}>Installment Start:</span>
              <span className={diagrammBold.className} style={{ fontWeight: 400, color: "white" }}>13TH WEEK</span>
            </div>
            <div style={{ position: "absolute", top: "0.80in", left: "-0.23in", width: "3.5in", display: "flex", flexDirection: "row", alignItems: "center", fontFamily: "var(--font-larken-demo-light), sans-serif", fontSize: "0.9rem", color: "white", letterSpacing: "0.01em", fontWeight: 200 }}>
              <span style={{ minWidth: "1.4in", display: "inline-block" }}>Installment Process:</span>
              <span className={diagrammBold.className} style={{ fontWeight: 400, color: "white" }}>14TH WEEK</span>
            </div>
            <div style={{ position: "absolute", top: "1.2in", left: "-0.23in", width: "3.5in", display: "flex", flexDirection: "row", alignItems: "center", fontFamily: "var(--font-larken-demo-light), sans-serif", fontSize: "0.9rem", color: "white", letterSpacing: "0.01em", fontWeight: 200 }}>
              <span style={{ minWidth: "1.4in", display: "inline-block" }}>Furniture Completion:</span>
              <span className={diagrammBold.className} style={{ fontWeight: 400, color: "white" }}>15TH WEEK</span>
            </div>
            <div style={{ position: "absolute", top: "1.58in", left: "-0.23in", width: "3.5in", display: "flex", flexDirection: "row", alignItems: "center", fontFamily: "var(--font-larken-demo-light), sans-serif", fontSize: "0.9rem", color: "white", letterSpacing: "0.01em", fontWeight: 200 }}>
              <span style={{ minWidth: "1.4in", display: "inline-block" }}>Deficiency Review:</span>
              <span className={diagrammBold.className} style={{ fontWeight: 400, color: "white" }}>16TH WEEK</span>
            </div>
          </div>

          {/* Overlay for Bar Design Dates */}
          <div
            className="absolute select-none"
            style={{
              left: "3.85in",
              top: "1.35in",
              width: "4.3in",
              pointerEvents: "none",
              zIndex: 4,
            }}
          >
            {/* Timeline Numbered Blocks */}
            {/* Block 1 (below timeline) */}
            <div style={{ position: "absolute", top: "7.3in", left: "-1.77in", width: "2.5in" }}>
              <div style={{
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "2rem",
                letterSpacing: "0.01em",
                textAlign: "center",
                width: "0.5in"
              }}>
                1
              </div>
              <div style={{
                marginLeft: "0.13in",
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "0.01em"
              }}>
                04/29/2025
                <div style={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "#4b5746",
                  fontFamily: "var(--font-larken-demo-light), sans-serif",
                  marginLeft: "0.13in",
                  lineHeight: 1 // reduce line break margin
                }}>
                  RFP Submitted to <br />
                  CBRE
                </div>
              </div>
            </div>
            {/* Block 2 (above timeline) */}
            <div style={{ position: "absolute", top: "3.7in", left: "-0.85in", width: "2.5in" }}>
              <div style={{
                marginLeft: "0.13in",
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "0.01em"
              }}>
                05/06/2025
              </div>
              <div style={{
                fontWeight: 400,
                fontSize: "1rem",
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-light), sans-serif",
                marginLeft: "0.13in"
              }}>
                Notice of Award
              </div>
              <div style={{
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "2rem",
                letterSpacing: "0.01em",
                textAlign: "center",
                width: "0.5in"
              }}>
                2
              </div>
            </div>
            {/* Block 3 (below timeline) */}
            <div style={{ position: "absolute", top: "7.3in", left: "0.44in", width: "2.5in" }}>
              <div style={{
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "1.8rem",
                letterSpacing: "0.01em",
                textAlign: "center",
                width: "0.5in"
              }}>
                3
              </div>
              <div style={{
                marginLeft: "0.13in",
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "0.01em"
              }}>
                05/16/2025
                <div style={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "#4b5746",
                  fontFamily: "var(--font-larken-demo-light), sans-serif",
                  lineHeight: 1
                }}>
                  Furniture Specification Coordination Finalized
                </div>
              </div>
            </div>
            {/* Block 4 (above timeline) */}
            <div style={{ position: "absolute", top: "3.65in", left: "1.7in", width: "2.5in" }}>
              <div style={{
                marginLeft: "0.13in",
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "0.01em"
              }}>
                05/26/2025
              </div>
              <div style={{
                fontWeight: 400,
                fontSize: "1rem",
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-light), sans-serif",
                marginLeft: "0.13in",
                lineHeight: 1
              }}>
                Purchase Order Needed <br />
                From Client
              </div>
              <div style={{
                fontWeight: 800,
                color: "#4b5746",
                fontFamily: "var(--font-larken-demo-medium), sans-serif",
                fontSize: "1.8rem",
                letterSpacing: "0.01em",
                textAlign: "center",
                width: "0.5in"
              }}>
                4
              </div>
            </div>
          </div>

          {/* Circle Design SVG (x: 2in, y: 2in) */}
          <Image
            src="/images/test_page/graphic_design.svg"
            alt="Circle Design"
            width={9.89 * 96}
            height={10.14 * 96}
            className="absolute select-none"
            style={{
              left: "0in",
              top: "-3.7in",
              zIndex: 2,
            }}
          />

          {/* Page Number SVG (x: 0.5in, y: 0.5in from bottom) */}
          <Image
            src="/images/test_page/page_num.svg"
            alt="Page Number"
            width={5.5 * 96}
            height={4.5 * 96}
            className="absolute select-none"
            style={{
              left: "0.20in",
              bottom: "-4.9in",
              zIndex: 3,
            }}
          />

          {/* Vertically oriented Project and Timeline text, separated for independent positioning */}
          <div
            className={diagrammLight.className} 
            style={{
              position: "absolute",
              left: "-0.5in",
              top: "2.6in",
              zIndex: 10,
              fontWeight: 400,
              fontSize: '6.5rem',
              color: '#4b5746',
              letterSpacing: '0.05em',
              lineHeight: 1,
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
            }}
          >
            Project
          </div>
          <div
            className={diagrammLight.className}
            style={{
              position: "absolute",
              left: "0.2in",
              top: "2.4in", // Adjust this value to shift 'Timeline' independently
              zIndex: 10,
              fontWeight: 400,
              fontSize: '6.5rem',
              color: '#4b5746',
              letterSpacing: '0.05em',
              lineHeight: 1,
              transform: 'rotate(-90deg)',
              whiteSpace: 'nowrap',
            }}
          >
            Timeline
          </div>

        </LetterPage>
      </div>
    </div>
  );
};

export default page102;