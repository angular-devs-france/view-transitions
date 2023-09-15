import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TransitionNameDirective} from "../directives/transition-name.directive";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-rooster-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TransitionNameDirective, RouterLink],
  templateUrl: './rooster-detail.component.html',
  styleUrls: ['./rooster-detail.component.css']
})
export class RoosterDetailComponent {
  @Input({required: true}) id!: string;

  copyToClipboard(): void {
    navigator.clipboard.writeText('npx -p @angular/cli@17.0.0-next.4 ng new my-project');
  }
}
