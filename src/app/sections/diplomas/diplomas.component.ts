import {Component} from '@angular/core';
import {faGraduationCap, faMinus, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: 'diploma-component',
    templateUrl: './diplomas.component.html',
    styleUrls: ['./diplomas.component.css']
})

export class DiplomasComponent {

    public faGraduationCap: IconDefinition = faGraduationCap;
    public faMinus: IconDefinition = faMinus;
    public faPlus: IconDefinition = faPlus;
    public faCheck: IconDefinition = faCheck;
    public collapsed: { [name: string]: boolean } = {};

    public handleClick(key: string): void {
        this.collapsed[key] = !this.collapsed[key]
    }

    public isActive(key: string): boolean {
        return this.collapsed["key"]
    }

    public universities = [
        {
            name: 'Université Toulouse 1 Capitole',
            location: 'Toulouse, France',
            website: 'https://www.ut-capitole.fr/',
            diplomas:
                [
                    {
                        name: 'Master 2 MIAGE',
                        fullName: 'Méthodes Informatiques Appliquées à la Gestion des Entreprises',
                        speciality: 'Parcours type Ingénierie Des Processus Métier (IPM)',
                        year: '2021 -',
                        new: true,
                        teaching:
                            [
                                'Management de projet (SCRUM)',
                                'Démarche de développement',
                                'Analyse et conception objet des SI (Merise)',
                                'Programmation Objet (UML, Java)',
                                "Développement d'Applications Internet (Java EE, Hibernate)",
                                "Données, Conception, Manipulation (Talend, SQL Server, Oracle, SQL, PL/SQL)",
                                "Données, Intégration, Analyse (OLAP, SAP Business Ojbects)",
                                "Big Data (NoSQL, Hadoop, Spark)",
                                "Modélisation des processus métiers (Bizagi Process Modeler)",
                                "Ingénierie des processus métiers",
                                "Applications orientées services (SOAP, API REST)",
                                "Transformation du SI",
                                "Urbanisation et architecture d'entreprises",
                                "Architecture fonctionnelle des SI",
                                "Accompagnement client",
                            ]
                    },
                    {
                        name: 'Master 1 MIAGE',
                        fullName: 'Méthodes Informatiques Appliquées à la Gestion des Entreprises',
                        speciality: 'Parcours type Ingénierie Métier (IM)',
                        year: '2020 - 2021',
                        teaching:
                            [
                                "Programmation structurée (.NET, VB.NET, Visual Studio, Algorithmes)",
                                "Intelligence artificielle (Réseaux sociaux, Web sémantique, Système de recommandation)",
                                "Conception de site Web (PHP, JavaScript, HTML, CSS)",
                                "Architecture et Réseaux (Linux, Assembleur)",
                                "Informatique décisionnelle (SQL Server, OLAP, SAP-BO)",
                                "Base de Données (Oracle, SQL Developer, SQL, PL/SQL)",
                                "Conception des SI (Merise)",
                                "Conduite de projet",
                                "Gestion ded processus",
                                "Droit et Nouvelles Technologies (RGPD)",
                                "théorie de la décision (Probabilités, Statistiques)",
                                'Machine Learning'
                            ]
                    },
                    {
                        name: 'L3 MIASHS',
                        fullName: 'Mathématiques et Informatique Appliquées Aux Sciences Humaines et Sociales',
                        speciality: 'Parcours Technologies de l’information (TI)',
                        year: '2019 - 2020',
                        teaching:
                            [
                                'Programmation (Python)',
                                'Conception de site Web (HTML, CSS, JavaScript)',
                                'Gestion de projet',
                                'Analyse de données (Scikit-learn, Matplotlib)',
                                'Structutation et gestion de la donnée (Merise, SQL, MS Access)',
                                'Processus de décision (MS Excel, VBA)',
                                'Mémoire (Pandas, NoSQL, Cypher, Neo4j)'
                            ]
                    }
                ],
        },
        {
            name: 'AMEP',
            location: 'Fort-de-France, Martinique',
            website: 'http://www.amep.fr/',
            diplomas:
                [
                    {
                        name: 'BTS SIO',
                        fullName: 'Services Informatiques Aux Organisations',
                        speciality: 'Option SLAM (Solutions logicielles et applications Métier)',
                        year: '2015 - 2017',
                        teaching:
                            [
                                'Maths approfondie',
                                'Algorithmes appliqués',
                                'Programmation orienté objet (PHP, Symfony)',
                                "Développement d'application (C++, Java, Eclipse, Android Studio)",
                                'Base de données (SQL, MySQL)',
                                'Analyse économique, managériale et juridique des services informatique',
                            ]
                    }
                ],
        },
        {
            name: 'Lycée Bellevue',
            location: 'Fort-de-France, Martinique',
            website: 'http://lyc-bellevue.ac-martinique.fr/',
            diplomas:
                [
                    {
                        name: 'BAC S',
                        fullName: 'Scientifique',
                        speciality: 'Option ISN (Informatique et science du numérique)',
                        year: '2015',
                        teaching: []
                    }
                ],
        }
    ]

}
