import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'Bash', 'C'] },
    { label: 'Frameworks', items: ['Spring Boot', 'Spring Security', 'Angular', 'Flask'] },
    { label: 'Agentic AI & LLM', items: ['AI Agents', 'MCP', 'RAG', 'QLoRA Fine-Tuning', 'LLM Deployment at Scale'] },
    { label: 'Machine Learning', items: ['LLaMA', 'Scikit-learn', 'Churn Prediction', 'Sentiment Analysis'] },
    { label: 'Speech', items: ['Faster Whisper', 'SpeechBrain'] },
    { label: 'Databases', items: ['MySQL', 'MariaDB', 'MongoDB', 'PostgreSQL'] },
    { label: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Terraform', 'Prometheus', 'Grafana', 'SonarQube', 'Nexus', 'AWS'] },
    { label: 'Testing & Other', items: ['JUnit', 'Mockito', 'Testcontainers', 'ISTQB', 'REST/Postman', 'Microservices', 'Scrum/Agile'] },
    { label: 'AI Coding Tools', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex', 'ChatGPT'] },
  ];
}
