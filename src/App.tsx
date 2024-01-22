import Auth from "./pages/auth";

import { Courses, Testimonial } from "./components/landing";

export default function App() {
  return (
    <section>
      <Auth />
      <Courses />
      <Testimonial />
    </section>
  );
}
