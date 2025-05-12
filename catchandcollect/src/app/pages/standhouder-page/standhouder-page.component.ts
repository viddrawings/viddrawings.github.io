import {Component} from '@angular/core';
import {SeparatorComponent} from "../../components/separator/separator.component";
import {StandhoudersAanmeldenComponent} from '../../components/standhouders-aanmelden/standhouders-aanmelden.component';

@Component({
  selector: 'app-standhouder-page',
  imports: [
    SeparatorComponent,
    StandhoudersAanmeldenComponent
  ],
  templateUrl: './standhouder-page.component.html',
  styleUrl: './standhouder-page.component.scss'
})
export class StandhouderPageComponent {

}
