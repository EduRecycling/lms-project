import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Auth from "./components/auth";
import NotFound from "./pages/notFound";
import AboutPage from "./pages/about";
import Dashboard from "./components/student_dashboard";
import AdminPage from "./pages/admin";

import Main from "./pages/student_dashboard/main";
import Explore from "./pages/student_dashboard/explore_courses";
import Notes from "./pages/student_dashboard/notes";

const PageRoute = () => {
  const SubPages = [
    {
      id: "1",
      element: <div>ff</div>,
      url: "/student/profile",
    },
    {
      id: "2",
      element: <div>fe</div>,
      url: "/student/feedback",
    },
    {
      id: "3",
      element: <div>fr</div>,
      url: "/student/certificate",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<h1>Courses</h1>} />
      <Route path="/help" element={<h1>Need Help?</h1>} />
      <Route path="/login" element={<Auth />} />

      <Route
        path="/student/dashboard"
        element={
          <Dashboard>
            <Main />
          </Dashboard>
        }
      />
      <Route
        path="/student/explore"
        element={
          <Dashboard>
            <Explore />
          </Dashboard>
        }
      />
      <Route
        path="/student/notes"
        element={
          <Dashboard>
            <Notes />
          </Dashboard>
        }
      />

      {SubPages.map((spage) => {
        return (
          <Route
            path={spage.url}
            key={spage.id}
            element={<Dashboard>{spage.element}</Dashboard>}
          />
        );
      })}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoute;
