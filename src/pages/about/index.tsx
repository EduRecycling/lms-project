import { Banner, OurStory, Reason, Visions } from "../../components/about";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function AboutPage() {
  return (
    <div className="Home bg-special-50">
      <div className="flex flex-col h-svh">
        <Navbar />
        <Banner />
      </div>
      <Reason />
      <OurStory />
      <Visions />
      <Footer />
    </div>
  );
}

export default AboutPage;
