import { Component } from '@angular/core';

@Component({
  selector: 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {

  public skillsArray: any[] = [
    {
      name : "Language & Technologies",
      subSkills : [
        {
          name : "Langages web",
          skills : ['PHP', 'HTML', 'CSS', 'JavaScript']
        },
        {
          name : "Librairies & frameworks",
          skills : ['.NET', 'ASP.NET', 'ReactJS', 'Bootstrap']
        },
        {
          name : "Analyse de données",
          skills : ["Python (Pandas, Numpy, Matplotlib)"]
        },
        {
          name : "Orienté objet",
          skills : ["Java", "C#", "VB.NET"]
        },
        {
          name : "Base de données",
          skills : ["SQL", "PL/SQL", "Cypher"]
        },
        {
          name : "Shell",
          skills : ["Bash"]
        }
      ]
    },
    {
      name : "Logiciels",
      subSkills : [
        {
          name : "ETL",
          skills : ["SSIS (SQL Server)"]
        },
        {
          name : "SGBD Relationel",
          skills : ["Oracle", "SQL Server", "MySQL", "MS Access"]
        },
        {
          name : "SGBD NoSQL",
          skills : ["Neo4j"]
        },
        {
          name : "IDE",
          skills : ["Visual Studio", "Spyder", "Jupyter NoteBook", "Oracle SQL Developer"]
        },
        {
          name : "Decisionnel",
          skills : ["SAP Bunisess Objects (UDT, Web I)"]
        },
        {
          name : "Versionning",
          skills : ["Git", "Apache SVN"]
        },
      ]
    },
    {
      name : "Fonctionnel",
      subSkills : [
        {
          name : "Gestion de projet",
          skills : ["Travail en équipe", "Gestion des coûts", "Gestion des risques"]
        },
        {
          name : "Méthode",
          skills : ["Merise, Agile"]
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
