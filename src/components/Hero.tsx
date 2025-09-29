import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="text-ace-cyan" size={24} />
              <span className="text-ace-cyan font-semibold">Financial Excellence for NGOs</span>
            </div>
            
            <h1 className="text-hero text-primary mb-6 leading-tight">
              Fractional CFO Services for NGOs in East Africa
              <span className="text-ace-cyan">: Financial Clarity. Real Impact.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The truth is, you need strong financial leadership—but a full-time CFO (Chief Finance Officer) is often too expensive. That's where ACE comes in. We step in part-time to help with donor fund management, grant reporting, budgeting, internal controls, and financial strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-ace-orange hover:bg-ace-orange/90 text-white font-semibold px-8 py-4 text-lg group"
              >
                Strengthen Your Finances
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-ace-cyan text-ace-cyan hover:bg-ace-cyan hover:text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-ace-blue">20+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-ace-purple">100+</div>
                <div className="text-muted-foreground">NGOs Served</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-ace-cyan">FCCA</div>
                <div className="text-muted-foreground">Certified Professional</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Professional financial consultancy services"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-accent rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-ace-orange/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;