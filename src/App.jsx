import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { ScrapingStatus } from "./pages/ScrapingStatus";
import { IntegrationDashboard } from "./pages/IntegrationDashboard";
import { OrganizationSetup } from "./pages/OrganizationSetup";
import { Verification } from "./pages/Verification";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/setup-org" element={<OrganizationSetup />} />
        <Route path="/scraping-status" element={<ScrapingStatus />} />
        <Route path="/integration" element={<IntegrationDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
