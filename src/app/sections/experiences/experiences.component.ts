import {Component} from '@angular/core';

@Component({
    selector: 'experiences-component',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.css']
})

export class ExperiencesComponent {

    public toggleItExperiences: boolean = true

    public itExperiences = [
        {
            type : "Alternance",
            jobName : "DevOps",
            company : "Orange",
            location : "Blagnac, France",
            date : "Septembre 2021 - Aujourd'hui",
            technologies : ['Linux (RedHat, Ubuntu)', 'Bash', 'Git', 'GitLab CI', 'Docker', 'Docker Swarm', 'Java', 'Spring Boot', 'Tomcat', 'Traefik', 'Ansible'],
            summary : [
                "Développement d’une solution de monitoring d’applications java industrialisées et conteneurisées.",
                "Intégration de la solution aux images industrialisées Orange (openjdk, tomcat, etc…)",
                "Collecte d’informations (Threads, Mémoire Heap, Garbage Collector, Metrics JMX, CPU ...)",
            ]
        },
        {
            type : "Stage 1ère Année - M1 MIAGE IM",
            jobName : "Developpeur .NET",
            company : "Désirade",
            location : "Toulouse, France",
            date : "Mai 2021 - Aujourd'hui",
            technologies : ['.NET', 'ASP.NET', 'C#', 'SQL Server', 'Apache SVN', 'Bootstrap'],
            summary : [
                "Interventions de maintenance.",
                "Service aux utilisateurs",
                "Visibilité et maitrise à la DSI",
                "Participations à des atelier avec des clients (spécification, revues de prototype, recette, …)",
                "Participation a des avant-ventes et chiffrage."
            ]
        },
        {
            type : "Stage 2ème Année - BTS",
            jobName : "Developpeur",
            company : "Centre des finances public",
            location : "Cluny, Martinique",
            date : "Mai à juillet 2017",
            technologies : ['PHP', 'HTML', 'CSS', 'MySQL'],
            summary : [
                "Développement d'une application en interne, des gestion des déplacement des employés.",
                "Gestion des contrainte de projet (coût, délai, etc).",
                "Analyse fonctionnelle et technique des besoins utilisateurs."]
        },
        {
            type : "Stage 1ère Année - BTS",
            jobName : "Développeur Web",
            company : "MPA Coaching",
            location : "Londres, Angleterre, Royaume-Uni",
            date : "Avril à Juin 2016",
            technologies : ['Wordpress'],
            summary : ["Maintenance et évolutivité d'un site Web sous Wordpress.", "Marketing Digital (Newsletter, évènementielle)"]
        }
    ]

    public variousExperiences = [
        {
            jobName : "Agent polyvalent d’accueil",
            company : "Palais des congrès de Madiana",
            location : "Schœlcher, Martinique",
            date : "2018 - 2019",
            summary : "Maintenance des salles, caisse, contrôle des tickets"
        },
        {
            jobName : "Intérimaire",
            company : "ANCD - DTI",
            location : "Fort-de-France, Martinique",
            date : "2015 - 2019",
            summary : "Vente conseille / merchandising / manutention"
        },
        {
            jobName : "Employé polyvalent",
            company : "BKB",
            location : "Fort-de-France, Martinique",
            date : "2017 - 2018",
            summary : "Cuisine / caisse"
        },
    ]

}
