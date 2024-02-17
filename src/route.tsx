import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Auth from "./components/auth";
import NotFound from "./pages/notFound";
import AboutPage from "./pages/about";
import AdminPage from "./pages/admin";

import Dashboard from "./components/student_dashboard/layout";

import { Explore, StudentHome, StudentNote } from "./pages/student_dashboard";
import { Cordinator, CourseHome, CourseOutline } from "./pages/course";
import ObjectDetection from "./components/scanner";

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
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/scanner" element={<ObjectDetection />} />

      <Route path="/student/dashboard" element={<StudentHome />} />
      <Route path="/student/explore" element={<Explore />} />
      <Route path="/student/notes" element={<StudentNote />} />

      <Route path="/student/course/1" element={<CourseHome />} />
      <Route path="/student/course/1/outline" element={<CourseOutline />} />
      <Route path="/student/course/1/cordinator" element={<Cordinator />} />

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
