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
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/student",
        element: (
          <PrivateRoute>
            <LayoutComponent />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            path: "/dashboard",
            element: <StudentHome />,
          },
          {
            path: "/dashboard",
            element: <StudentHome />,
          },
          {
            path: "/explore",
            element: <Explore />,
          },
          {
            path: "/notes",
            element: <StudentNote />,
          },
          {
            path: "/profile",
            element: <div>student profile</div>,
          },
          {
            path: "/feedback",
            element: <div>feedbacks</div>,
          },
          {
            path: "/certificates",
            element: <div>certificates</div>,
          },
        ],
      },
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

function PrivateRoute({ children }: { children: ReactElement }) {
  const { user } = UseAuth();
  return user ? children : <Navigate to="/login" />;
}

// const PageRoute = () => {
//   const SubPages = [
//     {
//       id: "1",
//       element: <div>ff</div>,
//       url: "/profile",
//     },
//     {
//       id: "2",
//       element: <div>fe</div>,
//       url: "/feedback",
//     },
//     {
//       id: "3",
//       element: <div>fr</div>,
//       url: "/certificate",
//     },
//   ];

//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/courses" element={<Explore />} />
//       <Route path="/help" element={<h1>Need Help?</h1>} />
//       <Route path="/login" element={<Auth />} />
//       <Route path="/scanner" element={<ObjectDetection />} />

//       <Route
//         path="/admin"
//         element={
//           <ProtectedRoute>
//             <AdminPage />
//           </ProtectedRoute>
//         }
//       />

//       <Route path="/dashboard" element={<StudentHome />} />
//       <Route path="/explore" element={<Explore />} />
//       <Route path="/notes" element={<StudentNote />} />

//       <Route path="/course/1" element={<CourseHome />} />
//       <Route path="/course/1/outline" element={<CourseOutline />} />
//       <Route path="/course/1/cordinator" element={<Cordinator />} />
//       <Route path="/course/1/certificate" element={<Certificate />} />

//       {SubPages.map((spage) => {
//         return (
//           <Route
//             path={spage.url}
//             key={spage.id}
//             element={<Dashboard>{spage.element}</Dashboard>}
//           />
//         );
//       })}

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

export default router;
