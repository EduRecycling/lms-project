import {
  Courses,
  Testimonial,
  Banner,
  Offering,
  Reason,
  Partners,
  Footer,
  Navbar,
} from "../../components/landing";

export default function LandingPage() {
  return (
    <section className={`p-[5%] w-full`}>
      <Navbar />
      <Banner />
      <Offering />
      <Courses />
      <Partners />
      <Testimonial />
      <Footer />
    </section>
  );
}
