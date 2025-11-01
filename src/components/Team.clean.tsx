import { motion } from "framer-motion";

const Team = () => {
  const teamMember = {
    name: "Robert Nkwasibwe",
    email: "robert@alliedexcellence.com",
    linkedin: "#",
    title: "Founder & Chief Executive Officer",
    credentials: "FCCA, MBA",
    experience: "20+ Years of NGO Finance Leadership"
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
          
          <motion.div 
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#1a1a40] to-[#2d2b6b] rounded-xl p-8 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white">
                {teamMember.name}, <span className="text-[#00f0ff]">{teamMember.credentials}</span>
              </h3>
              <p className="text-[#9d4edd] text-lg mt-2">{teamMember.title}</p>
              <p className="text-gray-300 mt-4">{teamMember.experience}</p>
              
              <div className="mt-6 flex justify-center space-x-4">
                <a 
                  href={`mailto:${teamMember.email}`}
                  className="text-[#00f0ff] hover:text-white transition-colors"
                  aria-label={`Email ${teamMember.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a 
                  href={teamMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00f0ff] hover:text-white transition-colors"
                  aria-label={`View ${teamMember.name}'s LinkedIn`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
