import { Component, Input, Output, EventEmitter, HostListener } from "@angular/core";

export interface ExperienceHighlight {
  title: string;
  description: string;
}

export interface ExperienceMedia {
  images: string[];
  title: string;
  description: string;
  tags: string[];
  slug: string;
  highlights?: ExperienceHighlight[]; // NEW
}
@Component({
  selector: "app-experience-modal",
  standalone: true,
  templateUrl: "./experience-modal.component.html",
  styleUrl: "./experience-modal.component.scss",
})
export class ExperienceModalComponent {
  @Input() experience: ExperienceMedia | null = null;
  @Output() closed = new EventEmitter<void>();

  activeImage = 0;

  close(): void {
    this.activeImage = 0;
    this.closed.emit();
  }

  showPrevious(): void {
    if (!this.experience?.images.length) return;
    this.activeImage =
      (this.activeImage - 1 + this.experience.images.length) %
      this.experience.images.length;
  }

  showNext(): void {
    if (!this.experience?.images.length) return;
    this.activeImage = (this.activeImage + 1) % this.experience.images.length;
  }

  @HostListener("document:keydown.escape")
  handleEscape(): void {
    if (this.experience) this.close();
  }

  @HostListener("document:keydown.arrowLeft")
  handleLeft(): void {
    if (this.experience) this.showPrevious();
  }

  @HostListener("document:keydown.arrowRight")
  handleRight(): void {
    if (this.experience) this.showNext();
  }
}