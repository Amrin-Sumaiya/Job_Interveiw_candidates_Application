import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/common/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import CandidatePages from "./pages/CandidatePages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="candidates" element={<CandidatePages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
