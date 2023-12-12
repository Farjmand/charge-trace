import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Topbar from "./TopBar";
import filled from "../assets/Lightning/Filled.png";
import vector from "../assets/Lightning/Vector.png";
import drop from "../assets/Lightning/drop.png";
import piechart from "../assets/Lightning/pie-chart.png";
import SideNavBar from "./SideNavBar";
import LineChart from "./Chart";
import { getStoredToken } from "../utils/auth";
type Vehicle = {
  id: number;
  company: string;
  model: string;
  charging_start_time: string;
  charging_end_time: string;
};
const Dashboard: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const token = getStoredToken();
        const csrfResponse = await axios.get("/csrf");
        const xcsrfToken = csrfResponse.data.csrfToken;
        const config = {
          headers: {
            Authorization: `Token ${token}`,
            "X-CSRF-Token": xcsrfToken,
          },
        };
        console.log(`Config ${config.headers.Authorization}`);
        console.log(`Token ${token}`);
        const response = await axios.get("/users/vehicle_list", config);
        console.log(`Data ${response.data}`);
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="container mx-auto gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
       
          <SideNavBar />

        <div className="flex flex-col items-stretch w-[81%] ml-5 my-5 pb-5 max-md:w-full max-md:ml-0">
          <div className="w-[1016px] h-[266px] justify-start self-stretch items-start gap-[30px] inline-flex pb-10 mb-10">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="grow shrink basis-0 h-[266px] px-[60px] py-5 bg-white rounded-[14px] justify-center items-center gap-2.5 flex"
              >
                <div className="flex-col justify-start items-center gap-[30px] inline-flex">
                  <div className="flex-col justify-start items-center gap-2.5 flex">
                    <div className="w-[38px] h-[38px] relative">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1b351d6c574c8eeda742fd7dfce917d28acb0fc8a14a5711f948fbfe7d2e27?apiKey=8a3180dfeb704004a0910dd8155fa469&"
                        className="aspect-[2.63] object-contain object-center w-[55px] overflow-hidden max-w-full mt-3"
                      />
                    </div>
                    <div className="text-black text-2xl font-bold font-['DM Sans']">
                      {vehicle.company}
                    </div>
                  </div>
                  <div className="w-[12rem] h-18 relative mb-10">
                    <p className="absolute text-purple text-[14px] leading-tight font-bold font-['DM Sans']">
                      Car Charging Time Start at: {vehicle.charging_start_time}{" "}
                    </p>
                  </div>
                  <div className="w-[12rem] h-18 relative">
                    <p className="absolute text-purple text-[14px] font-bold font-['DM Sans']">
                      Car Charging Time End at:
                      {vehicle.charging_end_time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[1016px] h-[266px] justify-start self-stretch items-start gap-[30px] inline-flex pb-10">
            <div className="grow shrink basis-0 h-[266px] px-[60px] py-5 bg-purple rounded-[14px] justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-[30px] inline-flex">
                <div className="flex-col justify-start items-center gap-2.5 flex">
                  <div className="w-[38px] h-[38px] relative">
                    <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-#A66FF0 rounded-full" />
                    <img
                      src={filled}
                      className="w-5 h-5 left-[9px] top-[9px] absolute"
                    />
                  </div>
                  <div className="text-white text-2xl font-bold font-['DM Sans']">
                    Charging
                  </div>
                </div>
                <div className="w-28 h-28 relative">
                  <div className="w-28 h-28 left-0 top-0 absolute bg-[#FFFFFF] rounded-full" />
                  <div className="left-[30px] top-[36px] absolute text-white text-2xl font-bold font-['DM Sans']">
                    45%
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 h-[266px] px-[60px] py-5 bg-[#FFFFFF] rounded-[14px] justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-[30px] inline-flex">
                <div className="flex-col justify-start items-center gap-2.5 flex">
                  <div className="w-[38px] h-[38px] relative">
                    <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-#FF7E86 bg-opacity-10 rounded-full" />
                    <div className="w-5 h-5 left-[9px] top-[9px] absolute">
                      <img
                        src={vector}
                        className="w-2 h-auto left-0 top-0 absolute shadow"
                      />
                    </div>
                  </div>
                  <div className="text-zinc-800 text-2xl font-bold font-['DM Sans']">
                    Range
                  </div>
                </div>
                <div className="w-28 h-28 relative">
                  <div className="w-28 h-28 left-0 top-0 absolute bg-slate-100 rounded-full" />
                  <img
                    src={piechart}
                    className="w-28 h-28 left-0 top-0 absolute rounded-full"
                  />
                  <div className="left-[21px] top-[36px] absolute text-zinc-800 text-2xl font-bold font-['DM Sans']"></div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 h-[266px] px-11 py-[19px] bg-[#FFFFFF] rounded-[14px] justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-[30px] inline-flex">
                <div className="flex-col justify-start items-center gap-2.5 flex">
                  <div className="w-[38px] h-[38px] relative">
                    <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-[#A162F7] bg-opacity-10 rounded-full" />
                    <div className="w-5 h-5 left-[9px] top-[9px] absolute">
                      <img
                        src={drop}
                        className="w-5 h-auto left-0 top-0 absolute"
                      />
                    </div>
                  </div>
                  <div className="text-zinc-800 text-2xl font-bold font-['DM Sans']">
                    Break fluid
                  </div>
                </div>
                <div className="w-28 h-28 relative">
                  <div className="w-28 h-28 left-0 top-0 absolute bg-slate-100 rounded-full" />
                  <div className="w-28 h-28 left-0 top-0 absolute bg-purple rounded-full" />
                  <div className="left-[38px] top-[36px] absolute text-zinc-800 text-2xl font-bold font-['DM Sans']">
                    9%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="mb-5"> Live Electricity Prices </h1>
            <p>
              {" "}
              We show you live prices so that you can get proper estimations for
              smart charging of your car{" "}
            </p>
            <div className="chart-container">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
