import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft } from "lucide-react";
import { Calculator, FileText, TrendingUp, Shield, Users, BarChart3, GraduationCap, FileCheck } from "lucide-react";
import heroFinance from "@/assets/hero-finance.jpg";
import training from "@/assets/training.jpg";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  icon: any;
  title: string;
  color: string;
  bgColor: string;
  image: string;
  items: string[];
  description?: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isFocusedView, setIsFocusedView] = useState(false);

  // Lock scroll when in focused view
  useEffect(() => {
    if (isFocusedView) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFocusedView]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsFocusedView(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setIsFocusedView(false);
    // Small delay to allow the animation to complete before resetting the selected service
    setTimeout(() => setSelectedService(null), 300);
  };
  const services = [
    {
      icon: FileText,
      title: "Financial Management",
      color: "text-ace-cyan",
      bgColor: "bg-ace-cyan/5",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
      items: [
        "Bookkeeping and transaction recording",
        "Monthly financial reporting",
        "Bank reconciliations",
        "Accounts payable & receivable management",
        "General ledger management"
      ]
    },
    {
      icon: GraduationCap,
      title: "Corporate Finance Training",
      color: "text-ace-cyan",
      bgColor: "bg-ace-cyan/5",
      image: training,
      items: [
        "Training for finance teams and boards",
        "Interpreting financial statements",
        "Using financial tools effectively",
        "Budgeting basics and best practices",
        "Understanding key financial metrics",
        "Workshops and capacity-building programs"
      ]
    },
    {
      icon: TrendingUp,
      title: "Advisory & Consultancy",
      color: "text-ace-cyan",
      bgColor: "bg-ace-cyan/5",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      items: [
        "Strategic financial advice",
        "Financial process improvement",
        "Risk management",
        "Policy development",
        "Performance monitoring",
        "Financial decision support"
      ]
    },
    {
      icon: FileCheck,
      title: "Grant & Donor Compliance",
      color: "text-ace-cyan",
      bgColor: "bg-ace-cyan/5",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80",
      items: [
        "Grant reporting and budgeting",
        "Donor accountability and transparency",
        "Compliance monitoring",
        "Adherence to donor financial requirements",
        "Audit readiness and accuracy"
      ]
    },
    {
      icon: Calculator,
      title: "Fractional CFO Services",
      color: "text-ace-cyan",
      bgColor: "bg-ace-cyan/5",
      image: heroFinance,
      items: [
        "Budgeting and forecasting",
        "Scenario planning",
        "Cash flow management",
        "Financial strategy development",
        "Data visualization and reporting",
        "Policy development",
        "Support for NGO leadership and decision-making"
      ]
    }
  ];

  return (
    <section id="services" className={`py-20 bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] animate-gradient relative ${isFocusedView ? 'min-h-screen' : ''}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[hsl(195,100%,50%)] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[hsl(270,75%,50%)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`container mx-auto px-4 relative z-10 transition-all duration-300 ${isFocusedView ? 'max-w-4xl' : ''}`}>
        {/* Back Button - Only visible in focused view */}
        <AnimatePresence>
          {isFocusedView && selectedService && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Button
                onClick={handleBackClick}
                variant="outline"
                className="bg-[hsl(220,85%,18%)] border-[hsl(195,100%,50%)]/20 hover:bg-[hsl(220,85%,25%)] text-[hsl(195,100%,50%)] hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Services
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {!isFocusedView ? (
            <motion.div
              key="services-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-section-title text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(195,100%,50%)] mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  ACE provides specialized services tailored to donor-funded organizations, ensuring financial excellence and compliance across all your operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleServiceClick(service)}
                    className="cursor-pointer"
                  >
                    <Card className="group bg-gradient-to-br from-[hsl(220,85%,18%)] to-[hsl(220,85%,15%)] border border-[hsl(195,100%,50%)]/20 hover:border-[hsl(195,100%,50%)]/40 shadow-[0_0_30px_hsl(195,100%,50%/0.15)] hover:shadow-[0_0_50px_hsl(195,100%,50%/0.3)] transition-all duration-300 overflow-hidden h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image}
                          alt={`${service.title} - Professional service`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 ${service.bgColor} bg-opacity-60 flex items-center justify-center`}>
                          <div className={`w-16 h-16 rounded-full bg-white/90 ${service.color} flex items-center justify-center shadow-medium`}>
                            <service.icon size={32} className={service.color} />
                          </div>
                        </div>
                      </div>

                      <CardHeader className="text-center pb-4">
                        <CardTitle className={`text-xl ${service.color} mb-2`}>
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <ul className="space-y-3">
                          {service.items.slice(0, 3).map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mt-2 flex-shrink-0 shadow-[0_0_8px_currentColor]`}></div>
                              <span className="text-gray-300 leading-relaxed">{item}</span>
                            </li>
                          ))}
                          {service.items.length > 3 && (
                            <li className="text-sm text-[hsl(195,100%,50%)] font-medium text-center mt-2">
                              +{service.items.length - 3} more
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : selectedService ? (
            <motion.div
              key="service-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[hsl(220,85%,18%)] to-[hsl(220,85%,15%)] rounded-2xl border border-[hsl(195,100%,50%)]/20 p-8 md:p-12 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${selectedService.bgColor} bg-opacity-30`}></div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-full ${selectedService.bgColor} flex items-center justify-center mr-4`}>
                      <selectedService.icon size={28} className={selectedService.color} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6 text-lg">
                      {selectedService.description || 'Comprehensive financial services tailored to your organization\'s needs.'}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-[hsl(195,100%,50%)] mb-4">Key Features:</h3>
                    <ul className="space-y-3 mb-8">
                      {selectedService.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full ${selectedService.color.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      onClick={() => window.location.href = '/contact'}
                      className="bg-gradient-to-r from-[hsl(15,90%,55%)] to-[hsl(15,90%,50%)] hover:shadow-[0_0_30px_hsl(15,90%,55%/0.6)] text-white font-semibold px-8 py-6 text-lg transition-all duration-300"
                    >
                      Get Started with {selectedService.title}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Additional Value Proposition */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[hsl(220,85%,18%)] to-[hsl(220,85%,15%)] rounded-2xl p-8 md:p-12 border border-[hsl(195,100%,50%)]/20 shadow-[0_0_40px_hsl(195,100%,50%/0.2)]">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-4">
                <TrendingUp className="text-[hsl(195,100%,50%)]" size={32} />
                <BarChart3 className="text-[hsl(270,75%,50%)]" size={32} />
                <Users className="text-[hsl(15,90%,55%)]" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(195,100%,50%)] mb-4">
              Why Choose ACE?
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With deep expertise in donor compliance, East African NGO operations, and international financial standards, ACE delivers the strategic financial leadership your organization needs to maximize impact and maintain donor confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;