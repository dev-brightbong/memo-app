import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MemoPage from "./pages/memo/MemoPage";
import DefaultLayout from "./components/Layout/DefaultLayout";
import RedirectPage from "./pages/redirect/RedirectPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/memo" element={<MemoPage />} />
        </Route>
        <Route path="*" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
