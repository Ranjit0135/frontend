import { BrowserRouter as Routes } from "react-router-dom";
import CustonRoutes from "./routing/CustonRoutes";
function App() {
  return (
    <>
      <Routes>
        <CustonRoutes />
      </Routes>
    </>
  );
}

export default App;
