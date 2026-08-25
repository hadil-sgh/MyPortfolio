import { Component } from "@angular/core";
import { ProjectModalComponent } from "./project-modal.component";
import { Project } from "./project.model";

interface ProjectConfig {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  imageFolder: string;
  imageFiles: string[];
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  private readonly projectConfigs: ProjectConfig[] = [
    {
      title: "Enterprise Knowledge Assistant",
      slug: "enterprise-knowledge-assistant",
      tags: ["LangChain", "FAISS", "LLaMA", "FastAPI", "Docker"],
      description:
        "A RAG pipeline for natural-language Q&A over large document sets: semantic chunking, dense embeddings, and hybrid dense + keyword retrieval with a reranking stage to cut hallucinations. Exposed via FastAPI with a chat interface that grounds every answer in cited source passages.",
      imageFolder: "Enterprise Knowledge Assistant",
      imageFiles: ["Screenshot 2026-08-23 224057.png"],
    },
    {
      title: "CI/CD Pipeline & Monitoring",
      slug: "cicd-pipeline-monitoring",
      tags: [
        "Jenkins",
        "Docker",
        "SonarQube",
        "Nexus",
        "Prometheus",
        "Grafana",
      ],
      description:
        "End-to-end CI/CD pipelines automating test, build, and deploy, paired with Prometheus and Grafana dashboards for real-time performance and health visibility.",
      imageFolder: "CICD Pipeline & Monitoring",
      imageFiles: [
        "1731951548536.jpg",
        "1731951548571.jpg",
        "1731951549023.jpg",
        "1731951549302.jpg",
        "1731951549328.jpg",
        "1731951550816.jpg",
        "1731951551147.jpg",
        "1731951551271.jpg",
        "1731951551526.jpg",
        "1731951551621.jpg",
        "1731951551934.jpg",
        "1731951551979.jpg",
        "1731951552006.jpg",
      ],
    },
    {
      title: "HR Management Platform",
      slug: "hr-management-platform",
      tags: ["Spring Boot", "Spring Security", "Angular", "MySQL"],
      description:
        "A web application to manage employee data, attendance, payroll, and leave, with secure RESTful APIs connecting the Angular frontend to a Spring Boot backend.",
      imageFolder: "HR Management Platform",
      imageFiles: [
        "Screenshot 2024-05-12 105907.png",
        "Screenshot 2024-05-12 105935.png",
        "Screenshot 2024-05-12 105948.png",
        "Screenshot 2024-05-12 110002.png",
        "Screenshot 2024-05-12 110013.png",
        "Screenshot 2024-05-12 110026.png",
        "Screenshot 2024-05-12 110104.png",
        "Screenshot 2024-05-12 110141.png",
        "Screenshot 2024-05-12 110218.png",
        "Screenshot 2024-05-12 110229.png",
        "Screenshot 2024-05-12 110312.png",
        "Screenshot 2024-05-12 110327.png",
        "Screenshot 2024-05-12 110337.png",
        "Screenshot 2024-05-12 110408.png",
        "Screenshot 2024-05-12 110428.png",
        "Screenshot 2024-05-12 110449.png",
        "Screenshot 2024-05-12 110457.png",
        "Screenshot 2024-05-12 110645.png",
        "Screenshot 2024-05-12 110703.png",
        "Screenshot 2024-05-12 113128.png",
      ],
    },
    {
      title: "Food E-commerce App",
      slug: "food-ecommerce-app",
      tags: ["FlutterFlow", "Firebase"],
      description:
        "A mobile app for food purchases with Firebase authentication and secure payments. Collaborated on a responsive UI and reliable data sync across devices.",
      imageFolder: "Food E-commerce App",
      imageFiles: [
        "Screenshot 2026-08-23 224807.png",
        "Screenshot 2026-08-23 224816.png",
        "Screenshot 2026-08-23 225440.png",
        "Screenshot 2026-08-23 225458.png",
        "Screenshot 2026-08-23 225508.png",
        "Screenshot 2026-08-23 225524.png",
        "Screenshot 2026-08-23 225532.png",
      ],
    },
    {
      title: "Farm Management System",
      slug: "farm-management-system",
      tags: ["Java", "JavaFX", "Symfony"],
      description:
        "A desktop application and companion website giving farmers tools to manage nutrition, production, and stock, with an interface built around everyday farm workflows.",
      imageFolder: "Farm Management System",
      imageFiles: [
        "Screenshot 2026-08-23 222237.png",
        "Screenshot 2026-08-23 222303.png",
        "Screenshot 2026-08-23 222314.png",
      ],
    },
    {
      title: "Election Management App",
      slug: "election-management-app",
      tags: ["C", "Glade", "Ubuntu"],
      description:
        "A desktop application for running election processes end to end — candidate registration, voting, and result tallying — built with an intuitive Glade interface.",
      imageFolder: "Election Management App",
      imageFiles: [],
    },
  ];

  readonly projects: Project[] = this.projectConfigs.map((project) => {
    const images = project.imageFiles.map((fileName) =>
      this.toAssetPath(project.imageFolder, fileName),
    );

    return {
      ...project,
      images,
      thumbnail: images[0] ?? null,
    };
  });

  selectedProject: Project | null = null;

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  private toAssetPath(folder: string, fileName: string): string {
    const encodedFolder = encodeURIComponent(folder);
    const encodedFileName = encodeURIComponent(fileName);

    return `/images/projects/${encodedFolder}/${encodedFileName}`;
  }
}
