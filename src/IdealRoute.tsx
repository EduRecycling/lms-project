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
        element: <RoleSwitch Admin={NotFound} Student={CourseHome} />,
      },
      {
        path: "/course/:id/outline",
        element: <CourseOutline />,
      },
      {
        path: "/course/:id/lesson/:sn",
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
        element: (
          <PrivateRoute>
            <Explore />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <ObjectDetection />
          </PrivateRoute>
        ),
      },
    ],
  },
  ...course,
  {
    path: "/dashboard",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <RoleSwitch Admin={AdminPage} Student={StudentHome} />,
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

function RoleSwitch({
  Admin,
  Student,
}: {
  Admin: React.ComponentType<any>;
  Student: React.ComponentType<any>;
}) {
  const { user } = UseAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user && user.role === "ADMIN") {
    return <Admin />;
  } else {
    return <Student />;
  }
}

function PrivateRoute({ children }: { children: ReactElement }) {
  const { user } = UseAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

// function Preloader() {
//   return (
//     <div className="preloader min-h-svh h-vh w-full text-center place-content-center place-items-center p-4">
//       <div className="inner">
//         <h4 className="text-2xl">Loading...</h4>
//       </div>
//     </div>
//   );
// }

export default router;
