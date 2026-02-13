import imgLanding from "figma:asset/9c8972844f0e811c448d184ca2d7dc97cbe073a5.png";
import imgConnektLogo2 from "figma:asset/233a2cf3fd368cfacc5b35f665aafa8da24e02e7.png";
import imgEllipse2 from "figma:asset/390c7306f2c93935729cecc6ffdd75f4cd164298.png";
import imgEllipse1 from "figma:asset/c243849c271a30f13bcc8fb2aa85a7003566f6ad.png";
import imgEllipse3 from "figma:asset/584c8acc10113a33d0172bf0b2ff0f78d06064eb.png";
import imgEllipse7 from "figma:asset/8d77d6c350f61f0e7dc54d409639faa1dc364cd7.png";
import imgEllipse5 from "figma:asset/eef663647d360bea89a9d3bd53968efd3ff16f42.png";

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Medium',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-white w-[107px] whitespace-pre-wrap">
      <p className="h-[21px] relative shrink-0 text-[21px] tracking-[0.84px] w-full">CONNEKT</p>
      <p className="h-[11px] relative shrink-0 text-[8px] tracking-[0.32px] w-full">BROAD BAND SOLUTIONS</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[35px]" data-name="connekt logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-2.91%] max-w-none top-0 w-[431.54%]" src={imgConnektLogo2} />
        </div>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#d7ab04] content-stretch flex items-center justify-center px-[22px] py-[7px] relative rounded-[23px] shrink-0">
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
      <Frame1 />
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[272px] items-center px-[112px] py-[24px] relative w-full">
          <Frame17 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center pr-[10px] relative shrink-0">
      <div className="mr-[-10px] relative shrink-0 size-[38px]">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse2} width="38" />
      </div>
      <div className="mr-[-10px] relative shrink-0 size-[38px]">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse1} width="38" />
      </div>
      <div className="mr-[-10px] relative shrink-0 size-[38px]">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse3} width="38" />
      </div>
      <div className="mr-[-10px] relative shrink-0 size-[38px]">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse7} width="38" />
      </div>
      <div className="mr-[-10px] relative shrink-0 size-[38px]">
        <img alt="" className="block max-w-none size-full" height="38" src={imgEllipse5} width="38" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#efab18] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[19px] relative w-full">
          <p className="font-['Outfit:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e2e] text-[14px] text-center">Enter your account name or email</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#32261a] relative rounded-[14px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2e3ab] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_2px_64px_0px_rgba(255,213,52,0.2)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[17px] py-[21px] relative w-full">
          <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffe16f] text-[14px] text-center">View Account Details</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-[424px]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0">
      <Frame23 />
      <div className="bg-clip-text font-['GRIFTER:Bold',sans-serif] h-[113px] leading-[53px] not-italic relative shrink-0 text-[59px] text-[rgba(255,255,255,0.9)] text-center w-[772px] whitespace-pre-wrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgb(255, 186, 38) 0%, rgb(255, 253, 250) 100%)", WebkitTextFillColor: "transparent" }}>
        <p className="mb-0">Renew Your</p>
        <p>Internet Subscription</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full">
      <Frame10 />
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#979797] text-[14px] text-center w-[483px] whitespace-pre-wrap">Stay connected with our premium internet services. Renew your subscription today for uninterrupted access to high-speed internet.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[740px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Medium',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-white w-[107px] whitespace-pre-wrap">
      <p className="h-[21px] relative shrink-0 text-[21px] tracking-[0.84px] w-full">CONNEKT</p>
      <p className="h-[11px] relative shrink-0 text-[8px] tracking-[0.32px] w-full">BROAD BAND SOLUTIONS</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[35px]" data-name="connekt logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-2.91%] max-w-none top-0 w-[431.54%]" src={imgConnektLogo2} />
        </div>
      </div>
      <Frame21 />
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

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-5px] p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fffdf7] text-[16px]">Privacy</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-5px] p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fffdf7] text-[16px]">Contact</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center pr-[5px] relative shrink-0">
      <Frame3 />
      <Frame11 />
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[29px] pt-[50px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ffd534] border-b-2 border-solid inset-0 pointer-events-none" />
      <Frame20 />
      <Frame12 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Outfit:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e7e7e7] text-[12px]">{`©2026 CONNEKT  internet . All rights reserved`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#0d0d0d] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[130px] py-[20px] relative w-full">
        <Frame14 />
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Landing">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLanding} />
      <Frame6 />
      <Frame24 />
      <Frame19 />
    </div>
  );
}