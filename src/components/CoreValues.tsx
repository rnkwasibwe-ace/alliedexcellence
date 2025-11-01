import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Eye, Lightbulb, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CoreValues = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver top-tier financial services that empower NGOs to operate efficiently, grow sustainably, and maximize their impact.",
      color: "ace-cyan",
      gradient: "from-[hsl(195,100%,50%)] to-[hsl(195,100%,40%)]"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold honesty, fairness, and accountability in every partnership—earning and keeping the trust of those we serve.",
      color: "ace-purple",
      gradient: "from-[hsl(270,75%,35%)] to-[hsl(270,75%,25%)]"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We promote clarity and openness in every financial process, helping nonprofits build confidence with donors and stakeholders.",
      color: "ace-blue",
      gradient: "from-[hsl(220,85%,15%)] to-[hsl(220,85%,10%)]"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace technology and fresh ideas to simplify finance, automate systems, and drive smarter decision-making.",
      color: "ace-orange",
      gradient: "from-[hsl(15,90%,55%)] to-[hsl(15,90%,45%)]"
    },
    {
      icon: Users,
      title: "Positive Work Culture",
      description: "We cultivate teamwork, respect, and continuous learning—because empowered people create empowered organizations.",
      color: "ace-cyan",
      gradient: "from-[hsl(195,100%,50%)] to-[hsl(270,75%,35%)]"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-card-index]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...new Set([...prev, index])]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Animated Gradient Background */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] opacity-95">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(195,100%,50%)] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(270,75%,35%)] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-hero text-white mb-6 drop-shadow-lg">
              Our Core Values
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Guided by principles that define our excellence
            </p>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,120 L0,120 Z" fill="hsl(0, 0%, 100%)" />
          </svg>
        </div>
      </div>

      {/* Core Values Grid */}
      <div ref={sectionRef} className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              const isVisible = visibleCards.includes(index);
              
              return (
                <div
                  key={index}
                  data-card-index={index}
                  className={`transform transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card 
                    className="group relative h-full bg-card/80 backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transition-all duration-500 overflow-hidden cursor-pointer"
                    style={{
                      transform: isVisible ? 'none' : 'translateY(20px)',
                    }}
                  >
                    {/* Gradient Glow on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${value.gradient} blur-xl opacity-30`}></div>
                    </div>

                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="text-white" size={32} />
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-center text-ace-blue group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[hsl(195,100%,50%)] group-hover:to-[hsl(270,75%,35%)] transition-all duration-500">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-center text-base leading-relaxed text-muted-foreground">
                        {value.description}
                      </CardDescription>
                    </CardContent>

                    {/* Hover Effect - Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 text-ace-blue hover:text-ace-cyan transition-colors duration-300 cursor-pointer group"
              onClick={() => {
                navigate('/about');
                setTimeout(() => {
                  const missionSection = document.getElementById('about');
                  if (missionSection) {
                    missionSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              <span className="text-lg font-semibold">Learn more about our mission</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
