import React from 'react';

const SideNavBar: React.FC = () => {
    return (
        <div className="flex flex-col items-stretch w-auto bg-[#FFFFFF] max-md:w-full max-md:ml-0">
        <div className="items-stretch bg-white flex w-full grow flex-col mx-auto pl-6 pr-12 py-8 max-md:px-5">
          <div className="items-center flex justify-between gap-3 pr-20 max-md:pr-5">
          </div>
          <div className="justify-center items-stretch bg-slate-100 flex w-full flex-col mt-9 pl-2 pr-16 py-2 rounded-md max-md:pr-5">
            <div className="items-stretch flex justify-between gap-2 max-md:mr-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf655ac3c3552d411c611f180fe0e9e89a9b4534ed267b5e85abdc8251b0596f?apiKey=8a3180dfeb704004a0910dd8155fa469&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-600 text-sm font-medium grow whitespace-nowrap self-start">
                Dashboard
              </div>
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-2 mt-4 pr-20 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4417a566dc2586c0a67e89204c79e03dfaffb593620fd8e111d73e40fe37c883?apiKey=8a3180dfeb704004a0910dd8155fa469&"
              className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-600 text-sm font-medium grow whitespace-nowrap self-start">
              Cars
            </div>
          </div>
          <div className="justify-end items-stretch flex flex-col mt-[471px] pt-12 pb-2 max-md:mt-10">
            <div className="items-stretch flex justify-between gap-2 mt-56 pr-20 max-md:mt-10 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f775e853d9d793d615e9a1e329018a4166bb800032d4db332e694aa1f28e534e?apiKey=8a3180dfeb704004a0910dd8155fa469&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-600 text-sm font-medium grow whitespace-nowrap self-start">
                Settings
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2 mt-10 pr-20 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a40eb9d309c7b795996ee62c378cc35d48cb58fbbdb23ca13301e620196854?apiKey=8a3180dfeb704004a0910dd8155fa469&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-600 text-sm font-medium grow whitespace-nowrap self-start">
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SideNavBar;
