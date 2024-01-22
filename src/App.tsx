import { Courses, Testimonial } from "./components/landing";

export default function App() {
  return (
    <section>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Courses />
      <Testimonial />
    </section>
  );
}
