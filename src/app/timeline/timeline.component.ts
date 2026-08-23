import { Component, HostListener } from '@angular/core';

interface StageMedia {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface Stage {
  status: 'progress' | 'passed';
  kind: 'research' | 'experience' | 'education';
  org: string;
  role: string;
  place: string;
  dates: string;
  bullets: string[];
  rolePrefix?: string;
  roleSuffix?: string;
  thesisTitle?: string;
  thesisDescription?: string;
  note?: string;
  media?: StageMedia;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  readonly stages: Stage[] = [
    {
      status: 'progress',
      kind: 'research',
      org: 'National Engineering School of Gabès',
      role: 'Computer &amp; Communications Engineering (Remote)',
      rolePrefix: 'PhD',
      roleSuffix: 'in',
      place: 'Gabès, Tunisia',
      dates: 'Sep 2026 — Present',
      bullets: [],
      thesisTitle: 'XAI-Enhanced Multimodal System for Medical Imaging Diagnostics',
      thesisDescription: 'Explainable AI reasoning over CT/MRI scans alongside clinical text.',
    },
    
    {
      status: 'passed',
      kind: 'experience',
      org: 'Ooredoo Tunisia',
      role: 'End-of-Studies Internship — AGENTPORTAL',
      place: 'Tunis, Tunisia',
      dates: 'Feb 2025 — Aug 2025',
      bullets: [
        'Built a real-time audio pipeline (Flask) with speech-to-text (Faster Whisper), speaker diarization (SpeechBrain), and live sentiment analysis for agent assistance.',
        'Built a post-call intelligence module for performance scoring, feedback categorization, call summaries, and a churn-prediction model for proactive retention.',
        'Containerized services with Docker and built a CI/CD pipeline for reproducible, scalable deployment.',
        'Built the full-stack platform (Spring Boot + Angular) with role-based security and agent/manager dashboards.',
      ],
      media: {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
        alt: 'Team collaborating around a table',
      },
    },
    {
      status: 'passed',
      kind: 'experience',
      org: 'Trends Company',
      role: 'Software Engineering Intern',
      place: 'Lac Tunis, Tunisia',
      dates: 'Jun 2024 — Aug 2024',
      bullets: [
        'Built a web app for managing interns\u2019 data and progress using Express.js, Angular, and MySQL.',
      ],
      media: {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
        alt: 'Modern software engineering workspace',
      },
    },
    {
      status: 'passed',
      kind: 'education',
      org: 'Esprit University',
      role: 'B.Sc. in Software Engineering',
      place: 'Ariana, Tunisia',
      dates: 'Sep 2023 — Sep 2025',
      bullets: [],
      note: 'Graduated with excellence: 16.4/20 annual average and 18.5/20 for the final defense.',
    },
    {
      status: 'passed',
      kind: 'experience',
      org: 'ITGust',
      role: 'Software Engineering Intern',
      place: 'Remote',
      dates: 'May 2023 — Jun 2023',
      bullets: [
        'Built an eCommerce platform with Spring Boot, Angular, and MySQL, contributing to full delivery of project milestones.',
      ],
      media: {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
        alt: 'Planning and reviewing a software project',
      },
    },
    {
      status: 'passed',
      kind: 'education',
      org: 'Monastir Preparatory Engineering Institute',
      role: 'Preparatory Training (PT)',
      place: 'Monastir, Tunisia',
      dates: 'Sep 2019 — 2022',
      bullets: [],
    },
  ];

  readonly experienceStages = this.stages.filter((stage) => stage.kind === 'experience');
  readonly educationStages = this.stages.filter((stage) => stage.kind !== 'experience');
  selectedStage: Stage | null = null;

  openMedia(stage: Stage): void {
    if (stage.media) {
      this.selectedStage = stage;
    }
  }

  closeMedia(): void {
    this.selectedStage = null;
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeMedia();
  }
}
