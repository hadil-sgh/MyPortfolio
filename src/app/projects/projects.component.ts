import { Component } from '@angular/core';
import { ProjectModalComponent } from './project-modal.component';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Enterprise Knowledge Assistant',
      slug: 'enterprise-knowledge-assistant',
      tags: ['LangChain', 'FAISS', 'LLaMA', 'FastAPI', 'Docker'],
      description:
        'A RAG pipeline for natural-language Q&A over large document sets: semantic chunking, dense embeddings, and hybrid dense + keyword retrieval with a reranking stage to cut hallucinations. Exposed via FastAPI with a chat interface that grounds every answer in cited source passages.',
      images: ['/images/projects/enterprise-knowledge-assistant/cover.png', '/images/projects/enterprise-knowledge-assistant/gallery-01.png'],
    },
    {
      title: 'CI/CD Pipeline & Monitoring',
      slug: 'cicd-pipeline-monitoring',
      tags: ['Jenkins', 'Docker', 'SonarQube', 'Nexus', 'Prometheus', 'Grafana'],
      description:
        'End-to-end CI/CD pipelines automating test, build, and deploy, paired with Prometheus and Grafana dashboards for real-time performance and health visibility.',
      images: ['/images/projects/cicd-pipeline-monitoring/cover.jpg', '/images/projects/cicd-pipeline-monitoring/gallery-01.jpg', '/images/projects/cicd-pipeline-monitoring/gallery-02.jpg'],
    },
    {
      title: 'HR Management Platform',
      slug: 'hr-management-platform',
      tags: ['Spring Boot', 'Spring Security', 'Angular', 'MySQL'],
      description:
        'A web application to manage employee data, attendance, payroll, and leave, with secure RESTful APIs connecting the Angular frontend to a Spring Boot backend.',
      images: ['/images/projects/hr-management-platform/cover.png', '/images/projects/hr-management-platform/gallery-01.png', '/images/projects/hr-management-platform/gallery-02.png'],
    },
    {
      title: 'Food E-commerce App',
      slug: 'food-ecommerce-app',
      tags: ['FlutterFlow', 'Firebase'],
      description:
        'A mobile app for food purchases with Firebase authentication and secure payments. Collaborated on a responsive UI and reliable data sync across devices.',
      images: ['/images/projects/food-ecommerce-app/cover.png', '/images/projects/food-ecommerce-app/gallery-01.png', '/images/projects/food-ecommerce-app/gallery-02.png'],
    },
    {
      title: 'Farm Management System',
      slug: 'farm-management-system',
      tags: ['Java', 'JavaFX', 'Symfony'],
      description:
        'A desktop application and companion website giving farmers tools to manage nutrition, production, and stock, with an interface built around everyday farm workflows.',
      images: ['/images/projects/farm-management-system/cover.png', '/images/projects/farm-management-system/gallery-01.png', '/images/projects/farm-management-system/gallery-02.png'],
    },
    {
      title: 'Election Management App',
      slug: 'election-management-app',
      tags: ['C', 'Glade', 'Ubuntu'],
      description:
        'A desktop application for running election processes end to end — candidate registration, voting, and result tallying — built with an intuitive Glade interface.',
      images: ['/images/projects/election-management-app/cover.jpg', '/images/projects/election-management-app/gallery-01.jpg'],
    },
  ];

  selectedProject: Project | null = null;

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }
}
