import { useState } from "react";
import Marker from "./Marker";

const Create = ({ back }) => {
  const [steps, setSteps] = useState([]);
  const [markers, setMarkers] = useState([]);
  const addMarker = (marker) => setMarkers([...markers, marker]);
  const resetMarkers = () => setMarkers([]);
  const nextStep = () => {
    setSteps([...steps, markers]);
    setMarkers([]);
  };
  const previousStep = () => {
    setSteps(steps.slice(0, -1));
    setMarkers(...steps.slice(-1));
  };
  const submit = () => {
    const newSteps = [...steps, markers];
    setSteps(newSteps);
    setMarkers([]);
    localStorage.setItem("steps", JSON.stringify(newSteps));
    back();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", bottom: 5, right: 5, padding: 5 }}>
        <button
          style={{
            marginRight: 5,
            padding: 5,
            backgroundColor: "red",
            borderColor: "red",
          }}
          onClick={previousStep}
        >
          Discard & Previous
        </button>
        <button style={{ marginRight: 5, padding: 5 }} onClick={resetMarkers}>
          Reset Step
        </button>
        <button
          style={{ marginRight: 5, padding: 5 }}
          onClick={nextStep}
          disabled={markers.length < 4}
        >
          Save & Next
        </button>
        <button
          disabled={markers.length < 4}
          style={{ backgroundColor: "green", borderColor: "green", padding: 5 }}
          onClick={submit}
        >
          Save & Submit
        </button>
      </div>
      <Marker src="sample.jpeg" markers={markers} onAddMarker={addMarker} />
    </div>
  );
};

export default Create;
