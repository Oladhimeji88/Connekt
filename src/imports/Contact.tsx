import svgPaths from "./svg-ih8dy8m8tr";
import imgContact from "figma:asset/9c8972844f0e811c448d184ca2d7dc97cbe073a5.png";
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative shrink-0">
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

function Frame7() {
  return (
    <div className="bg-[#d7ab04] content-stretch flex items-center justify-center px-[22px] py-[7px] relative rounded-[23px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Contact</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[4px] py-[3px] relative rounded-[31px] shrink-0">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame7 />
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

function IcRoundWhatsapp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-whatsapp">
          <path d={svgPaths.p93fc700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UilCalender() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <IcRoundWhatsapp />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Whatsapp Chat</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Chat with us instantly</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function RiWhatsappFill() {
  return (
    <div className="mr-[-7px] relative shrink-0 size-[24px]" data-name="ri:whatsapp-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:whatsapp-fill">
          <path d={svgPaths.p1f8bfe00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-7px] px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-white">Start Chat</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[rgba(13,13,13,0.58)] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[7px] pr-[14px] py-[5px] relative size-full">
          <RiWhatsappFill />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame19 />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[327px]">
      <Frame21 />
      <Frame27 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(37,37,37,0.4)] content-stretch flex items-center px-[30px] py-[27px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      <Frame24 />
    </div>
  );
}

function LineMdPhone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="line-md:phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="line-md:phone">
          <path d={svgPaths.p35106c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function UilCalender1() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <LineMdPhone />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender1 />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Phone Support</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Call us directly</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-white">0201410240</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#292012] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#a7a7a7] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame35 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[327px]">
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[rgba(37,37,37,0.4)] content-stretch flex items-center px-[30px] py-[27px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      <Frame26 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <Frame25 />
      <Frame28 />
    </div>
  );
}

function MiEmail() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mi:email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mi:email">
          <path d={svgPaths.p32254e80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UilCalender2() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <MiEmail />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender2 />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Email Support</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Send us a message</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-white">Support@connekt.me</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#17101b] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#a7a7a7] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame45 />
      <Frame47 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[327px]">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[rgba(37,37,37,0.4)] content-stretch flex items-center px-[30px] py-[27px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      <Frame40 />
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

function UilCalender3() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <TdesignLocation />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender3 />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Office Location</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Visit our Office</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame56 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative w-full">
          <p className="flex-[1_0_0] font-['Outfit:SemiBold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[17px] text-center text-white whitespace-pre-wrap">5, Gbangbala Street ,Ikate Lagos</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#17101b] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#a7a7a7] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[7px] py-[5px] relative size-full">
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame55 />
      <Frame57 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[327px]">
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[rgba(37,37,37,0.4)] content-stretch flex items-center px-[30px] py-[27px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      <Frame50 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[794px]">
      <Frame39 />
      <Frame49 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[417px] items-center justify-center relative shrink-0 w-full">
      <Frame30 />
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col h-[743px] items-center justify-center p-[10px] relative shrink-0 w-[1440px]">
      <Frame29 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Medium',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-white w-[107px] whitespace-pre-wrap">
      <p className="h-[21px] relative shrink-0 text-[21px] tracking-[0.84px] w-full">CONNEKT</p>
      <p className="h-[11px] relative shrink-0 text-[8px] tracking-[0.32px] w-full">BROAD BAND SOLUTIONS</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[35px]" data-name="connekt logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-2.91%] max-w-none top-0 w-[431.54%]" src={imgConnektLogo2} />
        </div>
      </div>
      <Frame61 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-5px] p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fffdf7] text-[16px]">Terms</p>
    </div>
  );
}

function Frame4() {
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
      <Frame3 />
      <Frame4 />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[29px] pt-[50px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ffd534] border-b-2 border-solid inset-0 pointer-events-none" />
      <Frame60 />
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

function Frame59() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start px-[130px] py-[20px] relative shrink-0 w-[1440px]">
      <Frame12 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Contact">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContact} />
      <Frame6 />
      <Frame38 />
      <Frame59 />
    </div>
  );
}