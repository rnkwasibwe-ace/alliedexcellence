import { Phone, Mail, Globe, MapPin, Target, Eye, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aceLogo from "@/assets/ace-logo.jpg";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] text-white py-20 relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[hsl(195,100%,50%)] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(270,75%,50%)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Ready to strengthen your NGO's financial foundation? Contact ACE today for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(195,100%,50%)] to-[hsl(195,100%,40%)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_hsl(195,100%,50%/0.5)] glow-effect">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-[hsl(195,100%,50%)] mb-2">Phone</h3>
              <a 
                href="tel:+256772471586" 
                className="text-white/80 hover:text-white transition-colors"
              >
                +256 772471586
              </a>
            </div>

            {/* Email */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(270,75%,50%)] to-[hsl(270,75%,35%)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_hsl(270,75%,50%/0.5)] glow-effect">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-[hsl(270,75%,50%)] mb-2">Email</h3>
              <a 
                href="mailto:info@alliedexcellence.com" 
                className="text-white/80 hover:text-white transition-colors"
              >
                info@alliedexcellence.com
              </a>
            </div>

            {/* Website */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(15,90%,55%)] to-[hsl(15,90%,45%)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_hsl(15,90%,55%/0.5)] glow-effect">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-[hsl(15,90%,55%)] mb-2">Website</h3>
              <a 
                href="https://www.alliedexcellence.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                www.alliedexcellence.com
              </a>
            </div>

            {/* Location */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[hsl(195,100%,50%)] to-[hsl(195,100%,40%)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_hsl(195,100%,50%/0.5)] glow-effect">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-[hsl(195,100%,50%)] mb-2">Serving</h3>
              <p className="text-white/80">
                Uganda & East Africa
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 pt-16 border-t border-white/20">
          {/* Vision */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(270,75%,50%)] to-[hsl(270,75%,35%)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_hsl(270,75%,50%/0.5)]">
              <Eye className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[hsl(270,75%,50%)] mb-3">Vision</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              To build a world where every nonprofit achieves greater impact through clarity, confidence, and excellence in finance.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(195,100%,50%)] to-[hsl(195,100%,40%)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_hsl(195,100%,50%/0.5)]">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[hsl(195,100%,50%)] mb-3">Mission</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              To empower NGOs across Africa with end-to-end financial solutions from bookkeeping and financial reporting to fractional CFO services. We simplify the complexities of finance so our partners can focus on what truly matters: creating positive impact and transforming lives.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 pb-8 border-b border-white/20">
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "About Us", path: "/about" },
            { label: "Core Values", path: "/core-values" }
          ].map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
              <img 
                src={aceLogo}
                alt="Allied Centre of Excellence Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Allied Centre of Excellence</h3>
              <p className="text-[hsl(195,100%,50%)] text-sm">Powering purpose through financial excellence</p>
            </div>
          </div>
          
          <p className="text-white/60 text-sm">
            © 2025 Allied Centre of Excellence (ACE). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;