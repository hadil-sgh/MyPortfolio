import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  @Input({ required: true }) project!: Project;
  @Output() closed = new EventEmitter<void>();

  activeImage = 0;

  @HostListener('document:keydown.escape')
  closeWithEscape(): void {
    this.closed.emit();
  }

  showPrevious(): void {
    this.activeImage = (this.activeImage - 1 + this.project.images.length) % this.project.images.length;
  }

  showNext(): void {
    this.activeImage = (this.activeImage + 1) % this.project.images.length;
  }

  close(): void {
    this.closed.emit();
  }
}
