import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TransitionNameDirective} from "../directives/transition-name.directive";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TransitionNameDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  roosterList = Array.from({length: 22}, (_, i) => (i + 1).toString());

}
