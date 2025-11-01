import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, X } from 'lucide-react';
import { useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  linkedin: string;
  title: string;
  credentials: string;
  experience: string;
  bio: string[];
  role: string;
  image: string;
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: "Robert Nkwasibwe",
      email: "robert@alliedexcellence.com",
      linkedin: "#",
      title: "Founder & Chief Executive Officer",
      credentials: "FCCA, MBA",
      experience: "20+ Years of NGO Finance Leadership",
      bio: [
        "Robert Nkwasibwe is a seasoned finance professional with over two decades of experience in NGO financial management. His expertise spans across financial strategy, risk management, and organizational development.",
        "As the founder of Allied Excellence, Robert has been instrumental in shaping the financial strategies of numerous non-profit organizations, helping them achieve sustainability and maximize their impact."
      ],
      role: "Founder & CEO",
      image: "/images/team/robert-nkwasibwe.jpg"
    }
  ];

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="team" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#0a0f2e] via-[#1a1a40] to-[#0a0f2e] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet our leadership team with decades of combined experience in finance and NGO management.
          </p>
          
          <div className="mt-12 grid gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                className="bg-gradient-to-r from-[#1a1a40] to-[#2d2b6b] rounded-xl p-8 relative overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(member)}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}, <span className="text-[#00f0ff]">{member.credentials}</span>
                  </h3>
                  <p className="text-[#9d4edd] text-lg mt-2">{member.title}</p>
                  <p className="text-gray-300 mt-4">{member.experience}</p>
                  
                  <div className="mt-6 flex justify-center space-x-6">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-[#00f0ff] hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail size={24} />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00f0ff] hover:text-white transition-colors"
                      aria-label={`View ${member.name}'s LinkedIn`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
                
                {/* Animated Scan Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000"
                  style={{ boxShadow: '0 0 10px 2px rgba(0, 240, 255, 0.5)' }}
                ></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a24]/95 to-[#1e1b4b] opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-center items-center">
                  <p className="text-white font-medium mb-4">Click to view full profile</p>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-[#9d4edd] animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal/Expanded View */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] rounded-2xl border border-[#00f0ff]/30 max-w-5xl w-full mx-auto overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[300px] md:min-h-[500px] flex items-center justify-center p-8">
                  <div className="relative w-full h-full">
                    <img 
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="p-8 overflow-y-auto">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white">
                      {selectedMember.name}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">
                        {selectedMember.credentials}
                      </span>
                    </h3>
                    <p className="text-[#9d4edd] font-medium mt-2">{selectedMember.role}</p>
                    <p className="text-gray-300 text-sm mt-1">{selectedMember.experience}</p>
                    
                    <div className="flex space-x-4 mt-6">
                      <a 
                        href={`mailto:${selectedMember.email}`}
                        className="w-12 h-12 rounded-full border border-[#00f0ff] flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                        aria-label="Email"
                      >
                        <Mail size={20} />
                      </a>
                      <a 
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-[#9d4edd] flex items-center justify-center text-[#9d4edd] hover:bg-[#9d4edd]/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(157,78,221,0.5)]"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {selectedMember.bio.map((paragraph, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
