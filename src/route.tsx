import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Auth from "./pages/auth";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default PageRoute;
