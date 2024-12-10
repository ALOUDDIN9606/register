import CreateWork from "./pages/create";
import Portfolio from "./pages/portfolio";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateWork />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
