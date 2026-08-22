import { Component } from '@angular/core';

interface Cert {
  name: string;
  issuer: string;
  date?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  readonly certs: Cert[] = [
    { name: 'AI Engineer — Agentic Track: The Complete Agent & MCP Course', issuer: 'Ligency / Ed Donner' },
    { name: 'AI Engineer — Core Track: LLM Engineering, RAG, QLoRA, Agents', issuer: 'Ligency / Ed Donner' },
    { name: 'AI Engineer — Production Track: Deploy LLMs & Agents at Scale', issuer: 'Ligency / Ed Donner' },
    { name: 'Docker Training Course for the Absolute Beginner', issuer: 'KodeKloud' },
    { name: 'DevOps Beginners to Advanced with Projects', issuer: 'Udemy' },
    { name: 'Test Java Applications with JUnit 5, Mockito, Testcontainers', issuer: 'Udemy' },
    { name: 'Introduction to AWS', issuer: 'DataCamp', date: 'Nov 2024' },
  ];

  readonly languages = [
    { name: 'Arabic', level: 'C2' },
    { name: 'English', level: 'C1' },
    { name: 'French', level: 'B2' },
  ];
}
