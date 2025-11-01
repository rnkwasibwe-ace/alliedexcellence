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
    <section className="py-20 bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] animate-gradient relative overflow-hidden">
      {/* Animated Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[hsl(195,100%,50%)] rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[hsl(270,75%,50%)] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[hsl(195,100%,50%)] to-[hsl(195,100%,40%)] rounded-full flex items-center justify-center shadow-[0_0_50px_hsl(195,100%,50%/0.8)] glow-effect">
              <Calendar className="text-white" size={40} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Achieve Greater Impact with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,70%)] to-[hsl(195,100%,50%)]"> Financial Clarity</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Stop worrying about compliance and start focusing on your mission. Contact ACE today to discuss a fractional solution tailored for your NGO.
          </p>

          {/* Benefits List */}
          <div className="mb-10">
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-white/90">
                  <CheckCircle className="text-[hsl(195,100%,50%)] flex-shrink-0" size={20} />
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
              className="bg-gradient-to-r from-[hsl(15,90%,55%)] to-[hsl(15,90%,50%)] hover:shadow-[0_0_40px_hsl(15,90%,55%/0.8)] text-white font-bold px-8 py-4 text-lg group transition-all duration-300"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[hsl(220,85%,8%)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
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