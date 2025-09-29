import { Phone, Mail, Globe, MapPin, Target, Eye, Heart } from "lucide-react";
import aceLogo from "@/assets/ace-logo.jpg";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-ace-blue text-white py-20">
      <div className="container mx-auto px-4">
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
              <div className="w-16 h-16 bg-ace-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-ace-cyan mb-2">Phone</h3>
              <a 
                href="tel:+256772471586" 
                className="text-white/80 hover:text-white transition-colors"
              >
                +256 772471586
              </a>
            </div>

            {/* Email */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-ace-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-ace-purple mb-2">Email</h3>
              <a 
                href="mailto:info@alliedexcellence.com" 
                className="text-white/80 hover:text-white transition-colors"
              >
                info@alliedexcellence.com
              </a>
            </div>

            {/* Website */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-ace-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-ace-orange mb-2">Website</h3>
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
              <div className="w-16 h-16 bg-ace-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-ace-cyan mb-2">Serving</h3>
              <p className="text-white/80">
                Uganda & East Africa
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 pt-16 border-t border-white/20">
          {/* Vision */}
          <div className="text-center">
            <div className="w-12 h-12 bg-ace-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-ace-purple mb-3">Our Vision</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              To be the best known, hands-on accounting, business advisory and management consulting firm for small and medium sized NGOs in the East African region.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <div className="w-12 h-12 bg-ace-cyan rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-ace-cyan mb-3">Our Mission</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              To provide exceptional fractional CFO services that enable NGOs to achieve financial excellence, donor compliance, and sustainable impact across East Africa.
            </p>
          </div>

          {/* Core Values */}
          <div className="text-center">
            <div className="w-12 h-12 bg-ace-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-ace-orange mb-3">Core Values</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Excellence, Integrity, Transparency, Innovation, and Commitment to empowering NGOs for greater social impact through financial clarity.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 pb-8 border-b border-white/20">
          {["Home", "Services", "About Us", "Packages"].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase().replace(/\s+/g, ''))}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {link}
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
              <p className="text-ace-cyan text-sm">Fractional CFO Services for NGOs</p>
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