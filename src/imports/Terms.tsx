import svgPaths from "./svg-kuupqf3rpe";
import imgTerms from "figma:asset/9c8972844f0e811c448d184ca2d7dc97cbe073a5.png";
import imgConnektLogo2 from "figma:asset/233a2cf3fd368cfacc5b35f665aafa8da24e02e7.png";

function Frame13() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Medium',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-white w-[107px] whitespace-pre-wrap">
      <p className="h-[21px] relative shrink-0 text-[21px] tracking-[0.84px] w-full">CONNEKT</p>
      <p className="h-[11px] relative shrink-0 text-[8px] tracking-[0.32px] w-full">BROAD BAND SOLUTIONS</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[35px]" data-name="connekt logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-2.91%] max-w-none top-0 w-[431.54%]" src={imgConnektLogo2} />
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-[22px] py-[7px] relative rounded-[23px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Home</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#d7ab04] content-stretch flex items-center justify-center px-[22px] py-[7px] relative rounded-[23px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Terms</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Privacy</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Contact</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[4px] py-[3px] relative rounded-[31px] shrink-0">
      <Frame />
      <Frame7 />
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[272px] items-center px-[112px] py-[24px] relative shrink-0 w-[1440px]">
      <Frame14 />
      <Frame5 />
    </div>
  );
}

function MaterialSymbolsInfoOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:info-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:info-outline">
          <path d={svgPaths.p2c52ac80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UilCalender() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <MaterialSymbolsInfoOutline />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender />
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21px] text-white">information we collect</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0 w-[515px]">
      <div className="flex-[1_0_0] font-['Outfit:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#dfdfdf] text-[14px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">By accessing and using Connekt Internet services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="font-['Outfit:Bold',sans-serif] leading-[normal] mb-0">Internet Service</p>
        <p className="leading-[normal] mb-0">Internet provides residential and business internet connectivity services including:</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">High-speed broadband internet access</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[normal]">Wi-Fi connectivity solutions</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[normal]">Technical support and maintenance</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">Connekt Internet’s liability is limited to the monthly service fee. We are not responsible for indirect damages, data loss, or business interruption resulting from service use or outages.</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[7px] py-[5px] relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[697px]">
      <Frame21 />
      <Frame27 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%_-6.07%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.2135">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.p100d8f80} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="2" />
            <path d={svgPaths.p23f84000} id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TdesignLocation() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tdesign:location">
      <Group />
    </div>
  );
}

function UilCalender1() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <TdesignLocation />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender1 />
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21px] text-white">Contact Information</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Visit our Office</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[7px] py-[5px] relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative w-full">
          <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[17px] text-white whitespace-pre-wrap">5, Gbangbala Street ,Ikate Lagos</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Frame31 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Call us</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[7px] py-[5px] relative size-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[5px] relative w-full">
          <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[17px] text-white whitespace-pre-wrap">+2349088998930</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame38 />
      <Frame41 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0 w-[637px]">
      <Frame30 />
      <Frame37 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-h-px min-w-px relative">
      <Frame29 />
      <Frame34 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[rgba(37,37,37,0.2)] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[27px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(37,37,37,0.4)] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[43px] items-start justify-center px-[50px] py-[47px] relative w-full">
          <Frame33 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-[797px]">
      <p className="font-['Outfit:Regular',sans-serif] h-[46px] leading-[normal] not-italic relative shrink-0 text-[#f0f0f0] text-[34px] text-center w-full whitespace-pre-wrap">TERMS</p>
      <Frame25 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col h-[949px] items-center justify-center p-[10px] relative shrink-0 w-[1440px]">
      <Frame35 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Medium',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-white w-[107px] whitespace-pre-wrap">
      <p className="h-[21px] relative shrink-0 text-[21px] tracking-[0.84px] w-full">CONNEKT</p>
      <p className="h-[11px] relative shrink-0 text-[8px] tracking-[0.32px] w-full">BROAD BAND SOLUTIONS</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[35px]" data-name="connekt logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-2.91%] max-w-none top-0 w-[431.54%]" src={imgConnektLogo2} />
        </div>
      </div>
      <Frame45 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-5px] p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fffdf7] text-[16px]">Terms</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-5px] p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fffdf7] text-[16px]">Privacy</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-5px] p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fffdf7] text-[16px]">Contact</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center pr-[5px] relative shrink-0">
      <Frame1 />
      <Frame3 />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[29px] pt-[50px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ffd534] border-b-2 border-solid inset-0 pointer-events-none" />
      <Frame44 />
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e7e7e7] text-[12px]">{`©2026 CONNEKT  internet . All rights reserved`}</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame9 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start px-[130px] py-[20px] relative shrink-0 w-[1440px]">
      <Frame12 />
    </div>
  );
}

export default function Terms() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Terms">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTerms} />
      <Frame6 />
      <Frame39 />
      <Frame43 />
    </div>
  );
}