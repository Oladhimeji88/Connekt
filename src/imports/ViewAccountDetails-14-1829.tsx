import svgPaths from "./svg-a93epfxlmq";
import imgViewAccountDetails from "figma:asset/9c8972844f0e811c448d184ca2d7dc97cbe073a5.png";
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
    <div className="content-stretch flex gap-[272px] items-center px-[112px] py-[24px] relative shrink-0 w-[1440px]">
      <Frame14 />
      <Frame5 />
    </div>
  );
}

function MaterialSymbolsSearch() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="material-symbols:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="material-symbols:search">
          <path d={svgPaths.p845000} fill="var(--fill-0, #767B8B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#17181a] content-stretch flex h-[39px] items-center justify-between px-[7px] py-[5px] relative rounded-[9px] shrink-0 w-[327px]">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">{`Search another account `}</p>
      <MaterialSymbolsSearch />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[28px] text-white w-[209px] whitespace-pre-wrap">Account Details</p>
      <Frame16 />
    </div>
  );
}

function LetsIconsUserFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lets-icons:user-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lets-icons:user-fill">
          <path d={svgPaths.p31c65a00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p32d71800} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function UilCalender() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0 size-[34px]" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit] size-full">
        <LetsIconsUserFill />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Account status</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#12423a] content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#28504f] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">Active</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] h-[17px] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px] w-[44px] whitespace-pre-wrap">{` status`}</p>
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Adebowalelipede@yahoo.com</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] h-[17px] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px] w-[68px] whitespace-pre-wrap">Username</p>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">Feb 16, 2026, 12:00AM</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Expiry Date</p>
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eb5345] text-[14px]">12 days</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Days to Expiry</p>
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
      <Frame20 />
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#dcb400] relative rounded-[13px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#6f5d0a] border-solid inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[15px] relative w-full">
          <p className="font-['Outfit:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[15px] text-center text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 600" }}>{`Pay ₦20,000  Renew Plan`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame31 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
      <Frame23 />
      <div className="font-['Outfit:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#dfdfdf] text-[0px] text-[8px] text-center whitespace-nowrap">
        <p className="leading-[normal] mb-0">Secure payment powered by paystack</p>
        <p>
          <span className="leading-[normal]">Renew</span>
          <span className="font-['Outfit:Bold',sans-serif] leading-[normal] not-italic text-[#ffd534]">{` 15Mbps Connekt Residential Plus`}</span>
          <span className="leading-[normal]">{` for 1 days`}</span>
        </p>
      </div>
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
    <div className="bg-[rgba(13,13,13,0.64)] content-stretch flex items-center px-[30px] py-[27px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame24 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
          <g id="Group">
            <path d={svgPaths.p10966040} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1da8ee00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MeteorIconsGlobe() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="meteor-icons:globe">
      <Group />
    </div>
  );
}

function UilCalender1() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0 size-[34px]" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit] size-full">
        <MeteorIconsGlobe />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender1 />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Current Plan</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#12423a] content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#28504f] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">15Mbps Connekt residental Plus</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Plan Name</p>
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#dfdfdf] text-[14px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 600" }}>
        ₦20,399
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Monthly Price</p>
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">1 days</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Validity</p>
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame37 />
      <Frame39 />
      <Frame45 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[327px]">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[rgba(13,13,13,0.64)] h-[415px] relative rounded-[10px] shrink-0">
      <div className="content-stretch flex gap-[10px] h-full items-start overflow-clip px-[30px] py-[27px] relative rounded-[inherit]">
        <Frame33 />
        <div className="-translate-x-1/2 absolute h-[236px] left-[calc(50%+0.5px)] top-[376px] w-[412px]">
          <div className="absolute inset-[-48.31%_-27.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 640 464">
              <g filter="url(#filter0_f_3_827)" id="Ellipse 10">
                <ellipse cx="320" cy="232" fill="var(--fill-0, #D7AB04)" rx="206" ry="118" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="464" id="filter0_f_3_827" width="640" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_3_827" stdDeviation="57" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame32 />
    </div>
  );
}

function LetsIconsUserFill1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lets-icons:user-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lets-icons:user-fill">
          <path d={svgPaths.p31c65a00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p32d71800} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function UilCalender2() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0 size-[34px]" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit] size-full">
        <LetsIconsUserFill1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender2 />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Account Details</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Adebowale lipede</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] h-[17px] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px] w-[44px] whitespace-pre-wrap">{` Name`}</p>
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dfdfdf] text-[14px]">Adebowalelipede@yahoo.com</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] h-[17px] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px] w-[68px] whitespace-pre-wrap">Email</p>
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">N/A</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Phone</p>
          <Frame59 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame54 />
      <Frame56 />
      <Frame58 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[327px]">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[rgba(13,13,13,0.64)] content-stretch flex h-full items-start justify-center px-[30px] py-[27px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame49 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
          <g id="Group">
            <path d={svgPaths.p10966040} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1da8ee00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MeteorIconsGlobe1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="meteor-icons:globe">
      <Group1 />
    </div>
  );
}

function UilCalender3() {
  return (
    <div className="bg-[#ffd534] relative rounded-[5px] shrink-0 size-[34px]" data-name="uil:calender">
      <div className="content-stretch flex items-center overflow-clip p-[7px] relative rounded-[inherit] size-full">
        <MeteorIconsGlobe1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0">
      <UilCalender3 />
      <p className="font-['Outfit:Regular',sans-serif] h-[29px] leading-[normal] not-italic relative shrink-0 text-[21px] text-white w-[155px] whitespace-pre-wrap">Usage Details</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">251.05 GB</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">{`Download  Used`}</p>
          <Frame66 />
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">251.05 GB</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Upload used</p>
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[9px] shrink-0">
      <p className="font-['Outfit:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#19b76f] text-[14px]">251.05 GB</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#17181a] h-[39px] relative rounded-[9px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#303030] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7px] py-[5px] relative size-full">
          <p className="font-['Outfit:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8c93a5] text-[14px]">Total used</p>
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Frame65 />
      <Frame67 />
      <Frame69 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[327px]">
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[rgba(13,13,13,0.64)] h-[415px] relative rounded-[10px] shrink-0">
      <div className="content-stretch flex gap-[10px] h-full items-start overflow-clip px-[30px] py-[27px] relative rounded-[inherit]">
        <Frame61 />
        <div className="-translate-x-1/2 absolute h-[236px] left-[calc(50%+0.5px)] top-[376px] w-[412px]">
          <div className="absolute inset-[-48.31%_-27.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 640 464">
              <g filter="url(#filter0_f_3_827)" id="Ellipse 10">
                <ellipse cx="320" cy="232" fill="var(--fill-0, #D7AB04)" rx="206" ry="118" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="464" id="filter0_f_3_827" width="640" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_3_827" stdDeviation="57" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame48 />
      </div>
      <Frame60 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame47 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[806px]">
      <Frame41 />
      <Frame40 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex h-[980px] items-center justify-center p-[10px] relative shrink-0 w-[1440px]">
      <Frame42 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Medium',sans-serif] gap-[3px] items-end leading-[normal] not-italic relative shrink-0 text-white w-[107px] whitespace-pre-wrap">
      <p className="h-[21px] relative shrink-0 text-[21px] tracking-[0.84px] w-full">CONNEKT</p>
      <p className="h-[11px] relative shrink-0 text-[8px] tracking-[0.32px] w-full">BROAD BAND SOLUTIONS</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[35px]" data-name="connekt logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-2.91%] max-w-none top-0 w-[431.54%]" src={imgConnektLogo2} />
        </div>
      </div>
      <Frame73 />
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

function Frame7() {
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
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[29px] pt-[50px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ffd534] border-b-2 border-solid inset-0 pointer-events-none" />
      <Frame72 />
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

function Frame71() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start px-[130px] py-[20px] relative shrink-0 w-[1440px]">
      <Frame12 />
    </div>
  );
}

export default function ViewAccountDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="View Account Details">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgViewAccountDetails} />
      <Frame6 />
      <Frame43 />
      <Frame71 />
    </div>
  );
}