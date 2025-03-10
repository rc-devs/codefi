import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToggleButtonComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularDemo';
}
