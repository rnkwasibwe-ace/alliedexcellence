import Header from "@/components/Header";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServicesPage;
