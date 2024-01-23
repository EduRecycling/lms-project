import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Auth from "./pages/auth";
import NotFound from "./pages/notFound";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<h1>About Us</h1>} />
      <Route path="/courses" element={<h1>Courses</h1>} />
      <Route path="/help" element={<h1>Need Help?</h1>} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoute;
