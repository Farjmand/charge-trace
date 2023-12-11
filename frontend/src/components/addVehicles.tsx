import { useState, ChangeEvent } from "react";
import axios from 'axios';
type AddVehicleProps = {
  onClose: () => void;

};
const AddVehicle: React.FC<AddVehicleProps> = (props) => {
  
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
    { name: "BMW", models: [{
        name: "i3", years: ["2021", "2022", "2023"]},
        { name: "i4" , years:["2022"] } 
    ] },
    { name: "Volkswagen", models: [{
        name: "ID.4", years: ["2021", "2022", "2023"]},
        { name: "e-Golf", years: ["2021", "2022", "2023"] } ] },
  ];
  const [showModal, setShowModal] = useState(false);
  const [vehicleData, setVehicleData] = useState({
    make: "",
    model: "",
    year: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const handleAddVehicle = () => {
        const url = "http://127.0.0.1:8000/api";
        axios.post(`${url}/vehicles/`, vehicleData)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
    };
    // Reset the vehicleData state
    setVehicleData({
      make: "",
      model: "",
      year: "",
    });

    // Close the modal
    setShowModal(false);


  return (
    <div>
      {/* Add Vehicle Button */}
      <button onClick={() => setShowModal(true)}>Add Vehicle</button>

      {/* Modal */}
      {showModal && (
        <div>
          <div>Make:</div>
          <select
            name="make"
            value={vehicleData.make}
            onChange={handleInputChange}
          >
            <option value="">Select Make</option>
            {electricVehicleCompanies.map((company) => (
              <option key={company.name} value={company.name}>
                {company.name}
              </option>
            ))}
          </select>

          {vehicleData.make && (
            <>
              <div>Model:</div>
              <select
                name="model"
                value={vehicleData.model}
                onChange={handleInputChange}
              >
                <option value="">Select Model</option>
                {electricVehicleCompanies
                  .find((company) => company.name === vehicleData.make)
                  ?.models.map((model) => (
                    <option key={model.name} value={model.name}>
                      {model.name}
                    </option>
                  ))}
              </select>
            </>
          )}

          {vehicleData.model && (
            <>
              <div>Year:</div>
            <select
                name="year"
                value={vehicleData.year}
                onChange={handleInputChange}
            >
                <option value="">Select Year</option>
                {electricVehicleCompanies
                    .find((company) => company.name === vehicleData.make)
                    ?.models.find((model) => model.name === vehicleData.model)
                    ?.years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
            </select>
            </>
          )}

          <button onClick={handleAddVehicle}>Add Vehicle</button>
        </div>
      )}
    </div>
  );
};
export default AddVehicle;
