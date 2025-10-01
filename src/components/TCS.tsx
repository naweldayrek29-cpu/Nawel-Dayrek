import React, { useState } from 'react';
import { Award, CheckCircle, Clock, BookOpen } from 'lucide-react';

const TCS = () => {
  const [activeCompetence, setActiveCompetence] = useState(0);

  const competences = [
    {
      id: "C1",
      title: "Support et mise à disposition de services informatiques",
      description: "Gérer le patrimoine informatique, répondre aux incidents et aux demandes d'assistance",
      niveau: 85,
      color: "from-blue-600 to-blue-700",
      savoirs: [
        "ITIL et gestion des services",
        "Outils de ticketing",
        "Support utilisateurs",
        "Documentation technique"
      ]
    },
    {
      id: "C2", 
      title: "Administration des systèmes et des réseaux",
      description: "Installer, configurer et administrer les systèmes et équipements réseau",
      niveau: 90,
      color: "from-green-600 to-green-700",
      savoirs: [
        "Windows Server / Linux",
        "Configuration réseau",
        "Active Directory",
        "Virtualisation"
      ]
    },
    {
      id: "C3",
      title: "Cybersécurité des services informatiques", 
      description: "Protéger les données et assurer la sécurité du système d'information",
      niveau: 75,
      color: "from-red-600 to-red-700",
      savoirs: [
        "Sécurité réseau",
        "Audit de sécurité",
        "Gestion des risques",
        "Conformité RGPD"
      ]
    },
    {
      id: "C4",
      title: "Développement et déploiement d'applications",
      description: "Concevoir et développer des solutions logicielles",
      niveau: 70,
      color: "from-purple-600 to-purple-700", 
      savoirs: [
        "Programmation web",
        "Base de données",
        "Tests et débogage",
        "Déploiement"
      ]
    }
  ];

  const certifications = [
    {
      name: "Cisco CCNA R&S",
      status: "En cours",
      date: "2024",
      icon: Clock
    },
    {
      name: "CompTIA Network+",
      status: "Prévu",
      date: "2025",
      icon: BookOpen
    },
    {
      name: "Microsoft Azure Fundamentals",
      status: "Prévu", 
      date: "2025",
      icon: BookOpen
    }
  ];

  return (
    <section id="tcs" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Tableau de Compétences</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Évaluation de mes compétences techniques acquises en BTS SIO
          </p>
        </div>

        {/* Competences Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {competences.map((competence, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 ${
                activeCompetence === index 
                  ? 'border-purple-500/60 shadow-lg shadow-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}
              onClick={() => setActiveCompetence(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{competence.id}</h3>
                <div className={`bg-gradient-to-br ${competence.color} px-3 py-1 rounded-full`}>
                  <span className="text-white text-sm font-semibold">{competence.niveau}%</span>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-white mb-3">{competence.title}</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">{competence.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="bg-gray-600 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${competence.color} h-full transition-all duration-1000 ease-out`}
                    style={{ width: `${competence.niveau}%` }}
                  ></div>
                </div>
              </div>

              {/* Savoirs associés */}
              <div className="space-y-2">
                {competence.savoirs.map((savoir, savoirIndex) => (
                  <div key={savoirIndex} className="flex items-center space-x-2">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">{savoir}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Certifications et Formations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <cert.icon className="text-purple-400" size={24} />
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white text-center mb-2">{cert.name}</h4>
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'En cours' 
                      ? 'bg-orange-600/20 text-orange-300'
                      : 'bg-blue-600/20 text-blue-300'
                  }`}>
                    {cert.status}
                  </span>
                  <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
          <Award className="text-purple-400 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">Évaluation Globale</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Moyenne générale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Administration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">75%</div>
              <div className="text-gray-300">Sécurité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TCS;