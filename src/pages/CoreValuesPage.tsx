import Header from "@/components/Header";
import CoreValues from "@/components/CoreValues";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const CoreValuesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <CoreValues />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default CoreValuesPage;
