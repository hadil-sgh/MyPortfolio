import { Component } from '@angular/core';

interface Project {
  title: string;
  tags: string[];
  description: string;
  status?: string;
  visual: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Enterprise Knowledge Assistant',
      tags: ['LangChain', 'FAISS', 'LLaMA', 'FastAPI', 'Docker'],
      description:
        'A RAG pipeline for natural-language Q&A over large document sets: semantic chunking, dense embeddings, and hybrid dense + keyword retrieval with a reranking stage to cut hallucinations. Exposed via FastAPI with a chat interface that grounds every answer in cited source passages.',
      visual: 'knowledge',
    },
    {
      title: 'CI/CD Pipeline & Monitoring',
      tags: ['Jenkins', 'Docker', 'SonarQube', 'Nexus', 'Prometheus', 'Grafana'],
      description:
        'End-to-end CI/CD pipelines automating test, build, and deploy, paired with Prometheus and Grafana dashboards for real-time performance and health visibility.',
      visual: 'pipeline',
    },
    {
      title: 'HR Management Platform',
      tags: ['Spring Boot', 'Spring Security', 'Angular', 'MySQL'],
      description:
        'A web application to manage employee data, attendance, payroll, and leave, with secure RESTful APIs connecting the Angular frontend to a Spring Boot backend.',
      visual: 'hr',
    },
    {
      title: 'Food E-commerce App',
      tags: ['FlutterFlow', 'Firebase'],
      description:
        'A mobile app for food purchases with Firebase authentication and secure payments. Collaborated on a responsive UI and reliable data sync across devices.',
      visual: 'food',
    },
    {
      title: 'Farm Management System',
      tags: ['Java', 'JavaFX', 'Symfony'],
      description:
        'A desktop application and companion website giving farmers tools to manage nutrition, production, and stock, with an interface built around everyday farm workflows.',
      visual: 'farm',
    },
    {
      title: 'Election Management App',
      tags: ['C', 'Glade', 'Ubuntu'],
      description:
        'A desktop application for running election processes end to end — candidate registration, voting, and result tallying — built with an intuitive Glade interface.',
      visual: 'election',
    },
  ];

  activeVisual: string | null = null;

  rotateVisual(title: string): void {
    this.activeVisual = this.activeVisual === title ? null : title;
  }
}
