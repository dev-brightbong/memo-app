import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MemoPage from "./pages/memo/MemoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memo" element={<MemoPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
