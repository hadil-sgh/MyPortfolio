import { Component } from "@angular/core";
import { Project } from "../projects/project.model";
import { ExperienceModalComponent, ExperienceMedia } from "../experience-modal/experience-modal.component";

interface Stage {
  status: "progress" | "passed";
  kind: "research" | "experience" | "education";
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
  experience?: {
    imageFolder: string;
    imageFiles: string[];
    description: string;
    tags: string[];
    highlights?: { title: string; description: string }[];
  };
}

@Component({
  selector: "app-timeline",
  standalone: true,
  imports: [ExperienceModalComponent],
  templateUrl: "./timeline.component.html",
  styleUrl: "./timeline.component.scss",
})
export class TimelineComponent {
  readonly stages: Stage[] = [
    {
      status: "progress",
      kind: "research",
      org: "National Engineering School of Gabès",
      role: "Computer &amp; Communications Engineering (Remote)",
      rolePrefix: "PhD",
      roleSuffix: "in",
      place: "Gabès, Tunisia",
      dates: "Sep 2026 — Present",
      bullets: [],
      thesisTitle:
        "XAI-Enhanced Multimodal System for Medical Imaging Diagnostics",
      thesisDescription:
        "Explainable AI reasoning over CT/MRI scans alongside clinical text.",
    },
    {
      status: "passed",
      kind: "experience",
      org: "Ooredoo Tunisia",
      role: "End-of-Studies Internship — AGENTPORTAL",
      place: "Tunis, Tunisia",
      dates: "Feb 2025 — Aug 2025",
      bullets: [
        "Built a real-time audio pipeline (Flask) with speech-to-text (Faster Whisper), speaker diarization (SpeechBrain), and live sentiment analysis for agent assistance.",
        "Built a post-call intelligence module for performance scoring, feedback categorization, call summaries, and a churn-prediction model for proactive retention.",
        "Containerized services with Docker and built a CI/CD pipeline for reproducible, scalable deployment.",
        "Built the full-stack platform (Spring Boot + Angular) with role-based security and agent/manager dashboards.",
      ],
      experience: {
        imageFolder: "Experience/Ooredoo Tunisia",
        imageFiles: [
          "login.png", "register.png", "mailreg.png", "mailval.png",
          "validate acc.png", "authpass.png", "authedit.png", "authdetails edit.png",
          "base.png",
          "dahagent.png", "agentdash2.png", "agent per 2.png", "perfagent1.png",
          "dashmanager.png", "dashmanager1.png", "dashmanager12.png", "dashmanager2.png",
          "dashmanagerper.png", "performancemanger1.png",
          "vieww perfomrmance admin1.png", "vieww perfomrmance admin2_4.png",
          "liveanalys.png", "manula dial.png",
          "call managment.png", "call ditails.png", "call history.png", "callcard.png", "fitercall.png",
          "POST CALL.png", "postcallmail.png", "complaint.png", "view complaints.png",
          "notes.png", "notedetails.png", "notification updated.png",
          "assing team.png", "create team view.png", "view team.png", "viewteam.png",
          "assign agents.png", "addagent.png", "delagent1.png", "delagent2.png",
          "markhfulagent.png", "userlist.png",
          "assign tip.png", "assign tips.png", "filter tip.png", "fiter tips.png", "viewtip.png",
          "create know.png", "cretae know.png", "editknow.png", "editknow_2.png", "editknow_3.png",
          "viewknow.png", "viewknow_2.png", "filter know.png", "filter know_2.png",
          "filter knowlage.png", "fiterknowage.png", "dekete know.png",
          "excel.png", "deletewarningnote.png",
        ],
        description:
          "End-of-studies platform for Ooredoo Tunisia: a real-time contact-center intelligence suite. " +
          "Live transcription and speaker diarization (Faster Whisper + SpeechBrain) feed real-time " +
          "sentiment analysis (VADER + harshit345), while LLaMA-based prompting scores agent performance " +
          "and detects complaints for coaching insights. A churn-prediction API flags at-risk customers for " +
          "proactive retention. Full-stack delivery on Spring Boot + Angular with role-based dashboards, " +
          "containerized with Docker and shipped through a CI/CD pipeline. The audio pipeline runs at " +
          "~0.8 accuracy with ~273ms latency.",
        tags: [
          "Spring Boot", "Angular", "Faster Whisper", "SpeechBrain",
          "VADER", "LLaMA", "Docker", "CI/CD", "Churn Prediction",
        ],
          highlights: [
    {
      title: "Real-Time Speech-to-Text and Sentiment Analysis",
      description:
        "Live transcription of customer-agent interactions using Faster Whisper, speaker diarization " +
        "with SpeechBrain, and real-time sentiment analysis with VADER and harshit345 models.",
    },
    {
      title: "Agent Performance Tracking and Complaint Detection",
      description:
        "LLaMA-based language models through prompt APIs evaluate conversation quality, detect " +
        "complaints, and generate actionable coaching insights.",
    },
    {
      title: "Churn Prediction",
      description:
        "A machine learning-powered API identifies customers at risk of leaving, enabling proactive " +
        "retention strategies.",
    },
    {
      title: "Platform Development",
      description:
        "Built with a Spring Boot backend and Angular frontend, ensuring scalability, maintainability, " +
        "and seamless integration of all modules within a single, user-friendly interface.",
    },
  ],
      },
    },
    {
      status: "passed",
      kind: "experience",
      org: "Trends Company",
      role: "Software Engineering Intern",
      place: "Lac Tunis, Tunisia",
      dates: "Jun 2024 — Aug 2024",
      bullets: [
        "Built a web app for managing interns\u2019 data and progress using Express.js, Angular, and MySQL.",
      ],
      experience: {
        imageFolder: "Experience/Trends Company",
        imageFiles: [],
        description: "Web app for managing interns' data and progress.",
        tags: ["Express.js", "Angular", "MySQL"],
      },
    },
    {
      status: "passed",
      kind: "education",
      org: "Esprit University",
      role: "B.Sc. in Software Engineering",
      place: "Ariana, Tunisia",
      dates: "Sep 2023 — Sep 2025",
      bullets: [],
      note: "Graduated with excellence: 16.4/20 annual average and 18.5/20 for the final defense.",
    },
    {
      status: "passed",
      kind: "experience",
      org: "ITGust",
      role: "Software Engineering Intern",
      place: "Remote",
      dates: "May 2023 — Jun 2023",
      bullets: [
        "Built an eCommerce platform with Spring Boot, Angular, and MySQL, contributing to full delivery of project milestones.",
      ],
      experience: {
        imageFolder: "Experience/ITGust",
        imageFiles: [],
        description: "eCommerce platform delivery.",
        tags: ["Spring Boot", "Angular", "MySQL"],
      },
    },
    {
      status: "passed",
      kind: "education",
      org: "Monastir Preparatory Engineering Institute",
      role: "Preparatory Training (PT)",
      place: "Monastir, Tunisia",
      dates: "Sep 2019 — 2022",
      bullets: [],
    },
  ];

  readonly experienceStages = this.stages.filter(
    (stage) => stage.kind === "experience",
  );
  readonly educationStages = this.stages.filter(
    (stage) => stage.kind !== "experience",
  );

  selectedExperience: ExperienceMedia | null = null;

  private toAssetPath(folder: string, fileName: string): string {
    return `/images/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;
  }

  openExperience(stage: Stage): void {
    if (!stage.experience) return;
    this.selectedExperience = {
      slug: stage.org.toLowerCase().replace(/\s+/g, "-"),
      title: `${stage.org} — ${stage.role}`,
      description: stage.experience.description,
      tags: stage.experience.tags,
          highlights: stage.experience.highlights, // NEW
      images: stage.experience.imageFiles.map((file) =>
        this.toAssetPath(stage.experience!.imageFolder, file),
      ),
    };
  }

  closeExperience(): void {
    this.selectedExperience = null;
  }
}