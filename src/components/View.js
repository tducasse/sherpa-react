import { useEffect, useState } from "react";
import Marker from "./Marker";

const View = ({ back }) => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const savedSteps = localStorage.getItem("steps");
    if (!savedSteps) {
      console.error("no saved steps found");
    } else {
      try {
        const parsedSteps = JSON.parse(savedSteps);
        setSteps(parsedSteps);
      } catch (e) {
        console.error("could not parse steps");
      }
    }
  }, []);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", bottom: 5, right: 5, padding: 5 }}>
        <button
          disabled={!currentStep}
          style={{
            marginRight: 5,
            padding: 5,
          }}
          onClick={previousStep}
        >
          Previous
        </button>
        <button
          disabled={currentStep === steps.length - 1}
          style={{ marginRight: 5, padding: 5 }}
          onClick={nextStep}
        >
          Next
        </button>
        <button style={{ padding: 5 }} onClick={back}>
          Back
        </button>
      </div>
      <Marker
        src="sample.jpeg"
        markers={steps.length ? steps[currentStep] : []}
      />
    </div>
  );
};

export default View;
