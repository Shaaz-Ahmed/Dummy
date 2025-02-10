import React from "react";
import MDBtn from "./components/MDBtn";

const App = () => {
  return (
    <div>
      <MDBtn color="primary" size="large" onClick={() => alert("Button clicked!")}>
        Primary Button
      </MDBtn>
      <MDBtn color="secondary" size="small" disabled>
        Disabled Secondary Button
      </MDBtn>
      <MDBtn color="success" size="medium">
        Success Button
      </MDBtn>
    </div>
  );
};

export default App;
