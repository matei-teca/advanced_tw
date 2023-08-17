import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function CaloriesCalculator({ useremail, informations, setUser }) {
  const [activityLevel, setActivityLevel] = useState("");
  const [addInformationsTem, setAddInformations] = useState(informations ? informations : {
    gender: "",
    activityLevel: "",
    height: "",
    weight: "",
    age: "",
    fitnessTarget: "",
  });

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setAddInformations({ ...addInformationsTem, [id]: value });
  };

  const addInformations = () => {
    const BMR =
    addInformationsTem.gender === "FEMALE"
      ? 655 +
        9.6 * addInformationsTem.weight +
        1.8 * addInformationsTem.height -
        4.7 * addInformationsTem.age
      : 66 +
        13.7 * addInformationsTem.weight +
        5 * addInformationsTem.height -
        6.8 * addInformationsTem.age;

  const ACTIVITYLEVEL =
    addInformationsTem.activityLevel === "SEDENTARY"
      ? BMR * 1.2
      : addInformationsTem.activityLevel === "LIGHTLY_ACTIVE"
      ? BMR * 1.375
      : addInformationsTem.activityLevel === "MODERATELY_ACTIVE"
      ? BMR * 1.55
      : addInformationsTem.activityLevel === "VERY_ACTIVE"
      ? BMR * 1.725
      : addInformationsTem.activityLevel === "EXTRA_ACTIVE"
      ? BMR * 1.9
      : 0;

  const CALORIES =
    addInformationsTem.fitnessTarget === "MAINTAIN"
      ? ACTIVITYLEVEL
      : addInformationsTem.fitnessTarget === "LOSE"
      ? ACTIVITYLEVEL * 0.8
      : addInformationsTem.fitnessTarget === "GAIN"
      ? ACTIVITYLEVEL * 1.2
      : 0;

    fetch(`http://localhost:8080/api/user/update/personalInfo/${useremail}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({personalInformation: addInformationsTem, calories: Math.floor(CALORIES)}),
    }).then(res => res.json()).then(data => setUser(data));
  };
  
  return (
    <Popup
      trigger={<button> Calories calculator </button>}
      modal
      className="my-profile-popup"
    >
      {(close) => (
        <div className="my-profile-modal">
          <h1>Complete your details</h1>
          <select id="gender" onChange={onChangeInput}>
            <option></option>
            <option value="MALE">Mr</option>
            <option value="FEMALE">Mrs</option>
            <option value="OTHER">Other</option>
          </select>
          <select
            id="activityLevel"
            onChange={(e) => {
              setActivityLevel(e.target.value);
              onChangeInput(e);
            }}
          >
            <option>Select one</option>
            <option value="SEDENTARY">Sedentary</option>
            <option value="LIGHTLY_ACTIVE">Lightly active</option>
            <option value="MODERATELY_ACTIVE">Moderatly active</option>
            <option value="VERY_ACTIVE">Very active</option>
            <option value="EXTRA_ACTIVE">Extra active</option>
          </select>
          <p>
            {activityLevel === "SEDENTARY"
              ? "Little or no exercise"
              : activityLevel === "LIGHTLY_ACTIVE"
              ? "Light exercise 1-3 days per week"
              : activityLevel === "MODERATELY_ACTIVE"
              ? "Moderate exercise 3-5 days per week"
              : activityLevel === "VERY_ACTIVE"
              ? "Hard exercise 6-7 days per week"
              : activityLevel === "EXTRA_ACTIVE"
              ? "Very hard exercise, physical job or training twice a day"
              : "More informations here"}
          </p>
          <label>Height(cm):</label>
          <input type="number" contentEditable min="0" id="height" onChange={onChangeInput} />
          <label>Weight(kg):</label>
          <input type="number" contentEditable min="0" id="weight" onChange={onChangeInput} />
          <label>Age:</label>
          <input type="number" contentEditable min="5" id="age" onChange={onChangeInput} />
          <select id="target" onChange={onChangeInput}>
            <option>Target</option>
            <option value="maintain">Maintain</option>
            <option value="LOSE">Lose</option>
            <option value="GAIN">Gain</option>
          </select>
          <div style={{ display: "flex" }} className="my-profile-modal-close">
            <button
              onClick={() => {
                close();
                setActivityLevel("");
              }}
            >
              Close
            </button>
            <button
              onClick={() => {
                addInformations();
                close();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
