import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Getproject from "./pages/Getproject";
import Congratulation from "./pages/Congratulations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/getproject" element={<Getproject />} />
      <Route path="/congratulation" element={<Congratulation />} />
    </Routes>
  );
}

export default App;
