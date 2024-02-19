/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Auth from "./components/auth";
import NotFound from "./pages/notFound";
import AboutPage from "./pages/about";
import AdminPage from "./pages/admin";

import { Explore, StudentHome, StudentNote } from "./pages/student_dashboard";
import {
  Certificate,
  Cordinator,
  CourseHome,
  CourseOutline,
} from "./pages/course";
import ObjectDetection from "./components/scanner";
import { UseAuth } from "./firebase/authFuntions";
import { ReactElement } from "react";

const course = [
  {
    path: "/course/:id",
    element: (
      <PrivateRoute>
        <LayoutComponent />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <CourseHome />,
      },
      {
        path: "/course/:id/outline",
        element: <CourseOutline />,
      },
      {
        path: "/course/:id/cordinator",
        element: <Cordinator />,
      },
      {
        path: "/course/:id/certificate",
        element: <Certificate />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/courses",
        element: <Explore />,
      },
      {
        path: "/help",
        element: <h1>Need Help?</h1>,
      },
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/scanner",
        element: <ObjectDetection />,
      },
    ],
  },
  ...course,
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <LayoutComponent />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <RoleSwitch admin={<AdminPage />} student={<StudentHome />} />,
      },
      {
        path: "/dashboard/explore",
        element: <Explore />,
      },
      {
        path: "/dashboard/notes",
        element: <StudentNote />,
      },
      {
        path: "/dashboard/profile",
        element: <div>student profile</div>,
      },
      {
        path: "/dashboard/feedback",
        element: <div>feedbacks</div>,
      },
      {
        path: "/dashboard/certificates",
        element: <div>certificates</div>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function LayoutComponent() {
  return (
    <>
      <Outlet /> {/* Nested routes render here */}
    </>
  );
}

function RoleSwitch(admin: any, student: any) {
  const { user } = UseAuth();
  if (user.role === "ADMIN") return admin;
  return user.role === "ADMIN" ? admin : student;
}

function PrivateRoute({ children }: { children: ReactElement }) {
  const { user } = UseAuth();
  return user ? children : <Navigate to="/login" />;
}

export default router;
