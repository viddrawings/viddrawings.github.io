import {Component} from '@angular/core';
import {SeparatorComponent} from '../../components/separator/separator.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    SeparatorComponent,
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
