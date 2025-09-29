import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Free 30-minute consultation to assess your needs",
    "Customized financial strategy recommendations", 
    "No obligation - just expert insights for your NGO"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Calendar className="text-white" size={40} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Achieve Greater Impact with 
            <span className="text-ace-cyan"> Financial Clarity</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Stop worrying about compliance and start focusing on your mission. Contact ACE today to discuss a fractional solution tailored for your NGO.
          </p>

          {/* Benefits List */}
          <div className="mb-10">
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-white/90">
                  <CheckCircle className="text-ace-cyan flex-shrink-0" size={20} />
                  <span className="text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-ace-orange hover:bg-ace-orange/90 text-white font-bold px-8 py-4 text-lg group shadow-strong"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-ace-blue px-8 py-4 text-lg backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              Trusted by NGOs across East Africa • FCCA Certified • 20+ Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;