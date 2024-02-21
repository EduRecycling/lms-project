import {
  Banner,
  Courses,
  Footer,
  Navbar,
  Offering,
  Partners,
  Reason,
} from "../../components/landing";

export default function LandingPage() {
  return (
    <div className="Home bg-special-50">
      <div className="flex flex-col h-svh">
        <Navbar />
        <Banner />
      </div>
      <Offering />
      <Reason />
      <Courses />
      {/* <Testimonial /> */}
      <Partners />
      <Footer />
    </div>
  );
}
