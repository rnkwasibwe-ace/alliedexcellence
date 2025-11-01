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
    <section id="home" className="min-h-screen flex flex-col pt-20">
      {/* Hero Background Image Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'blur(3px)',
            backgroundPosition: 'center 35%',
            backgroundSize: 'cover',
            transform: 'scale(1.05)',
            top: '1in',
            height: 'calc(100% - 1in)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        {/* White Space Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[1in] bg-gradient-to-b from-white to-transparent opacity-10 z-10"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Text Overlay */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in leading-tight">
              Powering purpose through
              <br />
              <span className="text-ace-cyan">financial excellence.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section Below Hero */}
      <div className="bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] animate-gradient flex-1 relative overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(195,100%,50%)] rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(270,75%,50%)] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <TrendingUp className="text-[hsl(195,100%,50%)]" size={24} />
                <span className="text-[hsl(195,100%,50%)] font-semibold text-lg">Financial Excellence for NGOs</span>
              </div>
              
              <p className="text-xl text-center text-gray-300 mb-12 leading-relaxed">
                Strong financial leadership is essential, but a full-time CFO can be costly. That's where ACE steps in, providing part-time CFO expertise to help NGOs manage donor funds, streamline grant reporting, optimize budgeting, strengthen internal controls, and shape the entire financial strategy.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(195,100%,50%)] group-hover:scale-110 transition-transform">20+</div>
                  <div className="text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(195,100%,50%)] group-hover:scale-110 transition-transform">13+</div>
                  <div className="text-gray-400">NGOs Served</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(195,100%,50%)] group-hover:scale-110 transition-transform">FCCA</div>
                  <div className="text-gray-400">Certified Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;