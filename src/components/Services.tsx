import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, TrendingUp, Shield, Users, BarChart3 } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import consultation from "@/assets/consultation.jpg";
import training from "@/assets/training.jpg";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Fractional CFO Services",
      color: "text-ace-blue",
      bgColor: "bg-ace-blue/5",
      image: teamMeeting,
      items: [
        "Budget preparation & monitoring",
        "Donor fund tracking & compliance", 
        "Support during donor/annual audits"
      ]
    },
    {
      icon: FileText,
      title: "Financial Management",
      color: "text-ace-cyan",
      bgColor: "bg-ace-cyan/5",
      image: consultation,
      items: [
        "Finance for Non-Finance Managers Training",
        "Financial Policies & Procedures Manual",
        "Establishing Financial Management Systems"
      ]
    },
    {
      icon: Shield,
      title: "Organisational Effectiveness",
      color: "text-ace-purple",
      bgColor: "bg-ace-purple/5",
      image: training,
      items: [
        "Risk monitoring (Manual, Framework, Training)",
        "Governance (Training, Manual)",
        "Organisational Capacity Assessment"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title text-ace-blue mb-4">
            Our Fractional CFO Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ACE provides specialized services tailored to donor-funded organizations, ensuring financial excellence and compliance across all your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`group hover:shadow-medium transition-all duration-300 border-0 shadow-soft overflow-hidden hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.title} - Professional team collaboration`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${service.bgColor} bg-opacity-80 flex items-center justify-center`}>
                    <div className={`w-16 h-16 rounded-full bg-white/90 ${service.color} flex items-center justify-center shadow-medium`}>
                      <IconComponent size={32} className={service.color} />
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
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                        <span className="text-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-4">
                <TrendingUp className="text-ace-cyan" size={32} />
                <BarChart3 className="text-ace-purple" size={32} />
                <Users className="text-ace-orange" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-ace-blue mb-4">
              Why Choose ACE?
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With deep expertise in donor compliance, East African NGO operations, and international financial standards, ACE delivers the strategic financial leadership your organization needs to maximize impact and maintain donor confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;