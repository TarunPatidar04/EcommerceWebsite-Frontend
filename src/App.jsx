import React, { useContext } from "react";
import AppContext from "./context/AppContext";
const App = () => {
  const { data } = useContext(AppContext);
  return <div>App {data}</div>;
};

export default App;
