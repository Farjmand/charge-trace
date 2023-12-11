import { useState } from "react";
const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="justify-center items-stretch bg-white self-stretch flex flex-col px-8 py-4 max-md:max-w-full max-md:px-5">
      <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="justify-center bg-zinc-100 flex grow basis-[0%] flex-col pl-3.5 pr-16 py-3 rounded-lg items-start max-md:pr-5">
          <div className="flex gap-4 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cdb32c8dbf2eab274fba2f131390ca49759f7324df6e8a9f9b3a607a414da04?apiKey=8a3180dfeb704004a0910dd8155fa469&"
              className="aspect-square object-contain object-center w-5 fill-gray-500 overflow-hidden shrink-0 max-w-full"
            />
            <div className="items-stretch self-stretch flex justify-between gap-1">
              <div className="rounded bg-amber-500 flex w-0.5 shrink-0 h-[22px] flex-col" />
              <div className="text-gray-500 text-base font-medium grow whitespace-nowrap self-start">
                Search or type
              </div>
            </div>
          </div>
        </div>
        <div className="items-center self-stretch flex justify-between gap-5 relative">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/addf2ac7815481a8169df616a09675f967e25119f4a558b9784b98242e7c4ba1?apiKey=8a3180dfeb704004a0910dd8155fa469&"
            className="aspect-square object-contain object-center w-12 overflow-hidden self-stretch shrink-0 max-w-full" onClick={toggleDropdown}
          />
            {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Logout
            </a>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
