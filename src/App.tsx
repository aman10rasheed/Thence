import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Getproject from "./pages/Getproject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/getproject" element={<Getproject />} />
    </Routes>
  );
}

export default App;
