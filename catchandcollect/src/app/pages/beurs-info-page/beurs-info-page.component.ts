import {Component} from '@angular/core';
import {SeparatorComponent} from "../../components/separator/separator.component";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-beurs-info-page',
  imports: [
    SeparatorComponent,
    MatIconModule,
  ],
  templateUrl: './beurs-info-page.component.html',
  styleUrl: './beurs-info-page.component.scss'
})
export class BeursInfoPageComponent {

}
