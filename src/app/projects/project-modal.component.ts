import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Project } from "./project.model";

@Component({
  selector: "app-project-modal",
  standalone: true,
  templateUrl: "./project-modal.component.html",
  styleUrl: "./project-modal.component.scss",
})
export class ProjectModalComponent implements OnChanges {
  @Input({ required: true }) project!: Project;
  @Output() closed = new EventEmitter<void>();

  activeImage = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["project"]) {
      this.activeImage = 0;
    }
  }

  @HostListener("document:keydown.escape")
  closeWithEscape(): void {
    this.closed.emit();
  }

  showPrevious(): void {
    if (!this.project.images.length) {
      return;
    }

    this.activeImage =
      (this.activeImage - 1 + this.project.images.length) %
      this.project.images.length;
  }

  showNext(): void {
    if (!this.project.images.length) {
      return;
    }

    this.activeImage = (this.activeImage + 1) % this.project.images.length;
  }

  close(): void {
    this.closed.emit();
  }
}
