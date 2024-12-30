import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule ],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss'
})
export class HeaderComponent {
  title = 'agrot';
}