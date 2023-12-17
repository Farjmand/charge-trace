import React, { useState, ChangeEvent } from "react";
import axios from "../utils/axios";
import SideNavBar from "./SideNavBar";
import { getStoredToken } from "../utils/auth";

const AddVehicle: React.FC = () => {
  const electricVehicleCompanies = [
    {
      name: "Tesla",
      models: [
        {
          name: "Model S",
          years: ["2021", "2022", "2023"],
        },
        {
          name: "Model 3",
          years: ["2021", "2022", "2023"],
        },
        {
          name: "Model X",
          years: ["2021", "2022", "2023"],
        },
        {
          name: "Model Y",
          years: ["2021", "2022", "2023"],
        },
      ],
    },
    {
      name: "Nissan",
      models: [
        {
          name: "LEAF",
          years: ["2022", "2023"],
        },
      ],
    },
    {
      name: "Chevrolet",
      models: [
        {
          name: "Bolt EV",
          years: ["2021", "2022", "2023"],
        },
      ],
    },
    {
      name: "BMW",
      models: [
        {
          name: "i3",
          years: ["2021", "2022", "2023"],
        },
        { name: "i4", years: ["2022"] },
      ],
    },
    {
      name: "Volkswagen",
      models: [
        {
          name: "ID.4",
          years: ["2021", "2022", "2023"],
        },
        { name: "e-Golf", years: ["2021", "2022", "2023"] },
      ],
    },
  ];
  const [vehicleData, setVehicleData] = useState({
    company: "",
    model: "",
    year: "",
    charging_start_time: "",
    charging_end_time: "",
  });


  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = getStoredToken();
    const csrfResponse = await axios.get("/csrf");
    const xcsrfToken = csrfResponse.data.csrfToken;
    const config = {
      headers: {
        Authorization: `Token ${token}`,
        "X-CSRF-Token": xcsrfToken,
      },
    };
    try{
   
      await axios.post('/vehicles/', vehicleData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // Reset the vehicleData state
    setVehicleData({
      company: "",
      model: "",
      year: "",
      charging_start_time: "",
      charging_end_time: "",
    });

  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div className="container mx-auto gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[19%] ml-5 my-5 pb-5 max-md:w-full max-md:ml-0">
    <SideNavBar />
    </div>
    <div className="justify-center items-center w-[81%] bg-white flex flex-col px-20 py-12 max-md:px-5">
      <h1 className="text-center text-black"> Add New Car </h1>
      <p className="text-center text-black"> To add a new car, simply select the make, model, and year of your car. </p>
      <form onSubmit={handleSubmit}>
      <div className="items-stretch border border-[color:var(--6,#F4F5F6)] shadow-2xl bg-white flex w-[506px] max-w-full flex-col mt-10 pl-5 pr-10 py-5 rounded-xl border-solid max-md:pr-5">
   
      <label className="text-zinc-800 text-left font-medium whitespace-nowrap max-md:max-w-full">Make: </label>
        <select
        className="text-slate-500 text-base whitespace-nowrap border justify-center mt-3 pl-5 pr-16 py-5 rounded-xl border-solid border-gray-400 items-start max-md:max-w-full max-md:pr-5"
          name="company"
          value={vehicleData.company}
          onChange={handleInputChange}
        >
          <option value="">Select Make</option>
          {electricVehicleCompanies.map((company) => (
            <option key={company.name} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
</div>
        {vehicleData.company && (
            <div className="items-stretch border border-[color:var(--6,#F4F5F6)] shadow-2xl bg-white flex w-[506px] max-w-full flex-col mt-10 pl-5 pr-10 py-5 rounded-xl border-solid max-md:pr-5">
   
            <label className="text-zinc-800 text-left font-medium whitespace-nowrap max-md:max-w-full">Model: </label>
            <select
              name="model"
              value={vehicleData.model}
              onChange={handleInputChange}
              className="text-slate-500 text-base whitespace-nowrap border justify-center mt-3 pl-5 pr-16 py-5 rounded-xl border-solid border-gray-400 items-start max-md:max-w-full max-md:pr-5"
            >
              <option value="">Select Model</option>
              {electricVehicleCompanies
                .find((company) => company.name === vehicleData.company)
                ?.models.map((model) => (
                  <option key={model.name} value={model.name}>
                    {model.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        {vehicleData.model && (
          <div className="items-stretch border border-[color:var(--6,#F4F5F6)] shadow-2xl bg-white flex w-[506px] max-w-full flex-col mt-10 pl-5 pr-10 py-5 rounded-xl border-solid max-md:pr-5">
            <label>Year: </label>
            <select
              name="year"
              value={vehicleData.year}
              onChange={handleInputChange}
              className="text-slate-500 text-base whitespace-nowrap border justify-center mt-3 pl-5 pr-16 py-5 rounded-xl border-solid border-gray-400 items-start max-md:max-w-full max-md:pr-5"
            >
              <option value="">Select Year</option>
              {electricVehicleCompanies
                .find((company) => company.name === vehicleData.company)
                ?.models.find((model) => model.name === vehicleData.model)
                ?.years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
            </select>
          </div>
        )}
          <div className="items-stretch border border-[color:var(--6,#F4F5F6)] shadow-2xl bg-white flex w-[506px] max-w-full flex-col mt-10 pl-5 pr-10 py-5 rounded-xl border-solid max-md:pr-5">
            <label>Charging Start Time: </label>
            <select
              name="charging_start_time"
              value={vehicleData.charging_start_time}
              onChange={handleInputChange}
              className="text-slate-500 text-base whitespace-nowrap border justify-center mt-3 pl-5 pr-16 py-5 rounded-xl border-solid border-gray-400 items-start max-md:max-w-full max-md:pr-5"
            >
                <option value="">Select Vehicle Charging Time</option>
                <option value="08:00">08:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="04:00">04:00 PM</option>
                <option value="08:00">08:00 PM</option>
             
            </select>
          </div>
          <div className="items-stretch border border-[color:var(--6,#F4F5F6)] shadow-2xl bg-white flex w-[506px] max-w-full flex-col mt-10 pl-5 pr-10 py-5 rounded-xl border-solid max-md:pr-5">
            <label>Charging End Time Time: </label>
            <select
              name="charging_end_time"
              value={vehicleData.charging_end_time}
              onChange={handleInputChange}
              className="text-slate-500 text-base whitespace-nowrap border justify-center mt-3 pl-5 pr-16 py-5 rounded-xl border-solid border-gray-400 items-start max-md:max-w-full max-md:pr-5"
            >
                <option value="">Select Vehicle Charging End Time</option>
                <option value="08:00">08:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="04:00">04:00 PM</option>
                <option value="08:00">08:00 PM</option>
             
            </select>
          </div>
        <button
          className="flex-col text-stone-50 text-xl bg-purple font-bold relative whitespace-nowrap fill-purple-500 overflow-hidden min-h-[60px] w-[506px] max-w-full justify-center items-center mt-8 mb-20 px-16 py-5 max-md:mb-10 max-md:px-5"
        >
          Add Vehicle
        </button>
      </form>
    </div>
    </div>
  );
};
export default AddVehicle;
