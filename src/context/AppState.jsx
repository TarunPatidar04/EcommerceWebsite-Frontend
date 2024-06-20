import React from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const data = 10;
  return (
    <div>
      <AppContext.Provider value={{ data }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;
