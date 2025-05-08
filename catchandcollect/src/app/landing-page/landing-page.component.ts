import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {SeparatorComponent} from '../components/separator/separator.component';
import {FooterComponent} from '../components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    SeparatorComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
