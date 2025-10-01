import React, { useState } from 'react';
import {
  FolderOpen,
  School,
  Building,
  ExternalLink,
  Github,
  Calendar,
  Users,
  type LucideIcon,
} from 'lucide-react';

type Category = 'scolaire' | 'professionnel';

type ProjetStatus = 'Terminé' | 'En cours';

interface Projet {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  status: ProjetStatus;
  icon: LucideIcon;
  color: string; // ex: "from-blue-600 to-blue-700"
  link?: string;
  repo?: string;
}

const Projets = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('scolaire');

  const projets: Record<Category, Projet[]> = {
    scolaire: [
      {
        title: "Infrastructure Réseau Virtuelle",
        description:
          "Conception et mise en place d'une infrastructure réseau complète avec VLAN, routage et sécurité",
        technologies: ["Packet Tracer", "VLAN", "OSPF", "ACL"],
        date: "2024",
        status: "Terminé",
        icon: Building,
        color: "from-blue-600 to-blue-700",
      },
      {
        title: "Application de Gestion Parc Informatique",
        description:
          "Développement d'une application web pour la gestion d'un parc informatique avec base de données",
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        date: "2024",
        status: "En cours",
        icon: FolderOpen,
        color: "from-green-600 to-green-700",
      },
      {
        title: "Étude de Sécurité Réseau",
        description:
          "Analyse des vulnérabilités et mise en place de solutions de sécurité pour un réseau d'entreprise",
        technologies: ["Wireshark", "Nmap", "pfSense", "VPN"],
        date: "2023",
        status: "Terminé",
        icon: School,
        color: "from-purple-600 to-purple-700",
      },
    ],
    professionnel: [
      {
        title: "Modernisation Site Web Grand Bleu",
        description:
          "Refonte et optimisation du site web de réservation avec interface responsive et système de réservation amélioré",
        technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
        date: "2024",
        status: "En cours",
        icon: Building,
        color: "from-cyan-600 to-cyan-700",
      },
      {
        title: "Automatisation Création Emails",
        description:
          "Script d'automatisation pour la création d'adresses email avec le domaine du Grand Bleu",
        technologies: ["PowerShell", "Active Directory", "Exchange"],
        date: "2024",
        status: "Terminé",
        icon: Users,
        color: "from-orange-600 to-orange-700",
      },
      {
        title: "Système de Monitoring Réseau",
        description:
          "Mise en place d'un système de surveillance du réseau informatique avec alertes en temps réel",
        technologies: ["PRTG", "SNMP", "PowerShell", "MySQL"],
        date: "2023",
        status: "Terminé",
        icon: Building,
        color: "from-red-600 to-red-700",
      },
    ],
  };

  return (
    <section id="projets" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FolderOpen className="text-purple-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Mes Projets</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les projets que j&apos;ai réalisés dans le cadre de ma formation et de mon alternance
          </p>
        </div>

        {/* Sélecteur de catégorie */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 rounded-full p-2 border border-purple-500/20">
            <button
              onClick={() => setActiveCategory('scolaire')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'scolaire'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <School size={20} />
              <span>Projets Scolaires</span>
            </button>
            <button
              onClick={() => setActiveCategory('professionnel')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === 'professionnel'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Building size={20} />
              <span>Projets Professionnels</span>
            </button>
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets[activeCategory].map((projet, index) => {
            const Icon = projet.icon; // ✅ composant Lucide typé
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`bg-gradient-to-br ${projet.color} p-3 rounded-lg group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-gray-400" size={16} />
                    <span className="text-gray-400 text-sm">{projet.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{projet.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{projet.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      projet.status === 'Terminé'
                        ? 'bg-green-600/20 text-green-300'
                        : 'bg-orange-600/20 text-orange-300'
                    }`}
                  >
                    {projet.status}
                  </span>

                  <div className="flex space-x-2">
                    {projet.link && (
                      <a
                        href={projet.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
                        aria-label="Voir le projet"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {projet.repo && (
                      <a
                        href={projet.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
                        aria-label="Voir le code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projets;
