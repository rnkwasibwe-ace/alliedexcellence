import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Essential Package",
      subtitle: "Financial Foundations",
      icon: Zap,
      color: "ace-blue",
      price: "Starting from",
      priceAmount: "Contact for Quote",
      description: "Perfect for NGOs establishing basic financial controls and compliance frameworks.",
      features: [
        "Basic financial controls implementation",
        "Monthly financial reporting",
        "Audit support and preparation",
        "Donor compliance monitoring",
        "Financial policy development"
      ],
      popular: false
    },
    {
      name: "Growth Package",
      subtitle: "Financial Clarity", 
      icon: Star,
      color: "ace-cyan",
      price: "Most Popular",
      priceAmount: "Contact for Quote",
      description: "Comprehensive financial management for growing organizations with multiple donors.",
      features: [
        "All Essential Package services",
        "Advanced financial forecasting",
        "Comprehensive policy development",
        "Staff training programs",
        "Grant management systems",
        "Risk assessment and monitoring",
        "Board reporting and advisory"
      ],
      popular: true
    },
    {
      name: "Strategic Package", 
      subtitle: "Financial Leadership",
      icon: Crown,
      color: "ace-purple",
      price: "Premium Service",
      priceAmount: "Contact for Quote",
      description: "Full fractional CFO service for organizations requiring strategic financial leadership.",
      features: [
        "All Growth Package services",
        "Full financial strategy development",
        "Board & finance committee advisory",
        "Interim CFO leadership",
        "Organizational restructuring support",
        "Advanced capacity building",
        "Strategic planning facilitation",
        "Due diligence for mergers/partnerships"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title text-ace-purple mb-4">
            Flexible Packages for Every Stage of Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the level of financial support that matches your organization's current needs and growth aspirations. All packages are customizable to fit your unique requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            const colorClasses = {
              'ace-blue': {
                text: 'text-ace-blue',
                bg: 'bg-ace-blue',
                border: 'border-ace-blue',
                gradient: 'from-ace-blue to-ace-cyan'
              },
              'ace-cyan': {
                text: 'text-ace-cyan', 
                bg: 'bg-ace-cyan',
                border: 'border-ace-cyan',
                gradient: 'from-ace-cyan to-ace-purple'
              },
              'ace-purple': {
                text: 'text-ace-purple',
                bg: 'bg-ace-purple', 
                border: 'border-ace-purple',
                gradient: 'from-ace-purple to-ace-orange'
              }
            };
            
            const colors = colorClasses[pkg.color as keyof typeof colorClasses];
            
            return (
              <Card
                key={pkg.name}
                className={`relative group hover:shadow-strong transition-all duration-300 border-2 ${
                  pkg.popular ? 'border-ace-cyan shadow-medium scale-105' : 'border-border hover:border-ace-cyan/50'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-ace-cyan to-ace-purple text-white px-6 py-2 rounded-full text-sm font-semibold shadow-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  <CardTitle className={`text-2xl ${colors.text} mb-2`}>
                    {pkg.name}
                  </CardTitle>
                  
                  <CardDescription className={`text-lg font-semibold ${colors.text}`}>
                    {pkg.subtitle}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <div className="text-sm text-muted-foreground">{pkg.price}</div>
                    <div className="text-xl font-bold text-foreground">{pkg.priceAmount}</div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`${colors.text} flex-shrink-0 mt-0.5`} size={16} />
                        <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full ${pkg.popular ? 'bg-ace-cyan hover:bg-ace-cyan/90' : colors.bg + ' hover:opacity-90'} text-white font-semibold`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Every NGO is unique. We can customize any package or create a completely tailored solution to meet your specific financial management needs.
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ace-blue font-semibold px-8 py-4"
            >
              Discuss Custom Requirements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;