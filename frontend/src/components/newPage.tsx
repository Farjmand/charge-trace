




<div className="w-[1016px] h-[266px] justify-start self-stretch items-start gap-[30px] inline-flex pb-10">
  {vehicles.map((vehicle, index) => (
            <div  key={vehicle.id} className="grow shrink basis-0 h-[266px] px-[60px] py-5 bg-purple rounded-[14px] justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-[30px] inline-flex">
                <div className="flex-col justify-start items-center gap-2.5 flex">
                  <div className="w-[38px] h-[38px] relative">
                    <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-#A66FF0 rounded-full" />
                    <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&"
        className="aspect-[2.63] object-contain object-center w-[24px] overflow-hidden max-w-full mt-3"
      />
                  </div>
                  <div className="text-white text-2xl font-bold font-['DM Sans']">
                  {vehicle.company}
                  </div>
                </div>
                <div className="w-28 h-28 relative">
                  <div className="w-28 h-28 left-0 top-0 absolute bg-[#FFFFFF] rounded-full" />
                  <div className="left-[30px] top-[36px] absolute text-white text-2xl font-bold font-['DM Sans']">
                  Car Charging Time Start at:{" "}
          {vehicle.charging_start_time}
                  </div>
                </div>
              </div>
            </div>
</div>