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
    <section id="about" className="py-20 bg-gradient-to-br from-[hsl(220,85%,15%)] via-[hsl(270,75%,35%)] to-[hsl(220,85%,15%)] animate-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[hsl(195,100%,50%)] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(270,75%,50%)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Founder Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Content */}
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-[hsl(15,90%,55%)]" size={28} />
                <h3 className="text-subsection-title text-transparent bg-clip-text bg-gradient-to-r from-[hsl(15,90%,60%)] to-[hsl(15,90%,50%)]">The ACE Advantage</h3>
              </div>
              
              <h4 className="text-3xl font-bold text-white mb-6">
                Led by Robert Nkwasibwe: 20+ Years of NGO Finance Leadership
              </h4>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Robert brings unparalleled expertise in NGO financial management, having worked with some of the world's most demanding donors and complex operational environments across Africa and the Middle East.
              </p>

              {/* Achievement List */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-[hsl(195,100%,50%)] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-gradient-to-br from-[hsl(220,85%,18%)] to-[hsl(220,85%,15%)] backdrop-blur-sm border border-[hsl(195,100%,50%)]/20 shadow-[0_0_30px_hsl(195,100%,50%/0.2)] hover:shadow-[0_0_50px_hsl(195,100%,50%/0.4)] hover:border-[hsl(195,100%,50%)]/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-[hsl(195,100%,50%)]" size={24} />
                    <CardTitle className="text-white">International Experience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    Extensive experience managing finances for international NGOs operating in challenging environments across Africa and the Middle East, ensuring compliance with complex donor requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[hsl(220,85%,18%)] to-[hsl(220,85%,15%)] backdrop-blur-sm border border-[hsl(270,75%,50%)]/20 shadow-[0_0_30px_hsl(270,75%,50%/0.2)] hover:shadow-[0_0_50px_hsl(270,75%,50%/0.4)] hover:border-[hsl(270,75%,50%)]/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="text-[hsl(270,75%,50%)]" size={24} />
                    <CardTitle className="text-white">Professional Excellence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    FCCA qualification combined with specialized knowledge of donor compliance, grant management, and capacity building for sustainable organizational growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[hsl(220,85%,18%)] to-[hsl(220,85%,15%)] backdrop-blur-sm border border-[hsl(15,90%,55%)]/20 shadow-[0_0_30px_hsl(15,90%,55%/0.2)] hover:shadow-[0_0_50px_hsl(15,90%,55%/0.4)] hover:border-[hsl(15,90%,55%)]/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="text-[hsl(15,90%,55%)]" size={24} />
                    <CardTitle className="text-white">Strategic Leadership</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
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