import { Component } from '@angular/core';

@Component({
  selector: 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {

  public skillsArray: any[] = [
    {
      name : "Conception & Développement",
      subSkills : [
        {
          name : "Librairies & frameworks",
          skills : ['Spring Boot', 'Angular', '.Net']
        },
        {
          name : "Serveurs d'applications",
          skills : ["Tomcat"]
        },
        {
          name : "SGBD",
          skills : ["Oracle", "SQL Server", "MySQL"]
        },
        {
          name : "ETL",
          skills : ["Talend"]
        },
        {
          name : "Languages & Scripting",
          skills : ["Java", "Bash", "Python"]
        }
      ]
    },
    {
      name : "Infra & Cloud",
      subSkills : [
        {
          name : "Conteneurisation",
          skills : ["Docker", "Docker Swarm"]
        },
        {
          name : "Infra as code",
          skills : ["Ansible"]
        },
        {
          name : "OS",
          skills : ["Ubuntu", "RedHat"]
        },
        {
          name : "CI/CD",
          skills : ["GitLab CI", "GitHub Action"]
        },
        {
          name : "Versionning",
          skills : ["Git", "Apache SVN"]
        },
        {
          name : "Monitoring & analyse",
          skills : ["Sonar", "Prometheus", "Grafana"]
        },
        {
          name : "Autres",
          skills : ["Traefik", "Kafka"]
        }
      ]
    },
    {
      name : "Fonctionnel",
      subSkills : [
        {
          name : "Gestion de projet",
          skills : ["Travail en équipe"]
        },
        {
          name : "Méthode",
          skills : ["Merise", "Agile", "Scrum"]
        },
      ]
    },
    {
      name : "Langues vivantes",
      subSkills : [
        {
          name : "Français",
          skills : ["Langue maternelle"]
        },
        {
          name : "Anglais",
          skills : ["Intermédiaire"]
        },
      ]
    }
  ]

}
