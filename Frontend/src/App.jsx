import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/common/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import CandidateTable from "./component/candidates/CandidatesTable";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/candidates" element={<CandidateTable />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
