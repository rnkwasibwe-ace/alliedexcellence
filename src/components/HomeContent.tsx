import { Target, Eye, Info } from "lucide-react";

const HomeContent = () => {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[hsl(195,100%,50%)] rounded-full blur-[120px] animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(195,100%,50%)] to-[hsl(195,100%,40%)] rounded-full flex items-center justify-center shadow-[0_0_30px_hsl(195,100%,50%/0.6)] glow-effect">
                <Info className="text-white" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(195,100%,50%)] mb-6">
              About Allied Centre of Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Allied Centre of Excellence (ACE) is a premier financial management consultancy dedicated to empowering NGOs and mission-driven organizations across Africa. We provide comprehensive financial management services, strategic advisory, and capacity-building training that enable organizations to operate efficiently, maintain donor compliance, and maximize their social impact. With deep expertise in grant management, financial systems, and organizational development, ACE serves as a trusted partner for nonprofits navigating complex financial landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent opacity-50"></div>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(270,75%,50%)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(195,100%,50%)] to-[hsl(270,75%,50%)] rounded-full flex items-center justify-center shadow-[0_0_30px_hsl(195,100%,50%/0.6)] glow-effect">
                <Target className="text-white" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(270,75%,50%)] mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              To empower organizations and individuals through transformative financial management, training, and strategic advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(270,75%,50%)] to-transparent opacity-50"></div>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-1/2 w-96 h-96 bg-[hsl(270,75%,50%)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(270,75%,50%)] to-[hsl(270,75%,35%)] rounded-full flex items-center justify-center shadow-[0_0_30px_hsl(270,75%,50%/0.6)] glow-effect">
                <Eye className="text-white" size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(270,75%,60%)] to-[hsl(270,75%,50%)] mb-6">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              To be a leading center of excellence driving financial leadership and organizational growth across Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
