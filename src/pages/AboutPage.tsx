import Header from "@/components/Header";
import About from "@/components/About";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
        <Team />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default AboutPage;
