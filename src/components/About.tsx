import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Globe, CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "Fellow of the Association of Chartered Certified Accountants (FCCA)",
    "Deep experience with major donors: USAID, DFID/FCDO, EU, UN, etc.",
    "Expertise in Financial Strategy, Grant & Donor Compliance, and Capacity Building",
    "Proven success leading finance and operations for international NGOs in complex settings across Africa and the Middle East"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Vision Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
              <Target className="text-ace-purple" size={32} />
            </div>
          </div>
          <h2 className="text-section-title text-ace-purple mb-6">Our Vision</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-foreground leading-relaxed font-medium">
              To be the best known, hands-on accounting, business advisory and management consulting firm for small and medium sized NGOs in the East African region.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Content */}
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-ace-orange" size={28} />
                <h3 className="text-subsection-title text-ace-blue">The ACE Advantage</h3>
              </div>
              
              <h4 className="text-3xl font-bold text-ace-blue mb-6">
                Led by Robert Nkwasibwe: 20+ Years of NGO Finance Leadership
              </h4>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Robert brings unparalleled expertise in NGO financial management, having worked with some of the world's most demanding donors and complex operational environments across Africa and the Middle East.
              </p>

              {/* Achievement List */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-ace-cyan flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-ace-cyan" size={24} />
                    <CardTitle className="text-ace-blue">International Experience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Extensive experience managing finances for international NGOs operating in challenging environments across Africa and the Middle East, ensuring compliance with complex donor requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="text-ace-purple" size={24} />
                    <CardTitle className="text-ace-blue">Professional Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    FCCA qualification combined with specialized knowledge of donor compliance, grant management, and capacity building for sustainable organizational growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="text-ace-orange" size={24} />
                    <CardTitle className="text-ace-blue">Strategic Leadership</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Proven track record in financial strategy development, risk management, and building robust financial systems that support mission-driven organizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;