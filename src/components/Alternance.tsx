import React from 'react';
import { Building2, Network, Globe, Mail, Users, Calendar, MapPin } from 'lucide-react';

const Alternance = () => {
  const missions = [
    {
      icon: Network,
      title: "Supervision du Réseau et Gestion du Parc Informatique",
      description: "Participation à la gestion et à la maintenance des infrastructures informatiques de l’association. Contribution au bon fonctionnement des équipements et à la sécurisation des locaux grâce aux dispositifs de contrôle d’accès.",
      details: [
        "Gestion et maintenance du parc informatique (ordinateurs, équipements réseau)",
        "Gestion des caméras de vidéosurveillance",
        "Administration des accès aux bureaux (badges et reconnaissance faciale)",
        "Support technique aux utilisateurs"
      ]
    },
    {
      icon: Users,
      title: "Gestion des Réservations",
      description: "Administration du système de réservation en ligne pour les activités aquatiques et les cours de natation, notamment durant les périodes de forte affluence. Contribution à l’organisation des plannings et à la communication auprès des usagers.",
      details: [
        "Gestion de l’interface de réservation en ligne",
        "Suivi et organisation des plannings et créneaux",
        "Communication avec les clients et accompagnement utilisateur",
        "Suivi et validation des inscriptions"
      ]
    },
    {
      icon: Globe,
      title: "Mise à jour et Maintenance du Site Internet",
      description: "Mise à jour régulière du site internet afin de garantir l’accès aux informations et aux réservations. Intégration des nouveautés concernant les formations proposées et optimisation de l’expérience utilisateur.",
      details: [
        "Mise à jour des contenus et actualités",
        "Gestion des créneaux et disponibilités en ligne",
        "Publication et suivi des informations sur les formations",
        "Amélioration continue de l’interface utilisateur"
      ]
    },
    {
      icon: Mail,
      title: "Gestion des Comptes et Adresses Email",
      description: "Création et administration des adresses email associées au domaine du Grand Bleu pour les apprenants et le personnel, dans le but d’améliorer la communication interne et la sécurité informatique.",
      details: [
        "Gestion du domaine et configuration des adresses email",
        "Création et paramétrage des comptes utilisateurs",
        "Accompagnement et formation à l’utilisation des comptes",
        "Mise en place de bonnes pratiques et règles de sécurité"
      ]
    }
  ];

  return (
    <section id="alternance" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mon Alternance
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Building2 className="text-purple-400" size={32} />
            <h3 className="text-3xl text-purple-400 font-bold">Le Grand Bleu</h3>
          </div>
          <div className="flex items-center justify-center space-x-6 mb-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="text-purple-400" size={20} />
              <span>Activités et formations aquatiques</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="text-purple-400" size={20} />
              <span>Apprentie technicienne informatique</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Le Grand Bleu est une association et un CFA qui propose des activités nautiques et aquatiques,
            ainsi que des formations spécialisées aux métiers de l’eau. En tant qu’apprentie technicienne
            informatique, je participe à la gestion du service informatique au sein du siège afin de contribuer
            à l’amélioration de la digitalisation de l’association, en accompagnement de son évolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <mission.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-3">{mission.title}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">{mission.description}</p>
                  <div className="space-y-2">
                    {mission.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Environnement de travail */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-xl p-8">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">Mon Environnement de Travail</h4>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <Network className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">Infrastructure Technique</h5>
              <p className="text-gray-300 text-sm">Gestion des serveurs, réseaux et équipements informatiques de l'association</p>
            </div>
            <div className="space-y-3">
              <Users className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">Service Client</h5>
              <p className="text-gray-300 text-sm">Interface entre la technologie et les besoins des clients pour les réservations</p>
            </div>
            <div className="space-y-3">
              <Globe className="text-purple-400 mx-auto" size={32} />
              <h5 className="text-lg font-semibold text-white">Développement Web</h5>
              <p className="text-gray-300 text-sm">Maintenance et amélioration continue du site internet de l'association</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alternance;
