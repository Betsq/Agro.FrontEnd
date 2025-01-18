import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from "./routes/auth/login/login.component";
import { AdvCreateComponent } from './routes/adv/create/adv-create.component';
import { MainComponent } from './routes/main/main.component';
import { HeaderComponent } from "./core/header/header.component";
import {ServicesComponent} from "./routes/services/services.component";
import { ProfileComponent } from './routes/profile/profile.component';
import { CardComponent } from './routes/card/card.component';
import { ConfirmationComponent } from './routes/confirmation/confirmation.component';
import { ChangesComponent } from './routes/changes/changes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignupComponent, AdvCreateComponent, AppComponent, MainComponent, HeaderComponent, ServicesComponent, ProfileComponent, CardComponent, ConfirmationComponent, ChangesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Agro.FrontEnd';
}
