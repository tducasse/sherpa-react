import { useState } from "react";
import Create from "./components/Create";
import View from "./components/View";

const states = {
  view: View,
  create: Create,
};

const App = () => {
  const [state, setState] = useState("");
  const create = () => setState("create");
  const view = () => setState("view");
  const back = () => {
    setState("");
  };

  const Component = states[state];
  return (
    <>
      {!state ? (
        <div>
          <button style={{ marginRight: 5 }} onClick={create}>
            Create
          </button>
          <button onClick={view}>View</button>
        </div>
      ) : (
        <Component back={back} />
      )}
    </>
  );
};

export default App;
